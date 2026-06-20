# This example sets up an endpoint using the Flask framework.
# Watch this video to get started: https://youtu.be/7Ul1vfmsDck.

import asyncio
import html
import os
from datetime import datetime, timezone
from pingram import Pingram
import stripe
from urllib.parse import quote

from flask import Flask, request, jsonify

app = Flask(__name__)

PINGRAM_DEFAULT_BASE_URL = 'https://api.pingram.io'
PINGRAM_ORDER_EMAIL_TYPE = 'juicegels_order'
PINGRAM_ORDER_RECIPIENT = 'juicegels@gmail.com'
RENDER_SECRET_DIR = '/etc/secrets'
NAIL_SIZE_GUIDE_PRODUCT_ID = 'JUICEGELS-0286'
FREE_TRACKED48_THRESHOLD_PENCE = 3000

# CUSTOMIZABLE: Modify this text to change the "What Happens Next?" section in the customer confirmation email.
# You can use {instagram} which will be automatically replaced with the customer's Instagram handle (e.g. @username).
POST_PAYMENT_PROCESS_TEXT = (
    "Since our press-on nails are hand-crafted to fit you perfectly, the next step is confirming your sizes!\n\n"
    "We will contact you via Instagram ({instagram}) or your email within 24 hours to confirm your nail sizes.\n\n"
    "If you already ordered a Sizing Guide or know your sizes, we will double-check this with you. Once sizes are finalized, we will start hand-crafting your custom set!\n\n"
    "Once your nails have been made, We will send you pictures of your order to confirm you're happy with how they turned out before they're dispatched."
)



def read_secret(secret_name, env_var_name=None):
  candidate_names = [name for name in [env_var_name, secret_name, str(secret_name or '').upper()] if name]

  for candidate_name in candidate_names:
    candidate_value = str(os.environ.get(candidate_name, '') or '').strip()
    if not candidate_value:
      continue

    if os.path.isfile(candidate_value):
      with open(candidate_value, 'r', encoding='utf-8') as secret_file:
        return secret_file.read().strip()

    return candidate_value

  secret_path = os.path.join(RENDER_SECRET_DIR, secret_name)
  if os.path.isfile(secret_path):
    with open(secret_path, 'r', encoding='utf-8') as secret_file:
      return secret_file.read().strip()

  return ''

# #LIVE Mode

# if not stripe_api_key:

#   raise RuntimeError('Missing Stripe secret file stripe_live_v1.')
# stripe_api_key = read_secret('stripe_live_v1', 'STRIPE_SECRET_KEY')
# client = stripe.StripeClient(stripe_api_key)

# SHIPPING_OPTIONS = {
#   'tracked24': {
#     'stripe_rate_id': 'shr_1Ti0hyK4CROOpWXUhiIhLqWy',
#     'label': 'Royal Mail Tracked 24',
#     'amount_pence': 400,
#     'estimate_text': 'Estimated delivery within 1 business day after the order is finished.',
#   },
#   'tracked48': {
#     'stripe_rate_id': 'shr_1Ti0ieK4CROOpWXU5Cbop3Ii',
#     'label': 'Royal Mail Tracked 48',
#     'amount_pence': 199,
#     'estimate_text': 'Estimated delivery within 2 days after the order is finished.',
#     'free_threshold_pence': FREE_TRACKED48_THRESHOLD_PENCE,
#   },
# }

##TEST Mode
client = stripe.StripeClient("sk_test_51TgWqGK9S4gHGvxwFNa7SNCtpDCF22j3ViHQ9cQXgOSaNICLk4tRK9HjOFmLxv0FhHHg08X0LUtckmEK1aybXgt700mi1zYqlx")

SHIPPING_OPTIONS = {
  'tracked24': {
    'stripe_rate_id': 'shr_1TjOFhK9S4gHGvxwGcIJ8ICh',
    'label': 'Royal Mail Tracked 24',
    'amount_pence': 400,
    'estimate_text': 'Estimated delivery within 1 business day after the order is finished.',
  },
  'tracked48': {
    'stripe_rate_id': 'shr_1TjOJVK9S4gHGvxwRClQMfr1',
    'label': 'Royal Mail Tracked 48',
    'amount_pence': 199,
    'estimate_text': 'Estimated delivery within 2 days after the order is finished.',
    'free_threshold_pence': FREE_TRACKED48_THRESHOLD_PENCE,
  },
}

def build_checkout_items_param(items):
  encoded_items = []

  for item in items:
    product = item.get('product', {})
    product_id = quote(str(product.get('id', '')).strip(), safe='')
    shape = quote(str(item.get('shape', '')).strip(), safe='')
    length = quote(str(item.get('length', '')).strip(), safe='')
    quantity = quote(str(int(item.get('quantity', 1))), safe='')

    encoded_items.append('|'.join([product_id, shape, length, quantity]))

  return ','.join(encoded_items)


def is_nail_size_guide_product(product):
  product_id = str(get_value(product, 'id', '') or '').strip()
  return product_id == NAIL_SIZE_GUIDE_PRODUCT_ID


def is_first_time_buyer(email):
  if not email:
    return True

  try:
    sessions = client.v1.checkout.sessions.list(
      params={
        'customer_details': {'email': email},
        'limit': 100
      }
    )
    for session in sessions.auto_paging_iter():
      if get_value(session, 'payment_status') == 'paid' or get_value(session, 'status') == 'complete':
        return False
    return True
  except Exception as e:
    print(f"Error checking first-time buyer status for {email}: {e}")
    return True


def get_value(source, key, default=None):
  if source is None:
    return default

  if isinstance(source, dict):
    return source.get(key, default)

  return getattr(source, key, default)


def get_data_list(response):
  data = get_value(response, 'data', [])
  return data if isinstance(data, list) else []


def normalize_coupon_code(raw_code):
  return str(raw_code or '').strip().upper()


def format_money_from_pence(amount_pence):
  return f"£{int(amount_pence or 0) / 100:.2f}"


