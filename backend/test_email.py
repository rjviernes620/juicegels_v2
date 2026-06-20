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
from pingram import Pingram

# ==========================================
# CONFIGURATION
# ==========================================
# Your Pingram API key (loaded from your edit)
PINGRAM_API_KEY = "pingram_sk_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJrZXlfZDQxYWU1MmYzNDIxMWVjOTQ3MWEyZjE0NDgxYWQ3NjEiLCJ2ZXJzaW9uIjoxLCJhY2NvdW50SWQiOiJ2cXU0OHNybDgydmhrMWJqc3huZjN0ZXEyMyIsImtleVR5cGUiOiJzZWNyZXQiLCJlbnZpcm9ubWVudElkIjoiNHNocHJ4cm1kbWR5MTkyd2dkOGxxYzNyZHEifQ.TE82oxS-SPu5Fm6JoSu90nQTa8MGFeqCf3kx6QIA2Xg"

# Default configuration for sender/recipient
DEFAULT_SENDER_NAME = "Juice Gels"
DEFAULT_SENDER_EMAIL = "neworder@juicegels.com"
DEFAULT_RECIPIENT_EMAIL = "AViernes101@gmail.com"
PINGRAM_BASE_URL = "https://api.eu.pingram.io"

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
    
    # Prompt for recipient
    recipient = input(f"Enter recipient email [{DEFAULT_RECIPIENT_EMAIL}]: ").strip()
    if not recipient:
      recipient = DEFAULT_RECIPIENT_EMAIL
      
    sender_name = input(f"Enter sender name [{DEFAULT_SENDER_NAME}]: ").strip()
    if not sender_name:
      sender_name = DEFAULT_SENDER_NAME
      
    sender_email = input(f"Enter sender email [{DEFAULT_SENDER_EMAIL}]: ").strip()
    if not sender_email:
      sender_email = DEFAULT_SENDER_EMAIL

    # Generate html and subject based on choice
    try:
      if choice == '1':
        subject = "Order Confirmed - Juice Gels"
        html_content = load_template('order_confirmation.html')
        email_desc = "Order Confirmation (order_confirmation.html)"
      else:
        subject = "Custom Order Request Received - Juice Gels"
        html_content = load_template('custom_order_confirmation.html')
        email_desc = "Custom Order Request Confirmation (custom_order_confirmation.html)"
    except Exception as e:
      print(f"\n[ERROR] Failed to load template file: {e}")
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
