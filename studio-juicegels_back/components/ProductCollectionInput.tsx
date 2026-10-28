import React, { useRef } from 'react'
import { useClient, useFormValue } from 'sanity'

export function ProductCollectionInput(props: any) {
  const client = useClient({ apiVersion: '2021-10-21' })
  const rawProductId = useFormValue(['_id']) as string | undefined
  const productId = rawProductId ? rawProductId.replace(/^drafts\./, '') : undefined
  const prevRef = useRef<string | undefined>(props.value?._ref)

  const handleChange = (patch: any) => {
    props.onChange(patch)

    if (!productId) return

    setTimeout(async () => {
      try {
        const freshDoc = await client.getDocument(rawProductId || productId)
        const newCollectionRef = freshDoc?.collection?._ref
        const oldCollectionRef = prevRef.current
        prevRef.current = newCollectionRef

        // If newly assigned or changed to a collection
        if (newCollectionRef && newCollectionRef !== oldCollectionRef) {
          const key = productId.replace(/[^a-zA-Z0-9_-]/g, '_') + '_' + Math.random().toString(36).substring(2, 7)
          await client
            .patch(newCollectionRef)
            .setIfMissing({ products: [] })
            .append('products', [{ _key: key, _type: 'reference', _ref: productId }])
            .commit({ autoGenerateArrayKeys: true })
            .catch(err => console.warn('Could not auto-add product to collection.products:', err))
        }

        // If unassigned from an old collection
        if (oldCollectionRef && oldCollectionRef !== newCollectionRef) {
          await client
            .patch(oldCollectionRef)
            .unset([`products[_ref == "${productId}"]`])
            .commit()
            .catch(err => console.warn('Could not auto-remove product from old collection.products:', err))
        }
      } catch (err) {
        console.error('Error syncing collection reference to collection document:', err)
      }
    }, 100)
  }

  return props.renderDefault({
    ...props,
    onChange: handleChange,
  })
}

