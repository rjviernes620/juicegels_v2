import { VariationsList } from '../components/VariationsList'

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
      description: 'The starting number for the product ID (e.g. 1742). The system will automatically generate 15 variations (5 shapes x 3 lengths) using IDs from Base ID up to Base ID + 14.',
      validation: (Rule: any) => Rule.required().integer().min(1),
      initialValue: async (props: any, context: any) => {
        const { getClient } = context
        const client = getClient({ apiVersion: '2021-10-21' })
        const query = '*[_type == "product" && defined(baseId)] | order(baseId desc)[0]{baseId, title}'
        try {
          const lastProduct = await client.fetch(query)
          if (!lastProduct || !lastProduct.baseId) {
            return 1
          }
          const { baseId, title } = lastProduct
          const isSingle = title?.toLowerCase() === 'nail sizing guide' || baseId === 286
          const highestIdOfLast = isSingle ? baseId : (baseId + 14)
          return highestIdOfLast + 1
        } catch (err) {
          console.error('Failed to calculate initial base ID:', err)
          return undefined
        }
      },
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
      initialValue: 'All Nail Sets Include: 1x mini nail file, 1x cuticle pusher, 1x mini buffer block, 1x Nail Glue',
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
      name: 'image2',
      type: 'image',
      title: 'Image 2',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image3',
      type: 'image',
      title: 'Image 3',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image4',
      type: 'image',
      title: 'Image 4',
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
    {
      name: 'variationsPreview',
      type: 'string',
      title: 'Generated Variations Preview',
      components: {
        input: VariationsList,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      media: 'image',
      baseId: 'baseId',
    },
    prepare(selection: any) {
      const {title, price, media, baseId} = selection
      let idRange = ''
      if (typeof baseId === 'number') {
        const isSingle = title?.toLowerCase() === 'nail sizing guide' || baseId === 286
        const startId = `JUICEGELS-${baseId.toString().padStart(4, '0')}`
        if (isSingle) {
          idRange = startId
        } else {
          const endId = `JUICEGELS-${(baseId + 14).toString().padStart(4, '0')}`
          idRange = `${startId} – ${endId}`
        }
      }
      return {
        title: title,
        subtitle: typeof price === 'number' ? `£${price.toFixed(2)}` : '',
        description: idRange,
        media: media,
      }
    },
  },
}
