export default {
  name: 'order',
  type: 'document',
  title: 'Orders',
  groups: [
    {
      name: 'overview',
      title: '📋 Overview',
      default: true,
    },
    {
      name: 'items',
      title: '🛍️ Items',
    },
    {
      name: 'shipping',
      title: '📦 Shipping & Tracking',
    },
    {
      name: 'financials',
      title: '💰 Financials',
    },
  ],
  fields: [
    {
      name: 'orderId',
      type: 'string',
      title: 'Order ID / Stripe ID',
      readOnly: true,
      group: 'overview',
    },
    {
      name: 'testOrder',
      type: 'boolean',
      title: 'Test Order',
      initialValue: false,
      readOnly: true,
      group: 'overview',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Order Status',
      options: {
        list: [
          { title: '⏳ Pending Sizes', value: 'pending_sizes' },
          { title: '✅ Sizes Confirmed', value: 'sizes_confirmed' },
          { title: '⚒️ In Production', value: 'in_production' },
          { title: '📸 Photo Sent for Confirmation', value: 'photo_sent' },
          { title: '📦 Dispatched', value: 'dispatched' },
          { title: '🚚 Delivered', value: 'delivered' },
          { title: '❌ Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'pending_sizes',
      validation: (Rule: any) => Rule.required(),
      group: 'overview',
    },
    {
      name: 'createdAt',
      type: 'string',
      title: 'Ordered At',
      readOnly: true,
      group: 'overview',
    },
    {
      name: 'customer',
      type: 'object',
      title: 'Customer Details',
      group: 'overview',
      fields: [
        { name: 'firstName', type: 'string', title: 'First Name' },
        { name: 'lastName', type: 'string', title: 'Last Name' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'instagram', type: 'string', title: 'Instagram Handle' },
        { name: 'contactPreference', type: 'string', title: 'Contact Preference' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      title: 'Ordered Items',
      group: 'items',
      of: [
        {
          type: 'object',
          name: 'orderItem',
          fields: [
            { name: 'description', type: 'string', title: 'Description' },
            { name: 'quantity', type: 'number', title: 'Quantity' },
            { name: 'unitPrice', type: 'string', title: 'Unit Price' },
            { name: 'lineTotal', type: 'string', title: 'Line Total' },
          ],
        },
      ],
    },
    {
      name: 'financials',
      type: 'object',
      title: 'Financial Summary',
      group: 'financials',
      fields: [
        { name: 'subtotal', type: 'string', title: 'Subtotal' },
        { name: 'discount', type: 'string', title: 'Discount' },
        { name: 'shipping', type: 'string', title: 'Shipping' },
        { name: 'total', type: 'string', title: 'Total' },
        { name: 'currency', type: 'string', title: 'Currency' },
        { name: 'paymentStatus', type: 'string', title: 'Payment Status' },
        { name: 'paymentMethodType', type: 'string', title: 'Payment Method' },
        { name: 'cardBrand', type: 'string', title: 'Card Brand' },
        { name: 'cardLast4', type: 'string', title: 'Card Last 4' },
        { name: 'cardWalletType', type: 'string', title: 'Wallet Type' },
      ],
    },
    {
      name: 'shipping',
      type: 'object',
      title: 'Shipping Address & Method',
      group: 'shipping',
      fields: [
        { name: 'shippingMethod', type: 'string', title: 'Shipping Method' },
        { name: 'shippingAddress', type: 'text', title: 'Shipping Address' },
        { name: 'billingAddress', type: 'text', title: 'Billing Address' },
      ],
    },
    {
      name: 'tracking',
      type: 'object',
      title: 'Shipping Tracking Details',
      group: 'shipping',
      fields: [
        {
          name: 'carrier',
          type: 'string',
          title: 'Carrier',
          options: {
            list: [
              { title: 'Royal Mail', value: 'Royal Mail' },
              { title: 'Evri', value: 'Evri' },
              { title: 'Yodel', value: 'Yodel' },
              { title: 'Other', value: 'Other' },
            ],
          },
        },
        { name: 'trackingNumber', type: 'string', title: 'Tracking Number' },
        { name: 'dispatchedAt', type: 'datetime', title: 'Dispatched At' },
      ],
    },
    {
      name: 'customerNotes',
      type: 'text',
      title: 'Customer Order Notes',
      readOnly: true,
      group: 'overview',
    },
    {
      name: 'internalNotes',
      type: 'text',
      title: 'Internal Notes (Only visible to you)',
      group: 'overview',
    },
  ],
  preview: {
    select: {
      firstName: 'customer.firstName',
      lastName: 'customer.lastName',
      instagram: 'customer.instagram',
      orderId: 'orderId',
      status: 'status',
      createdAt: 'createdAt',
      testOrder: 'testOrder',
    },
    prepare(selection: any) {
      const { firstName, lastName, instagram, orderId, status, createdAt, testOrder } = selection;
      const fullName = [firstName, lastName].filter(Boolean).join(' ');
      const customerInfo = instagram ? `${fullName} (@${instagram.replace(/^@/, '')})` : fullName;
      
      const statusLabels: Record<string, string> = {
        pending_sizes: '⏳ Pending Sizes',
        sizes_confirmed: '✅ Sizes Confirmed',
        in_production: '⚒️ In Production',
        photo_sent: '📸 Photo Sent',
        dispatched: '📦 Dispatched',
        delivered: '🚚 Delivered',
        cancelled: '❌ Cancelled',
      };
      
      const statusLabel = statusLabels[status] || status || 'Pending';
      const isTest = testOrder === true;
      const shortId = orderId ? (orderId.startsWith('cs_') ? orderId.substring(0, 10) + '...' : orderId) : 'No ID';

      const subtitleParts = [];
      if (isTest) {
        subtitleParts.push('🧪 TEST');
      }
      subtitleParts.push(shortId);
      subtitleParts.push(statusLabel);
      subtitleParts.push(createdAt || '');

      return {
        title: customerInfo || 'Anonymous Customer',
        subtitle: subtitleParts.filter(Boolean).join(' | '),
      };
    },
  },
}
