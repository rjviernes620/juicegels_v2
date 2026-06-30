#!/usr/bin/env python3
"""
Juice Gels - Pingram Email Test Script
This script allows you to test sending the customer-facing emails via the Pingram API.
It loads HTML files directly from the backend/email_templates/ directory.

Usage:
   python backend/test_email.py
"""

import os
import asyncio
import html
from datetime import datetime, timezone
from pingram import Pingram

# ==========================================
# CONFIGURATION
# ==========================================
# Your Pingram API key (loaded from your edit)
PINGRAM_API_KEY = "pingram_sk_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJrZXlfZDQxYWU1MmYzNDIxMWVjOTQ3MWEyZjE0NDgxYWQ3NjEiLCJ2ZXJzaW9uIjoxLCJhY2NvdW50SWQiOiJ2cXU0OHNybDgydmhrMWJqc3huZjN0ZXEyMyIsImtleVR5cGUiOiJzZWNyZXQiLCJlbnZpcm9ubWVudElkIjoiNHNocHJ4cm1kbWR5MTkyd2dkOGxxYzNyZHEifQ.TE82oxS-SPu5Fm6JoSu90nQTa8MGFeqCf3kx6QIA2Xg"

# Default configuration for sender/recipient
DEFAULT_SENDER_NAME = "Juice Gels"
DEFAULT_SENDER_EMAIL = "neworder@juicegels.com"
DEFAULT_RECIPIENT_EMAIL = "rjviernes620@gmail.com"
PINGRAM_BASE_URL = "https://api.eu.pingram.io"

# ==========================================
# EMAIL BUILDERS (Decoupled from Stripe)
# ==========================================

def escape_html(value):
  return html.escape(str(value or ''))

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


# ==========================================
# TEMPLATE LOADERS
# ==========================================

def load_template(filename):
  template_path = os.path.join(os.path.dirname(__file__), 'email_templates', filename)
  if not os.path.exists(template_path):
    raise FileNotFoundError(f"Template not found at: {template_path}")
  with open(template_path, 'r', encoding='utf-8') as f:
    return f.read()

# ==========================================
# SENDING LOGIC
# ==========================================

async def send_email_via_pingram(api_key, to_email, subject, html_content, sender_name, sender_email):
  notification_payload = {
    'type': 'email_compose_preview',
    'to': {
      'email': to_email,
    },
    'email': {
      'subject': subject,
      'html': html_content,
      'senderName': sender_name,
      'senderEmail': sender_email,
    },
    'options': {
      'email': {
        'replyToAddresses': ['juicegels@gmail.com'],
      }
    }
  }

  async with Pingram(
    api_key=api_key,
    base_url=PINGRAM_BASE_URL,
  ) as client:
    return await client.send(notification_payload)

# ==========================================
# MAIN INTERACTION CLI
# ==========================================

def get_api_key():
  # Check if env var is set
  env_key = os.environ.get("PINGRAM_API_KEY")
  if env_key:
    return env_key
  
  if PINGRAM_API_KEY and PINGRAM_API_KEY != "YOUR_PINGRAM_API_KEY_HERE":
    return PINGRAM_API_KEY
  
  return None