def format_unix_timestamp(timestamp):
  if not timestamp:
    return ''

  return datetime.fromtimestamp(int(timestamp), timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')


def parse_int(value, default=0):
  try:
    return int(value)
  except (TypeError, ValueError):
    return default


def escape_html(value):
  return html.escape(str(value or ''))


def format_address(address):
  if not address:
    return ''

  parts = [
    get_value(address, 'line1', ''),
    get_value(address, 'line2', ''),
    get_value(address, 'city', ''),
    get_value(address, 'state', ''),
    get_value(address, 'postal_code', ''),
    get_value(address, 'country', ''),
  ]

  return ', '.join(str(part).strip() for part in parts if str(part or '').strip())


def build_info_table(rows):
  table_rows = []

  for label, value in rows:
    table_rows.append(
      '<tr>'
      f'<th style="text-align:left;padding:10px 12px;border:1px solid #d1d5db;background:#f8fafc;width:220px;">{escape_html(label)}</th>'
      f'<td style="padding:10px 12px;border:1px solid #d1d5db;">{escape_html(value)}</td>'
      '</tr>'
    )

  return (
    '<table style="border-collapse:collapse;width:100%;margin:0 0 24px;">'
    '<tbody>'
    f'{"".join(table_rows)}'
    '</tbody>'
    '</table>'
  )


def build_items_table(items):
  if not items:
    return '<p style="margin:0 0 24px;">No line items were returned by Stripe.</p>'

  rows = []
  for item in items:
    rows.append(
      '<tr>'
      f'<td style="padding:10px 12px;border:1px solid #d1d5db;">{escape_html(item.get("description", "Item"))}</td>'
      f'<td style="padding:10px 12px;border:1px solid #d1d5db;text-align:center;">{escape_html(item.get("quantity", 1))}</td>'
      f'<td style="padding:10px 12px;border:1px solid #d1d5db;text-align:right;">{escape_html(item.get("unit_price", ""))}</td>'
      f'<td style="padding:10px 12px;border:1px solid #d1d5db;text-align:right;">{escape_html(item.get("line_total", ""))}</td>'
      '</tr>'
    )

  return (
    '<table style="border-collapse:collapse;width:100%;margin:0 0 24px;">'
    '<thead>'
    '<tr>'
    '<th style="text-align:left;padding:10px 12px;border:1px solid #d1d5db;background:#111827;color:#ffffff;">Item</th>'
    '<th style="text-align:center;padding:10px 12px;border:1px solid #d1d5db;background:#111827;color:#ffffff;">Qty</th>'
    '<th style="text-align:right;padding:10px 12px;border:1px solid #d1d5db;background:#111827;color:#ffffff;">Unit</th>'
    '<th style="text-align:right;padding:10px 12px;border:1px solid #d1d5db;background:#111827;color:#ffffff;">Total</th>'
    '</tr>'
    '</thead>'
    '<tbody>'
    f'{"".join(rows)}'
    '</tbody>'
    '</table>'
  )


def get_pingram_base_url():
  return (os.environ.get('PINGRAM_BASE_URL') or PINGRAM_DEFAULT_BASE_URL).rstrip('/')


def resolve_shipping_option(raw_shipping_option_id, discounted_subtotal_pence):
  shipping_option_id = str(raw_shipping_option_id or '').strip()
  option = SHIPPING_OPTIONS.get(shipping_option_id)

  if option is None:
    raise ValueError('Choose a shipping method.')

  free_threshold_pence = option.get('free_threshold_pence')
  amount_pence = int(option['amount_pence'])
  is_free = bool(free_threshold_pence is not None and discounted_subtotal_pence >= int(free_threshold_pence))

  if is_free:
    amount_pence = 0

  stripe_shipping_option = (
    {
      'shipping_rate_data': {
        'type': 'fixed_amount',
        'fixed_amount': {
          'amount': amount_pence,
          'currency': 'gbp',
        },
        'display_name': option['label'],
        'delivery_estimate': {
          'minimum': {
            'unit': 'day',
            'value': 2,
          },
          'maximum': {
            'unit': 'day',
            'value': 2,
          },
        },
      },
    }
    if shipping_option_id == 'tracked48' and is_free
    else {
      'shipping_rate': option['stripe_rate_id'],
    }
  )

  return {
    'id': shipping_option_id,
    'label': option['label'],
    'amount_pence': amount_pence,
    'estimate_text': option['estimate_text'],
    'stripe_shipping_option': stripe_shipping_option,
  }


def resolve_shipping_label(shipping_option_id, shipping_rate_id=''):
  option = SHIPPING_OPTIONS.get(str(shipping_option_id or '').strip())
  if option is not None:
    return option['label']

  shipping_rate_id = str(shipping_rate_id or '').strip()
  for entry in SHIPPING_OPTIONS.values():
    if entry['stripe_rate_id'] == shipping_rate_id:
      return entry['label']

  return ''


def fetch_checkout_line_items(session_or_id):
  if isinstance(session_or_id, str):
    response = client.v1.checkout.sessions.retrieve(
      session_or_id,
      params={
        'expand': ['line_items'],
      },
    )
  else:
    response = session_or_id

  line_items = []
  for entry in get_data_list(get_value(response, 'line_items', {}) or {}):
    quantity = int(get_value(entry, 'quantity', 1) or 1)
    amount_total = int(get_value(entry, 'amount_total', 0) or 0)
    amount_subtotal = int(get_value(entry, 'amount_subtotal', amount_total) or amount_total)
    unit_amount = amount_subtotal // quantity if quantity else amount_subtotal

    line_items.append({
      'description': get_value(entry, 'description', 'Item'),
      'quantity': quantity,
      'unit_price': format_money_from_pence(unit_amount),
      'line_total': format_money_from_pence(amount_total),
    })

  return line_items


def build_order_summary(checkout_session):
  session_id = get_value(checkout_session, 'id', '')
  
  # Fetch fully expanded checkout session including line items and discounts
  try:
    expanded_session = client.v1.checkout.sessions.retrieve(
      session_id,
      params={
        'expand': ['line_items', 'discounts', 'discounts.coupon'],
      },
    )
  except Exception as e:
    print(f"Warning: Failed to retrieve expanded checkout session from Stripe: {e}")
    expanded_session = checkout_session

  metadata = get_value(expanded_session, 'metadata', {}) or {}
  customer_details = get_value(expanded_session, 'customer_details', {}) or {}
  total_details = get_value(expanded_session, 'total_details', {}) or {}
  shipping_cost = get_value(expanded_session, 'shipping_cost', {}) or {}
  
  shipping_amount_pence = parse_int(
    get_value(shipping_cost, 'amount_total', get_value(metadata, 'shipping_amount_pence', 0))
  )
  shipping_rate_id = get_value(shipping_cost, 'shipping_rate', '')
  shipping_method = (
    get_value(metadata, 'shipping_method', '')
    or resolve_shipping_label(get_value(metadata, 'shipping_option_id', ''), shipping_rate_id)
  )

  # Retrieve Coupon Name
  coupon_name = ''
  discounts = get_value(expanded_session, 'discounts', []) or []
  if discounts and len(discounts) > 0:
    coupon = get_value(discounts[0], 'coupon', {}) or {}
    coupon_name = get_value(coupon, 'name', '') or ''
  
  if not coupon_name:
    coupon_name = get_value(metadata, 'coupon_code', '')

  return {
    'session_id': session_id,
    'created_at': format_unix_timestamp(get_value(expanded_session, 'created')),
    'payment_status': get_value(expanded_session, 'payment_status', ''),
    'customer_email': get_value(expanded_session, 'customer_email') or get_value(customer_details, 'email', ''),
    'first_name': get_value(metadata, 'first_name', ''),
    'last_name': get_value(metadata, 'last_name', ''),
    'phone': get_value(metadata, 'phone', '') or get_value(customer_details, 'phone', ''),
    'instagram': get_value(metadata, 'instagram', ''),
    'contact_preference': get_value(metadata, 'contact_preference', 'instagram'),
    'notes': get_value(metadata, 'notes', ''),
    'coupon_code': get_value(metadata, 'coupon_code', ''),
    'coupon_name': coupon_name,
    'billing_address': format_address(get_value(customer_details, 'address', {}) or {}),
    'shipping_method': shipping_method,
    'shipping': format_money_from_pence(shipping_amount_pence),
    'subtotal': format_money_from_pence(get_value(expanded_session, 'amount_subtotal', 0)),
    'discount': format_money_from_pence(get_value(total_details, 'amount_discount', 0)),
    'total': format_money_from_pence(get_value(expanded_session, 'amount_total', 0)),
    'currency': str(get_value(expanded_session, 'currency', '') or '').upper(),
    'line_items': fetch_checkout_line_items(expanded_session),
  }


def build_order_email_html(order_summary):
  customer_name = ' '.join(
    part for part in [order_summary.get('first_name', ''), order_summary.get('last_name', '')] if part
  ).strip()

  order_table = build_info_table([
    ('Checkout session', order_summary.get('session_id', '')),
    ('Created', order_summary.get('created_at', '')),
    ('Payment status', order_summary.get('payment_status', '')),
    ('Currency', order_summary.get('currency', '')),
    ('Subtotal', order_summary.get('subtotal', '')),
    ('Discount', order_summary.get('discount', '')),
    ('Shipping method', order_summary.get('shipping_method', '')),
    ('Shipping', order_summary.get('shipping', '')),
    ('Total', order_summary.get('total', '')),
    ('Coupon', order_summary.get('coupon_code', '')),
  ])

  customer_table = build_info_table([
    ('Customer name', customer_name),
    ('Email', order_summary.get('customer_email', '')),
    ('Phone', order_summary.get('phone', '')),
    ('Instagram', order_summary.get('instagram', '')),
    ('Contact preference', order_summary.get('contact_preference', 'instagram')),
    ('Billing address', order_summary.get('billing_address', '')),
    ('Notes', order_summary.get('notes', '')),
  ])

  return (
    '<div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;max-width:900px;margin:0 auto;">'
    '<h1 style="margin:0 0 16px;">New Juice Gels order</h1>'
    '<p style="margin:0 0 24px;">Stripe reported a completed checkout session. Order details are below.</p>'
    '<h2 style="margin:0 0 12px;font-size:20px;">Order summary</h2>'
    f'{order_table}'
    '<h2 style="margin:0 0 12px;font-size:20px;">Customer details</h2>'
    f'{customer_table}'
    '<h2 style="margin:0 0 12px;font-size:20px;">Items</h2>'
    f'{build_items_table(order_summary.get("line_items", []))}'
    '</div>'
  )


def send_pingram_order_email(order_summary):
  pingram_api_key = read_secret('pingram_v1', 'PINGRAM_API_KEY')
  if not pingram_api_key:
    raise RuntimeError('Missing Pingram secret file pingram_v1.')

  from_name = str(os.environ.get('PINGRAM_FROM_NAME', '') or '').strip()
  from_address = str(os.environ.get('PINGRAM_FROM_EMAIL', '') or '').strip()
  notification_payload = {
    'type': 'email_compose_preview',
    'to': {
      'email': PINGRAM_ORDER_RECIPIENT,
    },
    'email': {
      'subject': f"New Juice Gels order {order_summary.get('session_id', '')}",
      'html': build_order_email_html(order_summary),
      'senderName': from_name or 'OnlineOrder',
      'senderEmail': from_address or 'neworder@juicegels.com',
    },
    'options': {
      'email': {
        'replyToAddresses': ['juicegels@gmail.com'],
      }
    }
  }

  async def _send():
    async with Pingram(
      api_key=pingram_api_key,
      base_url='https://api.eu.pingram.io',
    ) as client:
      return await client.send(notification_payload)

  try:
    return asyncio.run(_send())
  except Exception as error:
    raise RuntimeError(f'Pingram email request failed: {error}') from error


def build_customer_items_table(items):
  if not items:
    return '<p style="margin:0 0 24px; color:#4f444a; font-style:italic;">No items found in this order.</p>'

  rows = []
  for item in items:
    rows.append(
      '<tr>'
      f'<td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); font-weight:500; font-size:15px; color:#3d1a24;">{escape_html(item.get("description", "Item"))}</td>'
      f'<td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); text-align:center; font-size:15px; color:#4f444a;">{escape_html(item.get("quantity", 1))}</td>'
      f'<td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); text-align:right; font-size:15px; color:#4f444a;">{escape_html(item.get("unit_price", ""))}</td>'
      f'<td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); text-align:right; font-weight:500; font-size:15px; color:#3d1a24;">{escape_html(item.get("line_total", ""))}</td>'
      '</tr>'
    )

  return (
    '<table style="border-collapse:collapse; width:100%; margin:0 0 10px;">'
    '<thead>'
    '<tr>'
    '<th style="text-align:left; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase;">Item</th>'
    '<th style="text-align:center; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase; width:60px;">Qty</th>'
    '<th style="text-align:right; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase; width:80px;">Unit</th>'
    '<th style="text-align:right; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase; width:80px;">Total</th>'
    '</tr>'
    '</thead>'
    '<tbody>'
    f'{"".join(rows)}'
    '</tbody>'
    '</table>'
  )


def build_customer_email_html(order_summary):
  customer_name = ' '.join(
    part for part in [order_summary.get('first_name', ''), order_summary.get('last_name', '')] if part
  ).strip() or "there"

  contact_pref = order_summary.get('contact_preference', 'instagram')
  customer_email = order_summary.get('customer_email', '')
  instagram_handle = order_summary.get('instagram', '').strip()
  if instagram_handle:
    if not instagram_handle.startswith('@'):
      instagram_handle = '@' + instagram_handle
  else:
    instagram_handle = 'Instagram'

  if contact_pref == 'email':
    contact_text = f"We will contact you via your email ({customer_email}) within 24 hours to confirm your nail sizes."
  else:
    contact_text = f"We will contact you via Instagram ({instagram_handle}) within 24 hours to confirm your nail sizes."
    contact_text += " (Note: If your Instagram account is private, please message @juicegels first to make sure that communications can be made.)"

  process_text = (
    "Since our press-on nails are hand-crafted to fit you perfectly, the next step is confirming your sizes!\n\n"
    f"{contact_text}\n\n"
    "If you already ordered a Sizing Guide or know your sizes, we will double-check this with you. Once sizes are finalized, we will start hand-crafting your custom set!\n\n"
    "Once your nails have been made, We will send you pictures of your order to confirm you're happy with how they turned out before they're dispatched."
  )

  # Process paragraph styling
  paragraphs = []
  for para in process_text.split('\n\n'):
    if para.strip():
      paragraphs.append(f'<p style="margin: 0 0 12px 0; font-size: 15px; line-height: 1.6;">{escape_html(para.strip())}</p>')

  post_payment_html = f"""<div style="background-color: #fce4ea; border: 2px dashed #fc6587; border-radius: 12px; padding: 20px; margin: 24px 0; color: #3d1a24; font-family: 'DM Sans', Arial, sans-serif;">
  <h3 style="margin: 0 0 12px 0; font-family: 'Lobster', Georgia, serif; font-size: 20px; color: #ae3c6f; font-weight: normal;">💖 What happens next?</h3>
  {"".join(paragraphs)}
</div>"""

  # Check if discount exists
  discount_row = ''
  if order_summary.get('discount') and order_summary.get('discount') != '£0.00' and order_summary.get('discount') != '$0.00':
    coupon_str = f" ({order_summary.get('coupon_name')})" if order_summary.get('coupon_name') else ""
    discount_row = f"""<tr>
  <td style="padding: 6px 0; color: #4f444a;">Discount{escape_html(coupon_str)}</td>
  <td align="right" style="padding: 6px 0; font-weight: 500; color: #c0392b;">-{escape_html(order_summary.get("discount", ""))}</td>
</tr>"""

  # Check if shipping exists
  shipping_row = ''
  if order_summary.get('shipping'):
    shipping_row = f"""<tr>
  <td style="padding: 6px 0; color: #4f444a;">Shipping ({escape_html(order_summary.get("shipping_method", ""))})</td>
  <td align="right" style="padding: 6px 0; font-weight: 500;">{escape_html(order_summary.get("shipping", ""))}</td>
</tr>"""

  # Billing/Shipping address
  address_html = ''
  if order_summary.get('billing_address'):
    address_html = f"""<h3 style="margin: 30px 0 12px 0; font-family: 'DM Sans', Arial, sans-serif; font-size: 18px; font-weight: 700; color: #ae3c6f; border-bottom: 2px solid rgba(212, 84, 122, 0.15); padding-bottom: 6px;">Delivery Details</h3>
<p style="margin: 0 0 6px 0; font-size: 15px; font-weight: 700;">Shipping Address:</p>
<p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #4f444a; white-space: pre-wrap;">{escape_html(order_summary.get("billing_address", ""))}</p>"""

  items_table = build_customer_items_table(order_summary.get("line_items", []))

  return f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Juice Gels Order Confirmation</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=DM+Sans:wght@400;500;700&display=swap');
    body {{
      margin: 0;
      padding: 0;
      background-color: #ffd2e6;
      font-family: 'DM Sans', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }}
  </style>
</head>
<body style="margin: 0; padding: 40px 20px; background-color: #ffd2e6;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 0 0 40px 0;">
        <!-- Outer Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #fff9fb; border: 1px solid rgba(212, 84, 122, 0.18); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(61, 26, 36, 0.08);">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 40px 30px 20px 30px; background-color: #fff9fb; border-bottom: 1px solid rgba(212, 84, 122, 0.1);">
              <h1 style="margin: 0; font-family: 'Lobster', Georgia, serif; font-size: 42px; color: #fc6587; font-weight: normal; letter-spacing: 0.5px; line-height: 1.1;">Juice Gels</h1>
              <p style="margin: 8px 0 0 0; font-family: 'DM Sans', Arial, sans-serif; font-size: 14px; color: #ae3c6f; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">Order Confirmation</p>
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style="padding: 30px 30px 20px 30px; font-family: 'DM Sans', Arial, sans-serif; color: #3d1a24;">
              <h2 style="margin: 0 0 16px 0; font-family: 'DM Sans', Arial, sans-serif; font-size: 20px; font-weight: 700; color: #3d1a24;">Hi {escape_html(customer_name)},</h2>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #3d1a24;">
                Thank you so much for your purchase! We are super excited to hand-craft your set. Your payment was successful, and we have received your order details below.
              </p>
              
              {post_payment_html}
              
              <h3 style="margin: 30px 0 12px 0; font-family: 'DM Sans', Arial, sans-serif; font-size: 18px; font-weight: 700; color: #ae3c6f; border-bottom: 2px solid rgba(212, 84, 122, 0.15); padding-bottom: 6px;">Order Summary</h3>
              {items_table}
              
              <!-- Pricing Summary -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 20px 0; font-family: 'DM Sans', Arial, sans-serif; font-size: 15px; color: #3d1a24;">
                <tr>
                  <td style="padding: 6px 0; color: #4f444a;">Subtotal</td>
                  <td align="right" style="padding: 6px 0; font-weight: 500;">{escape_html(order_summary.get("subtotal", ""))}</td>
                </tr>
                {discount_row}
                {shipping_row}
                <tr>
                  <td style="padding: 12px 0 0 0; font-size: 18px; font-weight: 700; color: #3d1a24; border-top: 1px solid rgba(212, 84, 122, 0.15);">Total Paid</td>
                  <td align="right" style="padding: 12px 0 0 0; font-size: 18px; font-weight: 700; color: #fc6587; border-top: 1px solid rgba(212, 84, 122, 0.15);">{escape_html(order_summary.get("total", ""))}</td>
                </tr>
              </table>
              
              {address_html}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #fff9fb; border-top: 1px solid rgba(212, 84, 122, 0.1); text-align: center; font-family: 'DM Sans', Arial, sans-serif;">
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #4f444a;">
                Have a question? Contact us on Instagram <a href="https://instagram.com/juicegels" target="_blank" style="color: #fc6587; text-decoration: underline; font-weight: 500;">@juicegels</a> or reply directly to this email.
              </p>
              <p style="margin: 0; font-size: 13px; color: #ae3c6f; font-weight: 500;">
                &copy; {datetime.now(timezone.utc).year} Juice Gels. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
        <!-- End Outer Container -->
      </td>
    </tr>
  </table>
</body>
</html>"""


def send_customer_order_email(order_summary):
  customer_email = order_summary.get('customer_email', '').strip()
  if not customer_email:
    print("Warning: customer_email is empty. Skipping customer confirmation email.")
    return None

  try:
    pingram_api_key = read_secret('pingram_v1', 'PINGRAM_API_KEY')
    if not pingram_api_key:
      raise RuntimeError('Missing Pingram secret file pingram_v1.')

    from_name = str(os.environ.get('PINGRAM_FROM_NAME', '') or '').strip()
    from_address = str(os.environ.get('PINGRAM_FROM_EMAIL', '') or '').strip()

    notification_payload = {
      'type': 'email_compose_preview',
      'to': {
        'email': customer_email,
      },
      'email': {
        'subject': "Order Confirmed - Juice Gels",
        'html': build_customer_email_html(order_summary),
        'senderName': from_name or 'Juice Gels',
        'senderEmail': from_address or 'neworder@juicegels.com',
      },
      'options': {
        'email': {
          'replyToAddresses': ['juicegels@gmail.com'],
        }
      }
    }

    async def _send():
      async with Pingram(
        api_key=pingram_api_key,
        base_url='https://api.eu.pingram.io',
      ) as client:
        return await client.send(notification_payload)

    print(f"Triggering async Pingram call to send confirmation email to customer: {customer_email}...")
    result = asyncio.run(_send())
    print(f"Customer confirmation email successfully sent. Response: {result}")
    return result
  except Exception as error:
    print(f"Error sending customer confirmation email to {customer_email}: {error}")
    import traceback
    traceback.print_exc()
    return None


def handle_completed_checkout_session(checkout_session):
  payment_status = get_value(checkout_session, 'payment_status', '')
  if payment_status != 'paid':
    print(f"Skipping handle_completed_checkout_session because payment_status is '{payment_status}' (expected 'paid')")
    return

  print("Building order summary for completed checkout session...")
  order_summary = build_order_summary(checkout_session)

  print("Sending store owner order email notification...")
  try:
    send_pingram_order_email(order_summary)
    print("Store owner order email notification successfully sent.")
  except Exception as e:
    print(f"Failed to send store owner email notification: {e}")
    import traceback
    traceback.print_exc()
    # Propagate the error to webhook handler if owner notification fails
    raise

  print("Sending customer purchase confirmation email...")
  send_customer_order_email(order_summary)
  print("Customer confirmation email process completed.")


def format_coupon_description(coupon):
  percent_off = get_value(coupon, 'percent_off')
  amount_off = get_value(coupon, 'amount_off')

  if percent_off is not None:
    return f"{float(percent_off):g}% off"

  if amount_off is not None:
    return f"£{int(amount_off) / 100:.2f} off"

  return 'Discount applied'


def resolve_coupon_summary(raw_code, subtotal_pence):
  code = normalize_coupon_code(raw_code)
  if not code:
    raise ValueError('Enter a coupon code.')

  response = client.v1.promotion_codes.list(
    params={
      'code': code,
      'active': True,
      'limit': 10,
    }
  )

  matches = get_data_list(response)
  promotion_code = next(
    (
      entry
      for entry in matches
      if get_value(entry, 'active', False)
      and get_value(get_value(entry, 'coupon', {}), 'valid', True)
    ),
    None,
  )

  if promotion_code is None:
    raise ValueError('That coupon code is not valid.')

  restrictions = get_value(promotion_code, 'restrictions', {}) or {}
  minimum_amount = get_value(restrictions, 'minimum_amount')
  minimum_amount_currency = str(get_value(restrictions, 'minimum_amount_currency', '') or '').lower()

  if minimum_amount is not None:
    minimum_amount = int(minimum_amount)
    if minimum_amount_currency and minimum_amount_currency != 'gbp':
      raise ValueError('This coupon is not available for GBP orders.')
    if subtotal_pence < minimum_amount:
      raise ValueError(f'This coupon requires a minimum spend of £{minimum_amount / 100:.2f}.')

  coupon = get_value(promotion_code, 'coupon', {}) or {}
  percent_off = get_value(coupon, 'percent_off')
  amount_off = get_value(coupon, 'amount_off')
  amount_off_currency = str(get_value(coupon, 'currency', '') or '').lower()

  discount_pence = 0
  if percent_off is not None:
    discount_pence = min(subtotal_pence, round(subtotal_pence * float(percent_off) / 100))
  elif amount_off is not None:
    if amount_off_currency and amount_off_currency != 'gbp':
      raise ValueError('This coupon is not available for GBP orders.')
    discount_pence = min(subtotal_pence, int(amount_off))
  else:
    raise ValueError('This coupon does not have a supported discount type.')

  return {
    'code': code,
    'promotion_code_id': get_value(promotion_code, 'id', ''),
    'description': format_coupon_description(coupon),
    'discount_pence': int(discount_pence),
  }

@app.after_request
def add_cors_headers(response):
  response.headers["Access-Control-Allow-Origin"] = "*"
  response.headers["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "Content-Type"
  return response


@app.route('/validate-coupon', methods=['POST', 'OPTIONS'])
def validate_coupon():
  if request.method == 'OPTIONS':
    return jsonify({}), 204

  payload = request.get_json(force=True)
  raw_code = payload.get('coupon', '')
  subtotal = float(payload.get('subtotal', 0) or 0)
  subtotal_pence = max(0, round(subtotal * 100))

  try:
    summary = resolve_coupon_summary(raw_code, subtotal_pence)
    return jsonify({
      'code': summary['code'],
      'promotionCodeId': summary['promotion_code_id'],
      'description': summary['description'],
      'discountAmount': summary['discount_pence'] / 100,
    })
  except ValueError as error:
    return jsonify({ 'error': str(error) }), 400
  except Exception:
    import traceback
    traceback.print_exc()
    return jsonify({ 'error': 'internal server error' }), 500


@app.route('/check-eligibility', methods=['POST', 'OPTIONS'])
def check_eligibility():
  if request.method == 'OPTIONS':
    return jsonify({}), 204

  payload = request.get_json(force=True)
  email = str(payload.get('email', '')).strip()

  if not email:
    return jsonify({ 'eligible': False }), 400

  eligible = is_first_time_buyer(email)
  return jsonify({ 'eligible': eligible })


def build_custom_order_owner_email_html(summary):
  return (
    '<div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;max-width:900px;margin:0 auto;">'
    '<h1 style="margin:0 0 16px;">New Custom Order Request</h1>'
    '<p style="margin:0 0 24px;">A new custom order request has been submitted on the website.</p>'
    '<h2 style="margin:0 0 12px;font-size:20px;">Customer Details</h2>'
    f'{build_info_table([("Name", summary.get("name")), ("Email", summary.get("email")), ("Instagram", summary.get("instagram"))])}'
    '<h2 style="margin:0 0 12px;font-size:20px;">Request Details</h2>'
    f'{build_info_table([("Nail Shape", summary.get("shape")), ("Nail Length", summary.get("length")), ("Design Details", summary.get("details"))])}'
    '</div>'
  )


def build_custom_order_customer_email_html(summary):
  customer_name = summary.get('name', 'there')
  instagram_handle = summary.get('instagram', '').strip()
  if instagram_handle and not instagram_handle.startswith('@'):
    instagram_handle = '@' + instagram_handle

  process_text = (
    "Thank you for submitting your custom order request! Alyssa is super excited to bring your concept to life.\n\n"
    f"Please note: **Alyssa will contact you over Instagram ({instagram_handle}) only** to finalize your custom order design, verify your sizing, and provide a price quote.\n\n"
    "We typically reach out within 24 hours. Keep an eye on your Instagram DMs! (If your account is private, please message @juicegels first so we can chat.)"
  )

  paragraphs = []
  for para in process_text.split('\n\n'):
    if para.strip():
      paragraphs.append(f'<p style="margin: 0 0 12px 0; font-size: 15px; line-height: 1.6;">{escape_html(para.strip())}</p>')

  post_payment_html = f"""<div style="background-color: #fce4ea; border: 2px dashed #fc6587; border-radius: 12px; padding: 20px; margin: 24px 0; color: #3d1a24; font-family: 'DM Sans', Arial, sans-serif;">
  <h3 style="margin: 0 0 12px 0; font-family: 'Lobster', Georgia, serif; font-size: 20px; color: #ae3c6f; font-weight: normal;">💖 What happens next?</h3>
  {"".join(paragraphs)}
</div>"""

  details_table = build_info_table([
    ('Preferred Shape', summary.get('shape', '')),
    ('Preferred Length', summary.get('length', '')),
    ('Design Details', summary.get('details', '')),
  ])

  return f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Order Request - Juice Gels</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=DM+Sans:wght@400;500;700&display=swap');
    body {{
      margin: 0;
      padding: 0;
      background-color: #ffd2e6;
      font-family: 'DM Sans', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }}
  </style>
</head>
<body style="margin: 0; padding: 40px 20px; background-color: #ffd2e6;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 0 0 40px 0;">
        <!-- Outer Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #fff9fb; border: 1px solid rgba(212, 84, 122, 0.18); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(61, 26, 36, 0.08);">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 40px 30px 20px 30px; background-color: #fff9fb; border-bottom: 1px solid rgba(212, 84, 122, 0.1);">
              <h1 style="margin: 0; font-family: 'Lobster', Georgia, serif; font-size: 42px; color: #fc6587; font-weight: normal; letter-spacing: 0.5px; line-height: 1.1;">Juice Gels</h1>
              <p style="margin: 8px 0 0 0; font-family: 'DM Sans', Arial, sans-serif; font-size: 14px; color: #ae3c6f; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">Custom Order Request</p>
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style="padding: 30px 30px 20px 30px; font-family: 'DM Sans', Arial, sans-serif; color: #3d1a24;">
              <h2 style="margin: 0 0 16px 0; font-family: 'DM Sans', Arial, sans-serif; font-size: 20px; font-weight: 700; color: #3d1a24;">Hi {escape_html(customer_name)},</h2>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #3d1a24;">
                We have received your custom order inquiry! Alyssa is excited to create a custom-fit set just for you.
              </p>
              
              {post_payment_html}
              
              <h3 style="margin: 30px 0 12px 0; font-family: 'DM Sans', Arial, sans-serif; font-size: 18px; font-weight: 700; color: #ae3c6f; border-bottom: 2px solid rgba(212, 84, 122, 0.15); padding-bottom: 6px;">Your Request Details</h3>
              {details_table}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #fff9fb; border-top: 1px solid rgba(212, 84, 122, 0.1); text-align: center; font-family: 'DM Sans', Arial, sans-serif;">
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #4f444a;">
                Have a question? Feel free to DM us on Instagram <a href="https://instagram.com/juicegels" target="_blank" style="color: #fc6587; text-decoration: underline; font-weight: 500;">@juicegels</a>.
              </p>
              <p style="margin: 0; font-size: 13px; color: #ae3c6f; font-weight: 500;">
                &copy; {datetime.now(timezone.utc).year} Juice Gels. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
        <!-- End Outer Container -->
      </td>
    </tr>
  </table>
</body>
</html>"""


def send_custom_order_emails(summary):
  pingram_api_key = read_secret('pingram_v1', 'PINGRAM_API_KEY')
  if not pingram_api_key:
    raise RuntimeError('Missing Pingram secret file pingram_v1.')

  from_name = str(os.environ.get('PINGRAM_FROM_NAME', '') or '').strip()
  from_address = str(os.environ.get('PINGRAM_FROM_EMAIL', '') or '').strip()

  owner_payload = {
    'type': 'email_compose_preview',
    'to': {
      'email': PINGRAM_ORDER_RECIPIENT,
    },
    'email': {
      'subject': f"New Custom Order Request - {summary.get('name')}",
      'html': build_custom_order_owner_email_html(summary),
      'senderName': from_name or 'OnlineOrder',
      'senderEmail': from_address or 'CustomOrder@juicegels.com',
    },
    'options': {
      'email': {
        'replyToAddresses': ['juicegels@gmail.com'],
      }
    }
  }

  customer_email = summary.get('email', '').strip()
  customer_payload = {
    'type': 'email_compose_preview',
    'to': {
      'email': customer_email,
    },
    'email': {
      'subject': "Custom Order Request Received - Juice Gels",
      'html': build_custom_order_customer_email_html(summary),
      'senderName': from_name or 'Juice Gels',
      'senderEmail': from_address or 'CustomOrder@juicegels.com',
    },
    'options': {
      'email': {
        'replyToAddresses': ['juicegels@gmail.com'],
      }
    }
  }

  async def _send():
    async with Pingram(
      api_key=pingram_api_key,
      base_url='https://api.eu.pingram.io',
    ) as client:
      owner_res = await client.send(owner_payload)
      customer_res = await client.send(customer_payload)
      return owner_res, customer_res

  try:
    return asyncio.run(_send())
  except Exception as error:
    raise RuntimeError(f'Pingram custom order emails failed: {error}') from error


@app.route('/create-custom-order', methods=['POST', 'OPTIONS'])
def create_custom_order():
  if request.method == 'OPTIONS':
    return jsonify({}), 204

  payload = request.get_json(force=True)
  name = str(payload.get('name', '')).strip()
  email = str(payload.get('email', '')).strip()
  instagram = str(payload.get('instagram', '')).strip()
  shape = str(payload.get('shape', '')).strip()
  length = str(payload.get('length', '')).strip()
  details = str(payload.get('details', '')).strip()

  if not name or not email or not instagram or not details:
    return jsonify({ 'error': 'Missing required fields: name, email, instagram, and details are required.' }), 400

  try:
    send_custom_order_emails({
      'name': name,
      'email': email,
      'instagram': instagram,
      'shape': shape,
      'length': length,
      'details': details
    })
    return jsonify({ 'success': True })
  except Exception as e:
    import traceback
    traceback.print_exc()
    return jsonify({ 'error': 'internal server error' }), 500


@app.route('/stripe-webhook', methods=['POST'])
def stripe_webhook():
  print("Stripe webhook endpoint called!")
  webhook_secret = read_secret('stripe_webhook', 'STRIPE_WEBHOOK_SECRET')
  if not webhook_secret:
    print("Error: Missing Stripe webhook secret.")
    return jsonify({ 'error': 'Missing Stripe webhook secret file stripe_webhook.' }), 500

  payload = request.get_data(as_text=True)
  signature = request.headers.get('Stripe-Signature', '')

  try:
    event = stripe.Webhook.construct_event(payload, signature, webhook_secret)
    print(f"Stripe Webhook event constructed successfully: {get_value(event, 'type')} (ID: {get_value(event, 'id')})")
  except Exception as e:
    print(f"Stripe Webhook signature verification failed: {e}")
    import traceback
    traceback.print_exc()
    return jsonify({ 'error': 'Invalid webhook signature.' }), 400

  if get_value(event, 'type') == 'checkout.session.completed':
    try:
      checkout_session = get_value(get_value(event, 'data', {}) or {}, 'object', {}) or {}
      print(f"Stripe webhook: processing checkout.session.completed with payment_status: {get_value(checkout_session, 'payment_status', '')}")
      handle_completed_checkout_session(checkout_session)
      print("Stripe webhook: successfully processed checkout.session.completed.")
    except Exception as e:
      print(f"Stripe webhook error while processing completed checkout session: {e}")
      import traceback
      traceback.print_exc()
      return jsonify({ 'error': 'Failed to process completed checkout session.' }), 500
  else:
    print(f"Stripe webhook: ignoring unhandled event type: {get_value(event, 'type')}")

  return jsonify({ 'received': True })

@app.route('/create-checkout-session', methods=['POST', 'OPTIONS'])
def create_checkout_session():
  if request.method == 'OPTIONS':
    return jsonify({}), 204

  payload = request.get_json(force=True)
  items = payload.get('items', [])
  form = payload.get('form', {})
  raw_coupon_code = payload.get('coupon', '')
  shipping_option_id = payload.get('shippingOptionId', '')
  origin = request.headers.get('Origin') or 'http://localhost:4173'
  items_param = build_checkout_items_param(items)
  subtotal_pence = 0

  line_items = []
  for item in items:
    product = item.get('product', {})
    shape = item.get('shape', '')
    quantity = int(item.get('quantity', 1))
    name = product.get('name', 'Product')
    length = item.get('length', '')
    price = float(product.get('price', 0))
    image_url = product.get('image', '')
    unit_amount = round(price * 100)
    subtotal_pence += unit_amount * quantity

    display_name = name if is_nail_size_guide_product(product) else f"{name} - {shape} - {length}".strip(" -")
    if image_url.startswith('/'):
      image_url = f"{origin}{image_url}"

    product_metadata = {
        "productid": product.get("id", ""),
    }
    if not is_nail_size_guide_product(product):
      product_metadata["shape"] = shape
      product_metadata["length"] = length

    product_data = {
        "name": display_name,
        "metadata": product_metadata,
    }

    if image_url:
      product_data['images'] = [image_url]

    stripe_product_id = None
    if is_nail_size_guide_product(product):
      try:
        search_res = client.v1.products.search(params={
          'query': f"metadata['source_sku']:'{NAIL_SIZE_GUIDE_PRODUCT_ID}'",
          'limit': 1
        })
        if search_res.data:
          stripe_product_id = search_res.data[0].id
          product_obj = search_res.data[0]
          if product_obj.description:
            try:
              client.v1.products.update(stripe_product_id, params={'description': ''})
            except Exception as upd_err:
              print(f"Error clearing description on searched Stripe product {stripe_product_id}: {upd_err}")
      except Exception as e:
        print(f"Error searching for existing Stripe product for SKU {NAIL_SIZE_GUIDE_PRODUCT_ID}: {e}")
      
      if not stripe_product_id:
        stripe_product_id = 'prod_UhOWU4BodmJb0F'
        try:
          fallback_prod = client.v1.products.retrieve(stripe_product_id)
          if fallback_prod.description:
            client.v1.products.update(stripe_product_id, params={'description': ''})
        except Exception as fallback_err:
          print(f"Error checking/clearing description on fallback Stripe product {stripe_product_id}: {fallback_err}")

    price_data = {
      'currency': 'gbp',
      'unit_amount': unit_amount,
    }
    if stripe_product_id:
      price_data['product'] = stripe_product_id
    else:
      price_data['product_data'] = product_data

    line_items.append({
      'price_data': price_data,
      'quantity': quantity,
    })

  coupon_summary = None
  if raw_coupon_code:
    try:
      coupon_summary = resolve_coupon_summary(raw_coupon_code, subtotal_pence)
    except ValueError as error:
      return jsonify({ 'error': str(error) }), 400

  customer_email = form.get('email', '').strip()
  has_size_guide = False
  has_nail_set = False
  size_guide_discount_pence = 0
  for item in items:
    product = item.get('product', {})
    if is_nail_size_guide_product(product):
      has_size_guide = True
      price = float(product.get('price', 0))
      size_guide_discount_pence = round(price * 100)
    else:
      has_nail_set = True

  apply_size_guide_coupon = False
  if has_size_guide and has_nail_set and customer_email:
    if is_first_time_buyer(customer_email):
      apply_size_guide_coupon = True

  apply_20_percent_discount = False
  if has_nail_set and not has_size_guide:
    now = datetime.now(timezone.utc)
    sale_end = datetime(2026, 8, 1, 0, 0, 0, tzinfo=timezone.utc)
    if now < sale_end:
      apply_20_percent_discount = True

  discounted_subtotal_pence = subtotal_pence
  if apply_20_percent_discount:
    discounted_subtotal_pence -= round(subtotal_pence * 0.20)
  else:
    if coupon_summary:
      discounted_subtotal_pence -= coupon_summary['discount_pence']
    if apply_size_guide_coupon:
      discounted_subtotal_pence -= size_guide_discount_pence
  discounted_subtotal_pence = max(0, discounted_subtotal_pence)

  try:
    shipping_option = resolve_shipping_option(shipping_option_id, discounted_subtotal_pence)
  except ValueError as error:
    return jsonify({ 'error': str(error) }), 400

  try:
    session_params = {
      'line_items': line_items,
      'customer_email': form.get('email', ''),
      'billing_address_collection': 'required',
      'payment_intent_data': {
        'shipping': {
          'name': f"{form.get('firstName', '')} {form.get('lastName', '')}".strip(),
          'phone': form.get('phone', ''),
          'address': {
            'line1': form.get('address', ''),
            'city': form.get('city', ''),
            'postal_code': form.get('postcode', ''),
            'country': 'GB',
          }
        }
      },
      'phone_number_collection': {'enabled': False},
      'shipping_options': [shipping_option['stripe_shipping_option']],
      'metadata': {
        'first_name': form.get('firstName', ''),
        'last_name': form.get('lastName', ''),
        'phone': form.get('phone', ''),
        'instagram': form.get('instagram', ''),
        'contact_preference': form.get('contactMethod', 'instagram'),
        'notes': form.get('notes', ''),
        'shipping_address': form.get('address', ''),
        'shipping_city': form.get('city', ''),
        'shipping_postcode': form.get('postcode', ''),
        'coupon_code': 'lGKkukJL' if apply_20_percent_discount else ('60pCPsnH' if apply_size_guide_coupon else (coupon_summary['code'] if coupon_summary else '')),
        'shipping_option_id': shipping_option['id'],
        'shipping_method': shipping_option['label'],
        'shipping_amount_pence': str(shipping_option['amount_pence']),
      },
      'mode': 'payment',
      'success_url': f"{origin}/confirmation?checkout=success&session_id={{CHECKOUT_SESSION_ID}}&items={items_param}",
      'cancel_url': f"{origin}/basket?items={items_param}{f'&coupon={quote(coupon_summary['code'], safe='')}' if coupon_summary and not (apply_size_guide_coupon or apply_20_percent_discount) else ''}",
    }

    if apply_20_percent_discount:
      session_params['discounts'] = [{
        'coupon': 'lGKkukJL',
      }]
    elif apply_size_guide_coupon:
      session_params['discounts'] = [{
        'coupon': '60pCPsnH',
      }]
    elif coupon_summary:
      session_params['discounts'] = [{
        'promotion_code': coupon_summary['promotion_code_id'],
      }]

    session = client.v1.checkout.sessions.create(params=session_params)
    return jsonify({ 'url': session.url })
  except Exception as e:
    import traceback
    traceback.print_exc()
    return jsonify({ 'error': 'internal server error' }), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 4000))
    app.run(host="0.0.0.0", port=port)