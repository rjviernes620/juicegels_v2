import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'juicegels_back',

  projectId: '5co5ooqr',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'product',
              title: 'Nail Sets (Website Order)',
              S,
              context,
            }),
            S.divider(),
            S.listItem()
              .title('Trending Designs')
              .id('trendingDesigns')
              .child(
                S.document()
                  .schemaType('trendingDesigns')
                  .documentId('trendingDesigns')
                  .title('Trending Designs')
              ),
            S.divider(),
            S.documentTypeListItem('order')
              .title('Orders'),
          ]),
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})