def main():
  print("=" * 60)
  print("          Juice Gels - Pingram Email Test CLI")
  print("=" * 60)

  api_key = get_api_key()
  if not api_key:
    print("[WARNING] No Pingram API key found.")
    print("Please set the PINGRAM_API_KEY environment variable or hardcode it in this script.")
    print("-" * 60)
    
    # Prompt for input as fallback
    user_key = input("Enter your Pingram API Key (or press Enter to exit): ").strip()
    if not user_key:
      print("Exiting. No API key provided.")
      return
    api_key = user_key
  else:
    # Mask API key for security log display
    masked_key = api_key[:8] + "..." + api_key[-8:] if len(api_key) > 16 else "***"
    print(f"[INFO] Using API Key: {masked_key}")

  while True:
    print("\nSelect email template file to test send:")
    print("1) Test Order Confirmation Email (order_confirmation.html)")
    print("2) Test Custom Order Confirmation Email (custom_order_confirmation.html)")
    print("3) Exit")
    
    choice = input("\nEnter choice (1-3): ").strip()
    if choice == '3':
      print("Goodbye!")
      break
    
    if choice not in ('1', '2'):
      print("[ERROR] Invalid choice. Please choose 1, 2, or 3.")
      continue
    
    # 1.) Always use default configuration parameters for sender
    sender_name = DEFAULT_SENDER_NAME
    sender_email = DEFAULT_SENDER_EMAIL
    
    # 2.) Allow choosing recipient email
    recipient = input(f"Enter recipient email [{DEFAULT_RECIPIENT_EMAIL}]: ").strip()
    if not recipient:
      recipient = DEFAULT_RECIPIENT_EMAIL

    # Allow choosing method of payment displayed
    payment_method_type = ''
    card_brand = ''
    card_last4 = ''
    card_wallet_type = ''
    
    if choice == '1':
      print("\nSelect Payment Method to display in confirmation email:")
      print("1) Visa (ending in 4242)")
      print("2) Mastercard (ending in 9999)")
      print("3) PayPal")
      print("4) Klarna")
      print("5) Revolut Pay")
      print("6) Apple Pay (Visa ending in 8888)")
      print("7) Google Pay (Mastercard ending in 7777)")
      print("8) Generic / None (Paid via Stripe)")
      
      pm_choice = input("Enter choice (1-8) [1]: ").strip() or '1'
      if pm_choice == '1':
        payment_method_type = 'card'
        card_brand = 'visa'
        card_last4 = '4242'
      elif pm_choice == '2':
        payment_method_type = 'card'
        card_brand = 'mastercard'
        card_last4 = '9999'
      elif pm_choice == '3':
        payment_method_type = 'paypal'
      elif pm_choice == '4':
        payment_method_type = 'klarna'
      elif pm_choice == '5':
        payment_method_type = 'revolut_pay'
      elif pm_choice == '6':
        payment_method_type = 'card'
        card_brand = 'visa'
        card_last4 = '8888'
        card_wallet_type = 'apple_pay'
      elif pm_choice == '7':
        payment_method_type = 'card'
        card_brand = 'mastercard'
        card_last4 = '7777'
        card_wallet_type = 'google_pay'

    # Generate html and subject based on choice
    try:
      if choice == '1':
        subject = "Order Confirmed - Juice Gels"
        mock_summary = {
          'first_name': 'Jane',
          'last_name': 'Doe',
          'customer_email': recipient,
          'phone': '+44 7700 900000',
          'instagram': '@jane_nails',
          'contact_preference': 'instagram',
          'notes': 'Please pack carefully!',
          'subtotal': '£45.00',
          'discount': '£9.00',
          'coupon_code': 'SUMMER20',
          'coupon_name': 'Summer Sale',
          'shipping_method': 'Royal Mail Tracked 24',
          'shipping': '£4.00',
          'total': '£40.00',
          'currency': 'GBP',
          'billing_address': '123 Stripe Billing Lane, London, EC1A 1BB, United Kingdom',
          'shipping_address': '123 Pre-order Shipping Street, London, SW1A 1AA, United Kingdom',
          'payment_method_type': payment_method_type,
          'card_brand': card_brand,
          'card_last4': card_last4,
          'card_wallet_type': card_wallet_type,
          'line_items': [
            {
              'description': 'Strawberry Shortcake Press-On Nails - Almond - Medium',
              'quantity': 1,
              'unit_price': '£35.00',
              'line_total': '£35.00'
            },
            {
              'description': 'Nail Sizing Guide',
              'quantity': 2,
              'unit_price': '£5.00',
              'line_total': '£10.00'
            }
          ]
        }
        html_content = build_customer_email_html(mock_summary)
        email_desc = "Order Confirmation (generated dynamically inside test_email.py)"
      else:
        subject = "Custom Order Request Received - Juice Gels"
        html_content = load_template('custom_order_confirmation.html')
        email_desc = "Custom Order Request Confirmation (custom_order_confirmation.html)"
    except Exception as e:
      print(f"\n[ERROR] Failed to load template: {e}")
      continue

    print(f"\nSending {email_desc} directly as-is to {recipient}...")
    
    try:
      # Execute sending
      result = asyncio.run(
        send_email_via_pingram(
          api_key=api_key,
          to_email=recipient,
          subject=subject,
          html_content=html_content,
          sender_name=sender_name,
          sender_email=sender_email
        )
      )
      print("\n" + "=" * 50)
      print(" SUCCESS! Email successfully sent.")
      print(f" Response: {result}")
      print("=" * 50)
    except Exception as e:
      print("\n" + "=" * 50)
      print(" ERROR! Failed to send email.")
      print(f" Reason: {e}")
      print("=" * 50)

if __name__ == "__main__":
  main()
