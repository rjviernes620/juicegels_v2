export default {
  name: 'product',
  type: 'document',
  title: 'Nail Set',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'baseId',
      type: 'number',
      title: 'Base ID Number',
      description: 'The starting number for the product ID (e.g. 1742 for Bluebell Bloom).',
      validation: (Rule: any) => Rule.required().integer().min(1),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price (£)',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
}
