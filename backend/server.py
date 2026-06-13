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
NAIL_SIZE_GUIDE_PRODUCT_ID = 'JUICEGELS-0301'


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


stripe_api_key = read_secret('stripe_live_v1', 'STRIPE_SECRET_KEY')
if not stripe_api_key:
  raise RuntimeError('Missing Stripe secret file stripe_live_v1.')

client = stripe.StripeClient(stripe_api_key)


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


def fetch_checkout_line_items(session_id):
  response = client.v1.checkout.sessions.retrieve(
    session_id,
    params={
      'expand': ['line_items'],
    },
  )

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
  metadata = get_value(checkout_session, 'metadata', {}) or {}
  customer_details = get_value(checkout_session, 'customer_details', {}) or {}
  total_details = get_value(checkout_session, 'total_details', {}) or {}
  session_id = get_value(checkout_session, 'id', '')

  return {
    'session_id': session_id,
    'created_at': format_unix_timestamp(get_value(checkout_session, 'created')),
    'payment_status': get_value(checkout_session, 'payment_status', ''),
    'customer_email': get_value(checkout_session, 'customer_email') or get_value(customer_details, 'email', ''),
    'first_name': get_value(metadata, 'first_name', ''),
    'last_name': get_value(metadata, 'last_name', ''),
    'phone': get_value(metadata, 'phone', '') or get_value(customer_details, 'phone', ''),
    'instagram': get_value(metadata, 'instagram', ''),
    'notes': get_value(metadata, 'notes', ''),
    'coupon_code': get_value(metadata, 'coupon_code', ''),
    'billing_address': format_address(get_value(customer_details, 'address', {}) or {}),
    'subtotal': format_money_from_pence(get_value(checkout_session, 'amount_subtotal', 0)),
    'discount': format_money_from_pence(get_value(total_details, 'amount_discount', 0)),
    'total': format_money_from_pence(get_value(checkout_session, 'amount_total', 0)),
    'currency': str(get_value(checkout_session, 'currency', '') or '').upper(),
    'line_items': fetch_checkout_line_items(session_id),
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
    ('Total', order_summary.get('total', '')),
    ('Coupon', order_summary.get('coupon_code', '')),
  ])

  customer_table = build_info_table([
    ('Customer name', customer_name),
    ('Email', order_summary.get('customer_email', '')),
    ('Phone', order_summary.get('phone', '')),
    ('Instagram', order_summary.get('instagram', '')),
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


def handle_completed_checkout_session(checkout_session):
  if get_value(checkout_session, 'payment_status', '') != 'paid':
    return

  order_summary = build_order_summary(checkout_session)
  send_pingram_order_email(order_summary)


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


@app.route('/stripe-webhook', methods=['POST'])
def stripe_webhook():
  webhook_secret = read_secret('stripe_webhook', 'STRIPE_WEBHOOK_SECRET')
  if not webhook_secret:
    return jsonify({ 'error': 'Missing Stripe webhook secret file stripe_webhook.' }), 500

  payload = request.get_data(as_text=True)
  signature = request.headers.get('Stripe-Signature', '')

  try:
    event = stripe.Webhook.construct_event(payload, signature, webhook_secret)
  except Exception:
    return jsonify({ 'error': 'Invalid webhook signature.' }), 400

  if get_value(event, 'type') == 'checkout.session.completed':
    try:
      handle_completed_checkout_session(get_value(get_value(event, 'data', {}) or {}, 'object', {}) or {})
    except Exception:
      import traceback
      traceback.print_exc()
      return jsonify({ 'error': 'Failed to process completed checkout session.' }), 500

  return jsonify({ 'received': True })

@app.route('/create-checkout-session', methods=['POST', 'OPTIONS'])
def create_checkout_session():
  if request.method == 'OPTIONS':
    return jsonify({}), 204

  payload = request.get_json(force=True)
  items = payload.get('items', [])
  form = payload.get('form', {})
  raw_coupon_code = payload.get('coupon', '')
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

    line_items.append({
      'price_data': {
        'currency': 'gbp',
        'product_data': product_data,
        'unit_amount': unit_amount,
      },
      'quantity': quantity,
    })

  coupon_summary = None
  if raw_coupon_code:
    try:
      coupon_summary = resolve_coupon_summary(raw_coupon_code, subtotal_pence)
    except ValueError as error:
      return jsonify({ 'error': str(error) }), 400

  try:
    session_params = {
      'line_items': line_items,
      'customer_email': form.get('email', ''),
      'billing_address_collection': 'required',
      'phone_number_collection': {'enabled': False},
      'metadata': {
        'first_name': form.get('firstName', ''),
        'last_name': form.get('lastName', ''),
        'phone': form.get('phone', ''),
        'instagram': form.get('instagram', ''),
        'notes': form.get('notes', ''),
        'coupon_code': coupon_summary['code'] if coupon_summary else '',
      },
      'mode': 'payment',
      'success_url': f"{origin}/confirmation?checkout=success&session_id={{CHECKOUT_SESSION_ID}}&items={items_param}",
      'cancel_url': f"{origin}/basket?items={items_param}{f'&coupon={quote(coupon_summary['code'], safe='')}' if coupon_summary else ''}",
    }

    if coupon_summary:
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