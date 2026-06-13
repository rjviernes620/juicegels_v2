# This example sets up an endpoint using the Flask framework.
# Watch this video to get started: https://youtu.be/7Ul1vfmsDck.

import os
import stripe
from urllib.parse import quote

from flask import Flask, redirect, request, jsonify

app = Flask(__name__)

# Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
# Find your keys at https://dashboard.stripe.com/apikeys.
client = stripe.StripeClient('sk_test_51TgWqGK9S4gHGvxwFNa7SNCtpDCF22j3ViHQ9cQXgOSaNICLk4tRK9HjOFmLxv0FhHHg08X0LUtckmEK1aybXgt700mi1zYqlx')


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

@app.after_request
def add_cors_headers(response):
  response.headers["Access-Control-Allow-Origin"] = "*"
  response.headers["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "Content-Type"
  return response

@app.route('/create-checkout-session', methods=['POST', 'OPTIONS'])
def create_checkout_session():
  if request.method == 'OPTIONS':
    return jsonify({}), 204

  payload = request.get_json(force=True)
  items = payload.get('items', [])
  form = payload.get('form', {})
  origin = request.headers.get('Origin') or 'http://localhost:4173'
  items_param = build_checkout_items_param(items)

  line_items = []
  for item in items:
    product = item.get('product', {})
    shape = item.get('shape', '')
    quantity = int(item.get('quantity', 1))
    name = product.get('name', 'Product')
    length = item.get('length', '')
    description = product.get('description', '')
    price = float(product.get('price', 0))
    image_url = product.get('image', '')

    display_name = f"{name} - {shape} - {length}".strip(" -") 
    if image_url.startswith('/'):
      image_url = f"{origin}{image_url}"

    product_data = {
        "name": display_name,
        "description": description,
        "metadata": {
            "productid": product.get("id", ""),
            "shape": shape,
            "length": length,
        },
    }

    if image_url:
      product_data['images'] = [image_url]

    line_items.append({
      'price_data': {
        'currency': 'gbp',
        'product_data': product_data,
        'unit_amount': int(price * 100),
      },
      'quantity': quantity,
    })

  try:
    session = client.v1.checkout.sessions.create(
      params={
        'line_items': line_items,
        'customer_email': form.get('email', ''),
        'billing_address_collection': 'required',
        'phone_number_collection': {'enabled': False},
        'metadata': {
          'first_name': form.get('firstName', ''),
          'last_name': form.get('lastName', ''),
          'phone': form.get('phone', ''),
          'nail_sizes': form.get('nailSizes', ''),
          'instagram': form.get('instagram', ''),
          'notes': form.get('notes', ''),
        },
        'mode': 'payment',
        'success_url': f"{origin}/confirmation?checkout=success&session_id={{CHECKOUT_SESSION_ID}}&items={items_param}",
        'cancel_url': f"{origin}/basket",
      },
    )
    return jsonify({ 'url': session.url })
  except Exception as e:
    import traceback
    traceback.print_exc()
    return jsonify({ 'error': 'internal server error' }), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 4000))
    app.run(host="0.0.0.0", port=port)