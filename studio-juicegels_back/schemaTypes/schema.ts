import { VariationsList } from '../components/VariationsList'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

export default {
  name: 'product',
  type: 'document',
  title: 'Nail Set',
  orderings: [
    {
      title: 'Order Rank (Website Order)',
      name: 'orderRankDesc',
      by: [
        { field: 'orderRank', direction: 'desc' }
      ]
    },
    {
      title: 'Order Rank (Drag & Drop Order)',
      name: 'orderRankAsc',
      by: [
        { field: 'orderRank', direction: 'asc' }
      ]
    }
  ],
  fields: [
    orderRankField({ type: 'product' }),
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'productId',
      type: 'number',
      title: 'Product ID',
      description: 'The starting number for the product ID (e.g. 1742). The system will automatically generate 15 variations (5 shapes x 3 lengths) using IDs from Product ID up to Product ID + 14.',
      validation: (Rule: any) => Rule.required().integer().min(1),
      initialValue: async (props: any, context: any) => {
        const { getClient } = context
        const client = getClient({ apiVersion: '2021-10-21' })
        const query = '*[_type == "product" && defined(productId)] | order(productId desc)[0]{productId, title}'
        try {
          const lastProduct = await client.fetch(query)
          if (!lastProduct || !lastProduct.productId) {
            return 1
          }
          const { productId, title } = lastProduct
          const isSingle = title?.toLowerCase() === 'nail sizing guide' || productId === 286
          const highestIdOfLast = isSingle ? productId : (productId + 14)
          return highestIdOfLast + 1
        } catch (err) {
          console.error('Failed to calculate initial product ID:', err)
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
      name: 'collection',
      type: 'string',
      title: 'Collection',
      description: 'The name of the collection this set belongs to (leave blank if none)',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              {title: 'Small Font', value: 'small'},
              {title: 'Large Font', value: 'large'},
              {title: 'Extra Large', value: 'xlarge'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule: any) => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
                  },
                ],
              },
            ],
          },
        },
      ],
      initialValue: [
        {
          _key: 'initial-block-1',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 'initial-span-1',
              _type: 'span',
              text: 'All Nail Sets Include: 1x mini nail file, 1x cuticle pusher, 1x mini buffer block, 1x Nail Glue',
            },
          ],
        },
      ],
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
      name: 'video',
      type: 'file',
      title: 'Process Video',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'tiktokUrl',
      type: 'url',
      title: 'TikTok URL',
      description: 'The link to the video on TikTok',
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
      productId: 'productId',
    },
    prepare(selection: any) {
      const {title, price, media, productId} = selection
      let idRange = ''
      if (typeof productId === 'number') {
        const isSingle = title?.toLowerCase() === 'nail sizing guide' || productId === 286
        const startId = `JUICEGELS-${productId.toString().padStart(4, '0')}`
        if (isSingle) {
          idRange = startId
        } else {
          const endId = `JUICEGELS-${(productId + 14).toString().padStart(4, '0')}`
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
