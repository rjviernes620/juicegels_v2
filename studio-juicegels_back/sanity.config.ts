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
              title: 'Nail Sets (Orderable)',
              S,
              context,
            }),
          ]),
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
