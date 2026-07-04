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

# Load local .env file if it exists (for local development)
def load_dotenv():
  dot_env_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '.env')
  if os.path.isfile(dot_env_path):
    with open(dot_env_path, 'r', encoding='utf-8') as f:
      for line in f:
        line = line.strip()
        if not line or line.startswith('#'):
          continue
        if '=' in line:
          key, val = line.split('=', 1)
          key = key.strip()
          val = val.strip().strip("'").strip('"')
          if key:
            # Overwrite only if not already set by system environment
            if key not in os.environ:
              os.environ[key] = val

load_dotenv()

# Stripe and Maintenance State Helpers
import collections.abc

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STRIPE_MODE_FILE = os.path.join(BASE_DIR, 'stripe_mode.flag')
MAINTENANCE_FILE = os.path.join(BASE_DIR, 'maintenance.flag')

def get_stripe_mode():
    if os.path.isfile(STRIPE_MODE_FILE):
        with open(STRIPE_MODE_FILE, 'r') as f:
            mode = f.read().strip().lower()
            if mode in ('live', 'test'):
                return mode
    return 'live'

def get_stripe_client():
    mode = get_stripe_mode()
    if mode == 'test':
        test_key = read_secret('stripe_test_v1', 'STRIPE_TEST_SECRET_KEY')
        if not test_key:
            test_key = "sk_test_51TgWqGK9S4gHGvxwFNa7SNCtpDCF22j3ViHQ9cQXgOSaNICLk4tRK9HjOFmLxv0FhHHg08X0LUtckmEK1aybXgt700mi1zYqlx"
        return stripe.StripeClient(test_key)
    else:
        live_key = read_secret('stripe_live_v1', 'STRIPE_SECRET_KEY')
        if not live_key:
            print("Warning: Missing Stripe secret file stripe_live_v1.")
        return stripe.StripeClient(live_key)

def get_shipping_options():
    mode = get_stripe_mode()
    if mode == 'test':
        return {
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
          'international': {
            'stripe_rate_id': 'shr_1TlIyvK9S4gHGvxwwsl3tfgS',
            'label': 'Royal Mail International Tracked',
            'amount_pence': 950,
            'estimate_text': 'Estimated delivery within 3-5 business days (Europe) or 6-7 business days (Rest of World) after the order is finished.',
          },
        }
    else:
        return {
          'tracked24': {
            'stripe_rate_id': 'shr_1Ti0hyK4CROOpWXUhiIhLqWy',
            'label': 'Royal Mail Tracked 24',
            'amount_pence': 400,
            'estimate_text': 'Estimated delivery within 1 business day after the order is finished.',
          },
          'tracked48': {
            'stripe_rate_id': 'shr_1Ti0ieK4CROOpWXU5Cbop3Ii',
            'label': 'Royal Mail Tracked 48',
            'amount_pence': 199,
            'estimate_text': 'Estimated delivery within 2 days after the order is finished.',
            'free_threshold_pence': FREE_TRACKED48_THRESHOLD_PENCE,
          },
          'international': {
            'stripe_rate_id': 'shr_1To72LK4CROOpWXUQ4DKmzFE',
            'label': 'Royal Mail International Tracked',
            'amount_pence': 950,
            'estimate_text': 'Estimated delivery within 3-5 business days (Europe) or 6-7 business days (Rest of World) after the order is finished.',
          },
        }

class StripeClientProxy:
    def __getattr__(self, name):
        return getattr(get_stripe_client(), name)

class DynamicShippingOptions(collections.abc.Mapping):
    def __getitem__(self, key):
        return get_shipping_options()[key]
    def __iter__(self):
        return iter(get_shipping_options())
    def __len__(self):
        return len(get_shipping_options())
    def get(self, key, default=None):
        return get_shipping_options().get(key, default)
    def values(self):
        return get_shipping_options().values()

def is_maintenance_active():
    return os.path.isfile(MAINTENANCE_FILE)

client = StripeClientProxy()
SHIPPING_OPTIONS = DynamicShippingOptions()

class DynamicString:
    def __init__(self, getter):
        self._getter = getter
    def __str__(self):
        return str(self._getter())
    def __repr__(self):
        return repr(self._getter())
    def __eq__(self, other):
        return str(self) == other
    def __hash__(self):
        return hash(str(self))
    def __bool__(self):
        return bool(str(self))
    def __len__(self):
        return len(str(self))
    def __add__(self, other):
        return str(self) + other
    def __radd__(self, other):
        return other + str(self)

def get_coupon_20():
    mode = get_stripe_mode()
    if mode == 'test':
        return read_secret('stripe_coupon_20_test', 'STRIPE_TEST_COUPON_20') or \
               read_secret('stripe_coupon_20', 'STRIPE_COUPON_20') or 'lGKkukJL'
    else:
        return read_secret('stripe_coupon_20', 'STRIPE_COUPON_20') or 'lGKkukJL'

def get_coupon_size():
    mode = get_stripe_mode()
    if mode == 'test':
        return read_secret('stripe_coupon_size_test', 'STRIPE_TEST_COUPON_SIZE') or \
               read_secret('stripe_coupon_size', 'STRIPE_COUPON_SIZE') or '60pCPsnH'
    else:
        return read_secret('stripe_coupon_size', 'STRIPE_COUPON_SIZE') or '60pCPsnH'

def get_free_shipping_promo_id():
    mode = get_stripe_mode()
    if mode == 'test':
        return read_secret('stripe_free_shipping_promo_id_test', 'STRIPE_TEST_FREE_SHIPPING_PROMO_ID') or \
               read_secret('stripe_free_shipping_promo_id', 'STRIPE_FREE_SHIPPING_PROMO_ID') or 'promo_1ToCW2K4CROOpWXUXvpVGOFN'
    else:
        return read_secret('stripe_free_shipping_promo_id', 'STRIPE_FREE_SHIPPING_PROMO_ID') or 'promo_1ToCW2K4CROOpWXUXvpVGOFN'

STRIPE_COUPON_20 = DynamicString(get_coupon_20)
STRIPE_COUPON_SIZE = DynamicString(get_coupon_size)
STRIPE_FREE_SHIPPING_PROMO_ID = DynamicString(get_free_shipping_promo_id)

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

  try:
    if key in source:
      return source[key]
  except:
    pass

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
      f'<th style="text-align:left;padding:10px 12px;border:1px solid #d1d5db;background:#f8fafc;width:220px;font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">{escape_html(label)}</th>'
      f'<td style="padding:10px 12px;border:1px solid #d1d5db;font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">{escape_html(value)}</td>'
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


EUROPEAN_COUNTRIES = {
  'AL', 'AD', 'AM', 'AT', 'AZ', 'BY', 'BE', 'BA', 'BG', 'HR', 'CY', 'CZ', 'DK', 
  'EE', 'FI', 'FR', 'GE', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'KZ', 'LV', 'LI', 
  'LT', 'LU', 'MT', 'MD', 'MC', 'ME', 'NL', 'MK', 'NO', 'PL', 'PT', 'RO', 'RU', 
  'SM', 'RS', 'SK', 'SI', 'ES', 'SE', 'CH', 'TR', 'UA', 'VA'
}


