import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'collection',
  type: 'document',
  title: 'Collection',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Collection Title',
      description: 'The name of this collection (e.g. "Velvet Dream Collection", "Stardust Collection")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emoji',
      type: 'string',
      title: 'Emoji Badge',
      description: 'Single emoji icon for the collection (e.g. ✨, 🌸, 🎀, 🌿, 🎃, 💜)',
      initialValue: '✨',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
      description: 'Short phrase displayed on product pages (e.g. "Take a look at the other nails in this collection ✨")',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Optional description of the collection theme and inspiration',
      rows: 3,
    }),
    defineField({
      name: 'products',
      type: 'array',
      title: 'Nail Sets in this Collection',
      description:
        'Select the nail sets that belong to this collection. Click "Add item" to search and pick nail sets directly within this folder, or drag to reorder.',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      emoji: 'emoji',
      products: 'products',
    },
    prepare({title, emoji, products}) {
      const count = Array.isArray(products) ? products.length : 0
      return {
        title: title || 'Untitled Collection',
        subtitle: `${count} nail set${count === 1 ? '' : 's'}`,
        media: () => emoji || '📁',
      }
    },
  },
})