def is_free_shipping_coupon(coupon_code=None, promotion_code_id=None):
  if coupon_code:
    if str(coupon_code).strip().upper() == 'DEV_JUNJUN':
      return True
  if promotion_code_id:
    if str(promotion_code_id).strip() == STRIPE_FREE_SHIPPING_PROMO_ID:
      return True
  return False


def resolve_shipping_option(raw_shipping_option_id, discounted_subtotal_pence, country='GB', has_free_shipping_coupon=False):
  shipping_option_id = str(raw_shipping_option_id or '').strip()
  option = SHIPPING_OPTIONS.get(shipping_option_id)

  if option is None:
    raise ValueError('Choose a shipping method.')

  free_threshold_pence = option.get('free_threshold_pence')
  amount_pence = int(option['amount_pence'])
  is_free = bool(
    has_free_shipping_coupon or
    (free_threshold_pence is not None and discounted_subtotal_pence >= int(free_threshold_pence))
  )

  if is_free:
    amount_pence = 0

  min_days = 2
  max_days = 2
  if shipping_option_id == 'tracked24':
    min_days = 1
    max_days = 1
  elif shipping_option_id == 'international':
    is_europe = str(country or '').strip().upper() in EUROPEAN_COUNTRIES
    min_days = 3 if is_europe else 6
    max_days = 5 if is_europe else 7

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
            'value': min_days,
          },
          'maximum': {
            'unit': 'day',
            'value': max_days,
          },
        },
      },
    }
    if is_free
    else {
      'shipping_rate': option['stripe_rate_id'],
    }
  )

  estimate_text = option['estimate_text']
  if shipping_option_id == 'international':
    is_europe = str(country or '').strip().upper() in EUROPEAN_COUNTRIES
    if is_europe:
      estimate_text = 'Estimated delivery within 3-5 business days after the order is finished.'
    else:
      estimate_text = 'Estimated delivery within 6-7 business days after the order is finished.'

  return {
    'id': shipping_option_id,
    'label': option['label'],
    'amount_pence': amount_pence,
    'estimate_text': estimate_text,
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
  
  # Fetch fully expanded checkout session including line items, discounts, and payment method details
  try:
    expanded_session = client.v1.checkout.sessions.retrieve(
      session_id,
      params={
        'expand': [
          'line_items', 
          'discounts', 
          'discounts.coupon', 
          'payment_intent', 
          'payment_intent.payment_method'
        ],
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

  shipping_details = get_value(expanded_session, 'shipping_details', {}) or {}
  shipping_address_obj = get_value(shipping_details, 'address', {}) or {}
  wallet_shipping_address = format_address(shipping_address_obj)

  preorder_shipping_address = format_address({
    'line1': get_value(metadata, 'shipping_address', ''),
    'city': get_value(metadata, 'shipping_city', ''),
    'postal_code': get_value(metadata, 'shipping_postcode', ''),
    'country': get_value(metadata, 'shipping_country', ''),
  })
  shipping_address = preorder_shipping_address or wallet_shipping_address or format_address(get_value(customer_details, 'address', {}) or {})

  # Retrieve Payment Method details
  payment_intent = get_value(expanded_session, 'payment_intent')
  payment_method_type = ''
  card_brand = ''
  card_last4 = ''
  card_wallet_type = ''
  
  if payment_intent and not isinstance(payment_intent, str):
    payment_method = get_value(payment_intent, 'payment_method')
    if payment_method and not isinstance(payment_method, str):
      payment_method_type = get_value(payment_method, 'type', '') or ''
      if payment_method_type == 'card':
        card = get_value(payment_method, 'card', {}) or {}
        card_brand = get_value(card, 'brand', '') or ''
        card_last4 = get_value(card, 'last4', '') or ''
        
        wallet = get_value(card, 'wallet', {}) or {}
        if wallet and not isinstance(wallet, str):
          card_wallet_type = get_value(wallet, 'type', '') or ''

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
    'shipping_address': shipping_address,
    'shipping_method': shipping_method,
    'shipping': format_money_from_pence(shipping_amount_pence),
    'subtotal': format_money_from_pence(get_value(expanded_session, 'amount_subtotal', 0)),
    'discount': format_money_from_pence(get_value(total_details, 'amount_discount', 0)),
    'total': format_money_from_pence(get_value(expanded_session, 'amount_total', 0)),
    'currency': str(get_value(expanded_session, 'currency', '') or '').upper(),
    'line_items': fetch_checkout_line_items(expanded_session),
    'payment_method_type': payment_method_type,
    'card_brand': card_brand.lower(),
    'card_last4': card_last4,
    'card_wallet_type': card_wallet_type.lower(),
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
    ('Shipping address', order_summary.get('shipping_address', '')),
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
    return '<p style="margin:0 0 24px; color:#4f444a; font-style:italic; font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">No items found in this order.</p>'

  rows = []
  for item in items:
    rows.append(
      '<tr>'
      f'<td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); font-weight:500; font-size:15px; color:#3d1a24; font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">{escape_html(item.get("description", "Item"))}</td>'
      f'<td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); text-align:center; font-size:15px; color:#4f444a; font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">{escape_html(item.get("quantity", 1))}</td>'
      f'<td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); text-align:right; font-size:15px; color:#4f444a; font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">{escape_html(item.get("unit_price", ""))}</td>'
      f'<td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); text-align:right; font-weight:500; font-size:15px; color:#3d1a24; font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">{escape_html(item.get("line_total", ""))}</td>'
      '</tr>'
    )

  return (
    '<table style="border-collapse:collapse; width:100%; margin:0 0 10px;">'
    '<thead>'
    '<tr>'
    '<th style="text-align:left; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase; font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">Item</th>'
    '<th style="text-align:center; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase; width:60px; font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">Qty</th>'
    '<th style="text-align:right; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase; width:80px; font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">Unit</th>'
    '<th style="text-align:right; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase; width:80px; font-family:\'DM Sans\',-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">Total</th>'
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
      paragraphs.append(f'<p style="margin: 0 0 12px 0; font-family: \'DM Sans\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6;">{escape_html(para.strip())}</p>')

  post_payment_html = f"""<div style="background-color: #fce4ea; border: 2px dashed #fc6587; border-radius: 12px; padding: 20px; margin: 24px 0; color: #3d1a24; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <h3 style="margin: 0 0 12px 0; font-family: 'Lobster', 'Brush Script MT', 'Lucida Handwriting', Georgia, serif; font-size: 20px; color: #ae3c6f; font-weight: normal;">💖 What happens next?</h3>
  {"".join(paragraphs)}
</div>"""

  # Check if discount exists
  discount_row = ''
  if order_summary.get('discount') and order_summary.get('discount') != '£0.00' and order_summary.get('discount') != '$0.00':
    coupon_str = f" ({order_summary.get('coupon_name')})" if order_summary.get('coupon_name') else ""
    discount_row = f"""<tr>
  <td style="padding: 6px 0; color: #4f444a; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">Discount{escape_html(coupon_str)}</td>
  <td align="right" style="padding: 6px 0; font-weight: 500; color: #c0392b; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">-{escape_html(order_summary.get("discount", ""))}</td>
</tr>"""

  # Check if shipping exists
  shipping_row = ''
  if order_summary.get('shipping'):
    shipping_row = f"""<tr>
  <td style="padding: 6px 0; color: #4f444a; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">Shipping ({escape_html(order_summary.get("shipping_method", ""))})</td>
  <td align="right" style="padding: 6px 0; font-weight: 500; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">{escape_html(order_summary.get("shipping", ""))}</td>
</tr>"""

  # Billing/Shipping address
  address_html = ''
  if order_summary.get('shipping_address'):
    address_html = f"""<h3 style="margin: 30px 0 12px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; color: #ae3c6f; border-bottom: 2px solid rgba(212, 84, 122, 0.15); padding-bottom: 6px;">Delivery Details</h3>
<p style="margin: 0 0 6px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; font-weight: 700;">Shipping Address:</p>
<p style="margin: 0 0 20px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #4f444a; white-space: pre-wrap;">{escape_html(order_summary.get("shipping_address", ""))}</p>"""

  # Build payment method HTML
  pm_type = order_summary.get('payment_method_type', '').lower()
  brand = order_summary.get('card_brand', '').lower()
  last4 = order_summary.get('card_last4', '')
  wallet_type = order_summary.get('card_wallet_type', '').lower()

  payment_logo_html = ''
  payment_details = 'Paid via Stripe'

  if pm_type == 'card' and last4:
    if wallet_type == 'apple_pay':
      payment_logo_html = '<img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" width="32" height="32" style="display: block; border: 0;" />'
      payment_details = "Apple Pay"
    elif wallet_type == 'google_pay':
      payment_logo_html = '<img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="Google Pay" width="32" height="32" style="display: block; border: 0;" />'
      payment_details = "Google Pay"
    else:
      supported_brands = ['visa', 'mastercard', 'amex', 'discover', 'jcb', 'diners']
      brand_name = brand if brand in supported_brands else 'visa'
      if brand in supported_brands:
        logo_url = f"https://img.icons8.com/color/48/000000/{brand_name}.png"
      else:
        logo_url = "https://img.icons8.com/color/48/000000/bank-card-back.png"
        
      payment_logo_html = f'<img src="{logo_url}" alt="{brand.capitalize()}" width="32" height="32" style="display: block; border: 0;" />'
      payment_details = f"{brand.capitalize() if brand else 'Card'} ending in {last4}"
  elif pm_type == 'paypal':
    payment_logo_html = '<img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" width="32" height="32" style="display: block; border: 0;" />'
    payment_details = 'PayPal'
  elif pm_type == 'klarna':
    payment_logo_html = '<img src="https://img.icons8.com/color/48/000000/klarna.png" alt="Klarna" width="32" height="32" style="display: block; border: 0;" />'
    payment_details = 'Klarna'
  elif pm_type == 'revolut_pay':
    payment_logo_html = '<img src="https://img.icons8.com/color/48/000000/revolut.png" alt="Revolut Pay" width="32" height="32" style="display: block; border: 0;" />'
    payment_details = 'Revolut Pay'
  elif pm_type:
    payment_logo_html = '<img src="https://img.icons8.com/color/48/000000/bank-card-back.png" alt="Payment" width="32" height="32" style="display: block; border: 0;" />'
    payment_details = pm_type.capitalize()
  else:
    payment_logo_html = '<img src="https://img.icons8.com/color/48/000000/bank-card-back.png" alt="Payment" width="32" height="32" style="display: block; border: 0;" />'
    payment_details = 'Paid via Stripe'

  payment_method_html = f"""<h3 style="margin: 30px 0 12px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; color: #ae3c6f; border-bottom: 2px solid rgba(212, 84, 122, 0.15); padding-bottom: 6px;">Payment Method</h3>
<table border="0" cellpadding="0" cellspacing="0" style="margin: 0 0 20px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; color: #3d1a24;">
  <tr>
    <td style="vertical-align: middle; padding-right: 10px;">
      {payment_logo_html}
    </td>
    <td style="vertical-align: middle; font-weight: 500; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #4f444a;">
      {payment_details}
    </td>
  </tr>
</table>"""

  items_table = build_customer_items_table(order_summary.get("line_items", []))

  return f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Juice Gels Order Confirmation</title>
  <!-- Link tag for web font support in email clients (like iOS, Apple Mail, Gmail mobile app) -->
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lobster&display=swap" rel="stylesheet" type="text/css">
  
  <style>
    /* fallback font stack */
    body, table, td, p, a {{
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }}
    body {{
      margin: 0;
      padding: 0;
      background-color: #ffd2e6;
      -webkit-font-smoothing: antialiased;
    }}
  </style>
</head>
<body style="margin: 0; padding: 40px 20px; background-color: #ffd2e6; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 0 0 40px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <!-- Outer Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #fff9fb; border: 1px solid rgba(212, 84, 122, 0.18); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(61, 26, 36, 0.08);">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 40px 30px 20px 30px; background-color: #fff9fb; border-bottom: 1px solid rgba(212, 84, 122, 0.1); font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
              <h1 style="margin: 0; font-family: 'Lobster', 'Brush Script MT', 'Lucida Handwriting', Georgia, serif; font-size: 42px; color: #fc6587; font-weight: normal; letter-spacing: 0.5px; line-height: 1.1;">Juice Gels</h1>
              <p style="margin: 8px 0 0 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #ae3c6f; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">Order Confirmation</p>
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style="padding: 30px 30px 20px 30px; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #3d1a24;">
              <h2 style="margin: 0 0 16px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 700; color: #3d1a24;">Hi {escape_html(customer_name)},</h2>
              <p style="margin: 0 0 20px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #3d1a24;">
                Thank you for your purchase! Your payment was successful, and we have received your order details below.
              </p>
              
              {post_payment_html}
              
              <h3 style="margin: 30px 0 12px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; color: #ae3c6f; border-bottom: 2px solid rgba(212, 84, 122, 0.15); padding-bottom: 6px;">Order Summary</h3>
              {items_table}
              
              <!-- Pricing Summary -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 20px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; color: #3d1a24;">
                <tr>
                  <td style="padding: 6px 0; color: #4f444a; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">Subtotal</td>
                  <td align="right" style="padding: 6px 0; font-weight: 500; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">{escape_html(order_summary.get("subtotal", ""))}</td>
                </tr>
                {discount_row}
                {shipping_row}
                <tr>
                  <td style="padding: 12px 0 0 0; font-size: 18px; font-weight: 700; color: #3d1a24; border-top: 1px solid rgba(212, 84, 122, 0.15); font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">Total Paid</td>
                  <td align="right" style="padding: 12px 0 0 0; font-size: 18px; font-weight: 700; color: #fc6587; border-top: 1px solid rgba(212, 84, 122, 0.15); font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">{escape_html(order_summary.get("total", ""))}</td>
                </tr>
              </table>
              
              {payment_method_html}
              
              {address_html}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #fff9fb; border-top: 1px solid rgba(212, 84, 122, 0.1); text-align: center; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
              <p style="margin: 0 0 12px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #4f444a;">
                Have a question? Contact us on Instagram <a href="https://instagram.com/juicegels" target="_blank" style="color: #fc6587; text-decoration: underline; font-weight: 500; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">@juicegels</a> or reply directly to this email.
              </p>
              <p style="margin: 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #ae3c6f; font-weight: 500;">
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


def handle_completed_payment_intent(payment_intent):
  print("Building order summary for completed PaymentIntent...")
  order_summary = build_order_summary_from_payment_intent(payment_intent)

  print("Sending store owner order email notification (Express)...")
  try:
    send_pingram_order_email(order_summary)
    print("Store owner order email notification successfully sent.")
  except Exception as e:
    print(f"Failed to send store owner email notification: {e}")
    import traceback
    traceback.print_exc()
    raise

  print("Sending customer purchase confirmation email (Express)...")
  send_customer_order_email(order_summary)
  print("Customer confirmation email process completed.")


def fetch_catalog_products():
  import urllib.request
  import json
  
  project_id = "5co5ooqr"
  dataset = "production"
  query = '*[_type == "product" && !(_id in path("drafts.**"))]{title, baseId, productId, price, description, image, image2, image3, image4, tags}'
  encoded_query = quote(query)
  url = f"https://{project_id}.api.sanity.io/v2021-10-21/data/query/{dataset}?query={encoded_query}"
  
  req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
  with urllib.request.urlopen(req) as response:
    res = json.loads(response.read().decode('utf-8'))
    return res.get('result', [])


def get_catalog_items_by_id():
  sanity_products = fetch_catalog_products()
  DEFAULT_SHAPES = ["Square", "Oval", "Stiletto", "Coffin", "Almond"]
  DEFAULT_LENGTHS = ["Short", "Medium", "Long"]
  
  catalog_by_id = {}
  for p in sanity_products:
    title = p.get('title', '')
    product_id = p.get('productId') or p.get('baseId')
    if product_id is None:
      continue
    product_id = int(product_id)
    price = float(p.get('price', 0))
    
    is_single = title.lower() == 'nail sizing guide' or product_id == 286
    
    if is_single:
      variant_id = f"JUICEGELS-{str(product_id).zfill(4)}"
      catalog_by_id[variant_id] = {
        'id': variant_id,
        'name': title,
        'price': price
      }
    else:
      for s_idx, shape in enumerate(DEFAULT_SHAPES):
        for l_idx, length in enumerate(DEFAULT_LENGTHS):
          offset = s_idx * 3 + l_idx
          id_num = product_id + offset
          variant_id = f"JUICEGELS-{str(id_num).zfill(4)}"
          display_name = f"{title} - {shape} - {length}"
          catalog_by_id[variant_id] = {
            'id': variant_id,
            'name': display_name,
            'price': price
          }
  return catalog_by_id


def build_order_summary_from_payment_intent(payment_intent):
  intent_id = get_value(payment_intent, 'id', '')
  metadata = get_value(payment_intent, 'metadata', {}) or {}
  
  charges = get_value(payment_intent, 'charges', {}) or {}
  charges_data = get_value(charges, 'data', []) or []
  customer_email = ''
  billing_details = {}
  card_brand = ''
  card_last4 = ''
  card_wallet_type = ''
  payment_method_type = ''
  
  if charges_data and len(charges_data) > 0:
    charge = charges_data[0]
    billing_details = get_value(charge, 'billing_details', {}) or {}
    customer_email = get_value(billing_details, 'email', '')
    
    payment_method_details = get_value(charge, 'payment_method_details', {}) or {}
    payment_method_type = get_value(payment_method_details, 'type', '') or ''
    if payment_method_type == 'card':
      card = get_value(payment_method_details, 'card', {}) or {}
      card_brand = get_value(card, 'brand', '') or ''
      card_last4 = get_value(card, 'last4', '') or ''
      wallet = get_value(card, 'wallet', {}) or {}
      if wallet and not isinstance(wallet, str):
        card_wallet_type = get_value(wallet, 'type', '') or ''
        
  shipping = get_value(payment_intent, 'shipping', {}) or {}
  shipping_name = get_value(shipping, 'name', '')
  shipping_address_obj = get_value(shipping, 'address', {}) or {}
  wallet_shipping_address = format_address(shipping_address_obj)
  
  preorder_shipping_address = format_address({
    'line1': get_value(metadata, 'shipping_address', ''),
    'city': get_value(metadata, 'shipping_city', ''),
    'postal_code': get_value(metadata, 'shipping_postcode', ''),
    'country': get_value(metadata, 'shipping_country', ''),
  })
  shipping_address = preorder_shipping_address or wallet_shipping_address
  
  first_name = ''
  last_name = ''
  if shipping_name:
    name_parts = shipping_name.strip().split(' ', 1)
    first_name = name_parts[0]
    last_name = name_parts[1] if len(name_parts) > 1 else ''
    
  if not first_name:
    first_name = get_value(metadata, 'first_name', '')
  if not last_name:
    last_name = get_value(metadata, 'last_name', '')
    
  if not customer_email:
    customer_email = get_value(metadata, 'email', '') or get_value(payment_intent, 'receipt_email', '') or ''
    
  phone = get_value(shipping, 'phone', '') or get_value(billing_details, 'phone', '') or get_value(metadata, 'phone', '') or ''
  
  # Parse items list from metadata
  items_param = get_value(metadata, 'items', '')
  line_items = []
  subtotal_pence = 0
  
  try:
    catalog_by_id = get_catalog_items_by_id()
  except Exception as cat_err:
    print(f"Error fetching catalog to build Express Order summary: {cat_err}")
    catalog_by_id = {}
  
  if items_param:
    for part in items_param.split(','):
      if not part:
        continue
      if ':' in part:
        prod_id, qty_str = part.split(':', 1)
        qty = parse_int(qty_str, 1)
        prod = catalog_by_id.get(prod_id)
        if prod:
          price = float(prod.get('price', 0))
          unit_amount = round(price * 100)
          subtotal_pence += unit_amount * qty
          
          line_items.append({
            'description': prod.get('name', 'Product'),
            'quantity': qty,
            'unit_price': format_money_from_pence(unit_amount),
            'line_total': format_money_from_pence(unit_amount * qty),
          })
          
  total_amount = get_value(payment_intent, 'amount', 0)
  shipping_amount_pence = total_amount - subtotal_pence
  
  coupon_code = get_value(metadata, 'coupon_code', '')
  
  return {
    'session_id': intent_id,
    'created_at': format_unix_timestamp(get_value(payment_intent, 'created')),
    'payment_status': 'paid',
    'customer_email': customer_email,
    'first_name': first_name,
    'last_name': last_name,
    'phone': phone,
    'instagram': get_value(metadata, 'instagram', ''),
    'contact_preference': get_value(metadata, 'contact_preference', 'instagram'),
    'notes': get_value(metadata, 'notes', ''),
    'coupon_code': coupon_code,
    'coupon_name': coupon_code,
    'billing_address': format_address(get_value(billing_details, 'address', {}) or {}),
    'shipping_address': shipping_address,
    'shipping_method': get_value(metadata, 'shipping_method', 'Tracked Shipping'),
    'shipping': format_money_from_pence(max(0, shipping_amount_pence)),
    'subtotal': format_money_from_pence(subtotal_pence),
    'discount': format_money_from_pence(max(0, subtotal_pence + max(0, shipping_amount_pence) - total_amount)),
    'total': format_money_from_pence(total_amount),
    'currency': str(get_value(payment_intent, 'currency', '') or '').upper(),
    'line_items': line_items,
    'payment_method_type': payment_method_type,
    'card_brand': card_brand.lower(),
    'card_last4': card_last4,
    'card_wallet_type': card_wallet_type.lower(),
  }


def format_coupon_description(coupon):
  percent_off = get_value(coupon, 'percent_off')
  amount_off = get_value(coupon, 'amount_off')

  if amount_off is None:
    currency_options = get_value(coupon, 'currency_options')
    if currency_options and 'gbp' in currency_options:
      amount_off = get_value(get_value(currency_options, 'gbp'), 'amount_off')

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
      'expand': ['data.promotion.coupon'],
    }
  )

  matches = get_data_list(response)
  promotion_code = next(
    (
      entry
      for entry in matches
      if get_value(entry, 'active', False)
      and get_value(get_value(get_value(entry, 'promotion', {}), 'coupon', {}), 'valid', True)
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

  promotion = get_value(promotion_code, 'promotion', {}) or {}
  coupon = get_value(promotion, 'coupon', {}) or {}
  percent_off = get_value(coupon, 'percent_off')
  amount_off = get_value(coupon, 'amount_off')
  amount_off_currency = str(get_value(coupon, 'currency', '') or '').lower()

  if amount_off is None:
    currency_options = get_value(coupon, 'currency_options')
    if currency_options and 'gbp' in currency_options:
      amount_off = get_value(get_value(currency_options, 'gbp'), 'amount_off')
      amount_off_currency = 'gbp'

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


@app.before_request
def check_maintenance():
  if request.method == 'OPTIONS':
    return None
  if is_maintenance_active():
    if request.path in ('/api/status', '/stripe-webhook'):
      return None
    return jsonify({
      'maintenance': True,
      'message': 'The website is currently undergoing maintenance. Please check back later!'
    }), 503


@app.route('/api/status', methods=['GET', 'OPTIONS'])
def api_status():
  return jsonify({
    'maintenance': is_maintenance_active(),
    'stripe_mode': get_stripe_mode()
  })


@app.route('/api/meta-catalog', methods=['GET'])
def get_meta_catalog():
  import urllib.request
  import json
  import csv
  from io import StringIO
  from flask import make_response

  project_id = "5co5ooqr"
  dataset = "production"
  # Query both baseId and productId, and filter out draft documents correctly in GROQ
  query = '*[_type == "product" && !(_id in path("drafts.**"))]{title, baseId, productId, price, description, image, image2, image3, image4, tags}'
  encoded_query = quote(query)
  url = f"https://{project_id}.api.sanity.io/v2021-10-21/data/query/{dataset}?query={encoded_query}"
  
  try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
      res = json.loads(response.read().decode('utf-8'))
      sanity_products = res.get('result', [])
  except Exception as e:
    import traceback
    print("Error querying Sanity for Meta Catalog:", str(e))
    traceback.print_exc()
    return jsonify({"error": f"Failed to fetch data from Sanity: {str(e)}"}), 500

  def build_sanity_image_url(ref):
    if not ref:
      return ""
    parts = ref.split("-")
    if len(parts) < 4:
      return ""
    asset_id = parts[1]
    dims = parts[2]
    ext = parts[3]
    return f"https://cdn.sanity.io/images/{project_id}/{dataset}/{asset_id}-{dims}.{ext}"

  def format_price(p):
    try:
      val = float(p)
      if val.is_integer():
        return str(int(val))
      return f"{val:.1f}"
    except:
      return str(p)

  def parse_description(desc_val):
    if not desc_val:
      return ""
    if isinstance(desc_val, str):
      return desc_val.replace('\n', ' ').strip()
    if isinstance(desc_val, list):
      text_parts = []
      for block in desc_val:
        if isinstance(block, dict) and block.get('_type') == 'block':
          children = block.get('children', [])
          block_text = ""
          for child in children:
            if isinstance(child, dict) and 'text' in child:
              block_text += child.get('text', '')
          if block_text:
            if block.get('listItem') == 'bullet':
              block_text = f"- {block_text}"
            text_parts.append(block_text)
      return " ".join(text_parts).replace('\n', ' ').strip()
    return str(desc_val).replace('\n', ' ').strip()

  def get_image_ref(img_field):
    if not img_field or not isinstance(img_field, dict):
      return ""
    asset = img_field.get('asset')
    if not asset or not isinstance(asset, dict):
      return ""
    return asset.get('_ref', '')

  si = StringIO()
  cw = csv.writer(si)
  
  # Standard Meta required headers. We include both 'link' (standard) and 'root links' (legacy) for full compatibility.
  headers = [
    'id', 'TITLE', 'DESCRIPTION', 'PRICE', 'CURRENCY_CODE', 'QUANTITY', 'TAGS', 'MATERIALS',
    'IMAGE1', 'IMAGE2', 'IMAGE3', 'IMAGE4', 'condition', 'availability', 'link', 'root links',
    'item_group_id', 'shape', 'length', 'additional_variant_attribute', 'additional_image_link',
    'fb_product_category'
  ]
  cw.writerow(headers)
  
  DEFAULT_SHAPES = ["Square", "Oval", "Stiletto", "Coffin", "Almond"]
  DEFAULT_LENGTHS = ["Short", "Medium", "Long"]
  
  frontend_base_url = "https://juicegels.com"
  
  for p in sanity_products:
    title = p.get('title', '')
    # Fallback from productId to baseId in case the schema field varies
    product_id = p.get('productId') or p.get('baseId')
    if product_id is None:
      continue
    product_id = int(product_id)
    price = format_price(p.get('price', 0))
    desc = parse_description(p.get('description'))
    
    tags_list = p.get('tags')
    if not isinstance(tags_list, list):
      tags_list = []
    formatted_tags = ",".join([t.strip().replace(' ', '_').lower() for t in tags_list if isinstance(t, str) and t])
    
    # Images
    img_ref = get_image_ref(p.get('image'))
    img2_ref = get_image_ref(p.get('image2'))
    img3_ref = get_image_ref(p.get('image3'))
    img4_ref = get_image_ref(p.get('image4'))
    
    is_single = title.lower() == 'nail sizing guide' or product_id == 286
    
    if is_single:
      variant_id = f"JUICEGELS-{str(product_id).zfill(4)}"
      
      img1 = build_sanity_image_url(img_ref) or f"{frontend_base_url}/images/{variant_id}.jpg"
      img2 = build_sanity_image_url(img2_ref) or f"{frontend_base_url}/images/coin.jpeg"
      img3 = build_sanity_image_url(img3_ref) or f"{frontend_base_url}/images/nailsize.jpg"
      img4 = build_sanity_image_url(img4_ref) or f"{frontend_base_url}/images/tape.jpg"
      additional_images = ",".join(filter(None, [img2, img3, img4]))
      
      product_link = f"{frontend_base_url}/product/{variant_id}?shape=Square&length=Short"
      
      cw.writerow([
        variant_id,
        title,
        desc,
        price,
        'GBP',
        '20',
        formatted_tags,
        '',
        img1,
        img2,
        img3,
        img4,
        'new',
        'in stock',
        product_link,  # link (standard)
        product_link,  # root links (legacy)
        'juicegels_nailsizingguide',
        'Square',
        'Short',
        'Shape:Square',
        additional_images,
        '799'
      ])
    else:
      group_id = f"Juicegels_{''.join(word.capitalize() for word in title.split())}Set"
      
      for s_idx, shape in enumerate(DEFAULT_SHAPES):
        for l_idx, length in enumerate(DEFAULT_LENGTHS):
          offset = s_idx * 3 + l_idx
          id_num = product_id + offset
          variant_id = f"JUICEGELS-{str(id_num).zfill(4)}"
          
          img1 = build_sanity_image_url(img_ref) or f"{frontend_base_url}/images/{variant_id}.jpg"
          img2 = build_sanity_image_url(img2_ref) or f"{frontend_base_url}/images/coin.jpeg"
          img3 = build_sanity_image_url(img3_ref) or f"{frontend_base_url}/images/nailsize.jpg"
          img4 = build_sanity_image_url(img4_ref) or f"{frontend_base_url}/images/tape.jpg"
          additional_images = ",".join(filter(None, [img2, img3, img4]))
          
          product_link = f"{frontend_base_url}/product/{variant_id}?shape={shape}&length={length}"
          
          cw.writerow([
            variant_id,
            title,
            desc,
            price,
            'GBP',
            '20',
            formatted_tags,
            '',
            img1,
            img2,
            img3,
            img4,
            'new',
            'in stock',
            product_link,  # link (standard)
            product_link,  # root links (legacy)
            group_id,
            shape,
            length,
            f"Shape:{shape}",
            additional_images,
            '799'
          ])
          
  output = make_response(si.getvalue())
  output.headers["Content-Disposition"] = "attachment; filename=meta_catalog.csv"
  output.headers["Content-type"] = "text/csv"
  return output



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
  attachments = summary.get("attachments", [])
  attachment_names = ", ".join(att["filename"] for att in attachments) if attachments else "None"

  return (
    '<div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;max-width:900px;margin:0 auto;">'
    '<h1 style="margin:0 0 16px;">New Custom Order Request</h1>'
    '<p style="margin:0 0 24px;">A new custom order request has been submitted on the website.</p>'
    '<h2 style="margin:0 0 12px;font-size:20px;">Customer Details</h2>'
    f'{build_info_table([("Name", summary.get("name")), ("Email", summary.get("email")), ("Instagram", summary.get("instagram"))])}'
    '<h2 style="margin:0 0 12px;font-size:20px;">Request Details</h2>'
    f'{build_info_table([("Nail Shape", summary.get("shape")), ("Nail Length", summary.get("length")), ("Design Details", summary.get("details")), ("Attachments", attachment_names)])}'
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
      paragraphs.append(f'<p style="margin: 0 0 12px 0; font-family: \'DM Sans\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6;">{escape_html(para.strip())}</p>')

  post_payment_html = f"""<div style="background-color: #fce4ea; border: 2px dashed #fc6587; border-radius: 12px; padding: 20px; margin: 24px 0; color: #3d1a24; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <h3 style="margin: 0 0 12px 0; font-family: 'Lobster', 'Brush Script MT', 'Lucida Handwriting', Georgia, serif; font-size: 20px; color: #ae3c6f; font-weight: normal;">💖 What happens next?</h3>
  {"".join(paragraphs)}
</div>"""

  attachments = summary.get("attachments", [])
  attachment_names = ", ".join(att["filename"] for att in attachments) if attachments else "None"

  details_table = build_info_table([
    ('Preferred Shape', summary.get('shape', '')),
    ('Preferred Length', summary.get('length', '')),
    ('Design Details', summary.get('details', '')),
    ('Attachments', attachment_names),
  ])

  return f"""<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Order Request - Juice Gels</title>
  <!-- Link tag for web font support in email clients (like iOS, Apple Mail, Gmail mobile app) -->
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lobster&display=swap" rel="stylesheet" type="text/css">
  
  <style>
    /* fallback font stack */
    body, table, td, p, a {{
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }}
    body {{
      margin: 0;
      padding: 0;
      background-color: #ffd2e6;
      -webkit-font-smoothing: antialiased;
    }}
  </style>
</head>

<body style="margin: 0; padding: 40px 20px; background-color: #ffd2e6; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 0 0 40px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <!-- Outer Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%"
          style="max-width: 600px; background-color: #fff9fb; border: 1px solid rgba(212, 84, 122, 0.18); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(61, 26, 36, 0.08);">
          <!-- Header -->
          <tr>
            <td align="center"
              style="padding: 40px 30px 20px 30px; background-color: #fff9fb; border-bottom: 1px solid rgba(212, 84, 122, 0.15); font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
              <h1
                style="margin: 0; font-family: 'Lobster', 'Brush Script MT', 'Lucida Handwriting', Georgia, serif; font-size: 42px; color: #fc6587; font-weight: normal; letter-spacing: 0.5px; line-height: 1.1;">
                Juice Gels</h1>
              <p
                style="margin: 8px 0 0 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #ae3c6f; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">
                Custom Order Request</p>
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style="padding: 30px 30px 20px 30px; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #3d1a24;">
              <h2
                style="margin: 0 0 16px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 700; color: #3d1a24;">
                Hi {escape_html(customer_name)},</h2>
              <p style="margin: 0 0 20px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #3d1a24;">
                We have received your custom order inquiry! Please see details below.
              </p>

              {post_payment_html}

              <h3
                style="margin: 30px 0 12px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 700; color: #ae3c6f; border-bottom: 2px solid rgba(212, 84, 122, 0.15); padding-bottom: 6px;">
                Your Request Details</h3>
              {details_table}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td
              style="padding: 30px; background-color: #fff9fb; border-top: 1px solid rgba(212, 84, 122, 0.1); text-align: center; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
              <p style="margin: 0 0 12px 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #4f444a;">
                Have a question? Feel free to DM us on Instagram <a href="https://instagram.com/juicegels"
                  target="_blank" style="color: #fc6587; text-decoration: underline; font-weight: 500; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">@juicegels</a>.
              </p>
              <p style="margin: 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #ae3c6f; font-weight: 500;">
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

  owner_email_options = {
    'replyToAddresses': ['juicegels@gmail.com'],
  }
  customer_email_options = {
    'replyToAddresses': ['juicegels@gmail.com'],
  }

  attachments = summary.get('attachments', [])
  if attachments:
    owner_email_options['attachments'] = attachments
    customer_email_options['attachments'] = attachments

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
      'email': owner_email_options
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
      'email': customer_email_options
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


def verify_turnstile(token, remote_ip=None):
  import urllib.request
  import urllib.parse
  import json
  
  secret_key = read_secret('cloudflare_turnstile_secret_key', 'CLOUDFLARE_TURNSTILE_SECRET_KEY')
  
  # Allow dummy tokens during local testing or if no secret key is configured
  is_dummy_token = token in ('XXXX.DUMMY.TOKEN.XXXX', 'XXXX.DUMMY.TOKEN.XXXX2', 'XXXX.DUMMY.TOKEN.XXXX3') or 'DUMMY' in token
  if is_dummy_token:
    is_local = False
    try:
      from flask import request
      if request and request.host:
        host = request.host.lower()
        if 'localhost' in host or '127.0.0.1' in host or '192.168.' in host:
          is_local = True
    except Exception:
      pass
      
    if not secret_key or is_local:
      secret_key = '1x00000000000000000000000000000000'
  
  if not secret_key:
    secret_key = '1x00000000000000000000000000000000'

  url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
  data = {
    'secret': secret_key,
    'response': token
  }
  if remote_ip:
    data['remoteip'] = remote_ip

  encoded_data = urllib.parse.urlencode(data).encode('utf-8')
  req = urllib.request.Request(url, data=encoded_data, method='POST')
  
  try:
    with urllib.request.urlopen(req, timeout=10) as response:
      res_body = response.read().decode('utf-8')
      res_data = json.loads(res_body)
      return res_data.get('success', False)
  except Exception as e:
    print(f"Turnstile verification error: {e}")
    return False


@app.route('/create-custom-order', methods=['POST', 'OPTIONS'])
def create_custom_order():
  if request.method == 'OPTIONS':
    return jsonify({}), 204

  payload = request.get_json(force=True)
  turnstile_token = payload.get('turnstileToken')

  # Determine remote IP for Turnstile verification
  remote_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
  if remote_ip and ',' in remote_ip:
    remote_ip = remote_ip.split(',')[0].strip()

  if not turnstile_token or not verify_turnstile(turnstile_token, remote_ip):
    return jsonify({ 'error': 'Security check failed. Please complete the security check.' }), 400

  name = str(payload.get('name', '')).strip()
  email = str(payload.get('email', '')).strip()
  instagram = str(payload.get('instagram', '')).strip()
  shape = str(payload.get('shape', '')).strip()
  length = str(payload.get('length', '')).strip()
  details = str(payload.get('details', '')).strip()
  attachments = payload.get('attachments', [])

  if not name or not email or not instagram or not details:
    return jsonify({ 'error': 'Missing required fields: name, email, instagram, and details are required.' }), 400

  formatted_attachments = []
  if isinstance(attachments, list):
    for att in attachments:
      if isinstance(att, dict) and 'filename' in att and 'content' in att:
        formatted_attachments.append({
          'filename': str(att['filename']),
          'content': str(att['content']),
          'contentType': str(att.get('contentType') or att.get('content_type') or 'application/octet-stream')
        })

  try:
    send_custom_order_emails({
      'name': name,
      'email': email,
      'instagram': instagram,
      'shape': shape,
      'length': length,
      'details': details,
      'attachments': formatted_attachments
    })
    return jsonify({ 'success': True })
  except Exception as e:
    import traceback
    traceback.print_exc()
    return jsonify({ 'error': 'internal server error' }), 500


@app.route('/stripe-webhook', methods=['POST'])
def stripe_webhook():
  print("Stripe webhook endpoint called!")
  mode = get_stripe_mode()
  if mode == 'test':
    webhook_secret = read_secret('stripe_webhook', 'STRIPE_TEST_WEBHOOK_SECRET')
    if not webhook_secret:
      print("Warning: STRIPE_TEST_WEBHOOK_SECRET not configured. Falling back to STRIPE_WEBHOOK_SECRET.")
      webhook_secret = read_secret('stripe_webhook_live', 'STRIPE_WEBHOOK_SECRET')
  else:
    webhook_secret = read_secret('stripe_webhook_live', 'STRIPE_WEBHOOK_SECRET')

  if not webhook_secret:
    print("Error: Missing Stripe webhook secret.")
    return jsonify({ 'error': 'Missing Stripe webhook secret file.' }), 500

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
  elif get_value(event, 'type') == 'payment_intent.succeeded':
    try:
      payment_intent = get_value(get_value(event, 'data', {}) or {}, 'object', {}) or {}
      print(f"Stripe webhook: processing payment_intent.succeeded with ID: {get_value(payment_intent, 'id', '')}")
      
      metadata = get_value(payment_intent, 'metadata', {}) or {}
      if not metadata or not get_value(metadata, 'items'):
        print("Stripe webhook: payment_intent.succeeded does not contain 'items' metadata. Assuming standard Checkout Session payment. Skipping to avoid duplicate emails.")
        return jsonify({ 'received': True })
      
      handle_completed_payment_intent(payment_intent)
      print("Stripe webhook: successfully processed payment_intent.succeeded.")
    except Exception as e:
      print(f"Stripe webhook error while processing completed payment intent: {e}")
      import traceback
      traceback.print_exc()
      return jsonify({ 'error': 'Failed to process completed payment intent.' }), 500
  else:
    print(f"Stripe webhook: ignoring unhandled event type: {get_value(event, 'type')}")

  return jsonify({ 'received': True })

@app.route('/api/checkout-session/<session_id>', methods=['GET', 'OPTIONS'])
def get_checkout_session(session_id):
  if request.method == 'OPTIONS':
    return jsonify({}), 204

  try:
    session = client.v1.checkout.sessions.retrieve(
      session_id,
      params={
        'expand': ['customer_details'],
      }
    )
    metadata = session.metadata or {}
    
    shipping_details = getattr(session, 'shipping_details', None) or {}
    shipping_address = getattr(shipping_details, 'address', None) or {}
    
    first_name = metadata.get('first_name', '')
    last_name = metadata.get('last_name', '')
    
    shipping_name = getattr(shipping_details, 'name', '') or ''
    if shipping_name:
      name_parts = shipping_name.strip().split(' ', 1)
      first_name = name_parts[0]
      last_name = name_parts[1] if len(name_parts) > 1 else ''

    address = metadata.get('shipping_address', '') or getattr(shipping_address, 'line1', '')
    city = metadata.get('shipping_city', '') or getattr(shipping_address, 'city', '')
    postcode = metadata.get('shipping_postcode', '') or getattr(shipping_address, 'postal_code', '')
    country = metadata.get('shipping_country', '') or getattr(shipping_address, 'country', '')
    email = (session.customer_details.email if session.customer_details else None) or session.customer_email or ''
    contact_method = metadata.get('contact_preference', 'instagram')
    instagram = metadata.get('instagram', '')
    phone = getattr(shipping_details, 'phone', '') or metadata.get('phone', '') or ''
    notes = metadata.get('notes', '')
    
    return jsonify({
      'firstName': first_name,
      'lastName': last_name,
      'email': email,
      'phone': phone,
      'address': address,
      'city': city,
      'postcode': postcode,
      'country': country,
      'contactMethod': contact_method,
      'instagram': instagram,
      'notes': notes
    })
  except Exception as e:
    print(f"Error retrieving checkout session: {e}")
    return jsonify({'error': 'Failed to retrieve checkout session'}), 500

@app.route('/api/payment-intent/<intent_id>', methods=['GET', 'OPTIONS'])
def get_payment_intent_details(intent_id):
  if request.method == 'OPTIONS':
    return jsonify({}), 204

  try:
    intent = client.v1.payment_intents.retrieve(
      intent_id,
      params={
        'expand': ['payment_method'],
      }
    )
    metadata = intent.metadata or {}
    
    shipping_details = getattr(intent, 'shipping', None) or {}
    shipping_address = getattr(shipping_details, 'address', None) or {}
    
    first_name = get_value(metadata, 'first_name', '')
    last_name = get_value(metadata, 'last_name', '')
    
    shipping_name = get_value(shipping_details, 'name', '') or ''
    if shipping_name and not (first_name or last_name):
      name_parts = shipping_name.strip().split(' ', 1)
      first_name = name_parts[0]
      last_name = name_parts[1] if len(name_parts) > 1 else ''

    address = get_value(metadata, 'shipping_address', '') or get_value(shipping_address, 'line1', '')
    city = get_value(metadata, 'shipping_city', '') or get_value(shipping_address, 'city', '')
    postcode = get_value(metadata, 'shipping_postcode', '') or get_value(shipping_address, 'postal_code', '')
    country = get_value(metadata, 'shipping_country', '') or get_value(shipping_address, 'country', '')
    email = get_value(metadata, 'email', '') or get_value(intent, 'receipt_email', '') or ''
    contact_method = get_value(metadata, 'contact_preference', 'instagram')
    instagram = get_value(metadata, 'instagram', '')
    phone = get_value(shipping_details, 'phone', '') or get_value(metadata, 'phone', '') or ''
    notes = get_value(metadata, 'notes', '')
    
    return jsonify({
      'firstName': first_name,
      'lastName': last_name,
      'email': email,
      'phone': phone,
      'address': address,
      'city': city,
      'postcode': postcode,
      'country': country,
      'contactMethod': contact_method,
      'instagram': instagram,
      'notes': notes
    })
  except Exception as e:
    print(f"Error retrieving payment intent details: {e}")
    import traceback
    traceback.print_exc()
    return jsonify({'error': 'Failed to retrieve payment intent'}), 500

@app.route('/create-checkout-session', methods=['POST', 'OPTIONS'])

def create_checkout_session():
  if request.method == 'OPTIONS':
    return jsonify({}), 204

  payload = request.get_json(force=True)
  turnstile_token = payload.get('turnstileToken')

  # Determine remote IP for Turnstile verification
  remote_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
  if remote_ip and ',' in remote_ip:
    remote_ip = remote_ip.split(',')[0].strip()

  # Allow Turnstile bypass for Express Checkout since mobile wallet authentication verifies user authenticity
  is_express_checkout = turnstile_token == "Bypassed_For_Express_Checkout"

  if not is_express_checkout:
    if not turnstile_token or not verify_turnstile(turnstile_token, remote_ip):
      return jsonify({ 'error': 'Security check failed. Please complete the security check.' }), 400

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
        fallback_default = 'prod_UhOWU4BodmJb0F' if is_production else ''
        stripe_product_id = read_secret('stripe_fallback_product_id', 'STRIPE_FALLBACK_PRODUCT_ID') or fallback_default
        if stripe_product_id:
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
  if coupon_summary:
    discounted_subtotal_pence -= coupon_summary['discount_pence']
  elif apply_20_percent_discount:
    discounted_subtotal_pence -= round(subtotal_pence * 0.20)
  elif apply_size_guide_coupon:
    discounted_subtotal_pence -= size_guide_discount_pence
  discounted_subtotal_pence = max(0, discounted_subtotal_pence)

  has_free_shipping = False
  if coupon_summary:
    has_free_shipping = is_free_shipping_coupon(
      coupon_code=coupon_summary.get('code'),
      promotion_code_id=coupon_summary.get('promotion_code_id')
    )
  elif raw_coupon_code:
    has_free_shipping = is_free_shipping_coupon(coupon_code=raw_coupon_code)

  is_embedded = payload.get('embedded', False)
  shipping_option = None

  if is_embedded and not shipping_option_id:
    shipping_option_id = 'tracked48'

  country = str(form.get('country') or 'GB').strip()
  try:
    shipping_option = resolve_shipping_option(
      shipping_option_id,
      discounted_subtotal_pence,
      country,
      has_free_shipping_coupon=has_free_shipping
    )
  except ValueError as error:
    return jsonify({ 'error': str(error) }), 400

  try:
    if is_embedded:
      intent_params = {
        'amount': discounted_subtotal_pence + shipping_option['amount_pence'],
        'currency': 'gbp',
        'metadata': {
          'first_name': form.get('firstName', ''),
          'last_name': form.get('lastName', ''),
          'email': form.get('email', '').strip() if form.get('email') else '',
          'phone': form.get('phone', ''),
          'instagram': form.get('instagram', ''),
          'contact_preference': form.get('contactMethod', 'instagram'),
          'notes': form.get('notes', ''),
          'shipping_address': form.get('address', ''),
          'shipping_city': form.get('city', ''),
          'shipping_postcode': form.get('postcode', ''),
          'shipping_country': country,
          'coupon_code': coupon_summary['code'] if coupon_summary else (str(STRIPE_COUPON_SIZE) if apply_size_guide_coupon else (str(STRIPE_COUPON_20) if apply_20_percent_discount else '')),
          'shipping_option_id': shipping_option['id'],
          'shipping_method': shipping_option['label'],
          'shipping_amount_pence': str(shipping_option['amount_pence']),
          'items': items_param,
        },
        'automatic_payment_methods': {
          'enabled': True,
        },
      }
      customer_email = form.get('email', '').strip() if form.get('email') else ''
      if customer_email:
        intent_params['receipt_email'] = customer_email

      intent = client.v1.payment_intents.create(params=intent_params)
      return jsonify({ 'clientSecret': intent.client_secret })
    else:
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
              'country': country,
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
          'shipping_country': country,
          'coupon_code': coupon_summary['code'] if coupon_summary else (str(STRIPE_COUPON_SIZE) if apply_size_guide_coupon else (str(STRIPE_COUPON_20) if apply_20_percent_discount else '')),
          'shipping_option_id': shipping_option['id'],
          'shipping_method': shipping_option['label'],
          'shipping_amount_pence': str(shipping_option['amount_pence']),
        },
        'mode': 'payment',
        'success_url': f"{origin}/confirmation?checkout=success&session_id={{CHECKOUT_SESSION_ID}}&items={items_param}",
        'cancel_url': f"{origin}/basket?items={items_param}{f'&coupon={quote(coupon_summary['code'], safe='')}' if coupon_summary else ''}",
      }

    if coupon_summary and not is_embedded:
      # Embed details for redirect session discounts
      session_params['discounts'] = [{
        'promotion_code': coupon_summary['promotion_code_id'],
      }]
    elif apply_20_percent_discount and not is_embedded:
      session_params['discounts'] = [{
        'coupon': str(STRIPE_COUPON_20),
      }]
    elif apply_size_guide_coupon and not is_embedded:
      session_params['discounts'] = [{
        'coupon': str(STRIPE_COUPON_SIZE),
      }]

    session = client.v1.checkout.sessions.create(params=session_params)
    return jsonify({ 'url': session.url })
  except Exception as e:
    import traceback
    traceback.print_exc()
    return jsonify({ 'error': str(e) }), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 4000))
    app.run(host="0.0.0.0", port=port)