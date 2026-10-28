import React, { useEffect, useState, useRef } from 'react'
import { useClient, useFormValue } from 'sanity'

export function CollectionProductsInput(props: any) {
  const client = useClient({ apiVersion: '2021-10-21' })
  const rawId = useFormValue(['_id']) as string | undefined
  const collectionId = rawId ? rawId.replace(/^drafts\./, '') : undefined
  const [syncNotice, setSyncNotice] = useState<string | null>(null)
  const prevItemsRef = useRef<any[]>(props.value || [])

  // Auto-sync products referencing this collection when viewing this document
  useEffect(() => {
    if (!collectionId) return
    let isMounted = true

    async function checkAndSync() {
      try {
        const referencingProducts = await client.fetch<Array<{ _id: string; title: string }>>(
          `*[_type == "product" && (collection._ref == $collectionId || collection._ref == "drafts." + $collectionId) && !(_id in path("drafts.**"))]{_id, title}`,
          { collectionId }
        )

        const currentItems = Array.isArray(props.value) ? props.value : []
        const currentRefIds = new Set(currentItems.map((item: any) => item._ref))

        const missing = referencingProducts.filter(p => !currentRefIds.has(p._id))
        if (missing.length > 0 && isMounted) {
          const newEntries = missing.map(p => ({
            _key: p._id.replace(/[^a-zA-Z0-9_-]/g, '_') + '_' + Math.random().toString(36).substring(2, 7),
            _type: 'reference',
            _ref: p._id
          }))

          setSyncNotice(`Synced ${missing.map(m => m.title).join(', ')} into this collection list`)

          // Patch published doc
          await client
            .patch(collectionId)
            .setIfMissing({ products: [] })
            .append('products', newEntries)
            .commit({ autoGenerateArrayKeys: true })

          // If currently editing draft, patch draft too
          if (rawId && rawId.startsWith('drafts.')) {
            await client
              .patch(rawId)
              .setIfMissing({ products: [] })
              .append('products', newEntries)
              .commit({ autoGenerateArrayKeys: true })
          }

          setTimeout(() => {
            if (isMounted) setSyncNotice(null)
          }, 4000)
        }
      } catch (err) {
        console.error('Error auto-syncing collection products:', err)
      }
    }

    checkAndSync()

    return () => {
      isMounted = false
    }
  }, [collectionId, client, rawId, props.value])

  // When user adds or removes products in this collection document, sync product.collection
  const handleChange = (patch: any) => {
    props.onChange(patch)

    if (!collectionId) return

    setTimeout(async () => {
      try {
        const freshDoc = await client.getDocument(rawId || collectionId)
        const currentProducts = Array.isArray(freshDoc?.products) ? freshDoc.products : []
        const currentRefs = new Set(currentProducts.map((p: any) => p._ref).filter(Boolean))
        const prevRefs = new Set(prevItemsRef.current.map((p: any) => p._ref).filter(Boolean))

        // Find newly added products
        for (const ref of currentRefs) {
          if (!prevRefs.has(ref)) {
            client
              .patch(ref)
              .set({
                collection: {
                  _type: 'reference',
                  _ref: collectionId
                }
              })
              .commit()
              .catch(err => console.warn(`Could not set collection reference on ${ref}:`, err))
          }
        }

        // Find removed products
        for (const ref of prevRefs) {
          if (!currentRefs.has(ref)) {
            client
              .patch(ref)
              .unset(['collection'])
              .commit()
              .catch(err => console.warn(`Could not unset collection reference on ${ref}:`, err))
          }
        }

        prevItemsRef.current = currentProducts
      } catch (err) {
        console.error('Error in handleChange sync:', err)
      }
    }, 100)
  }

  return (
    <div>
      {syncNotice && (
        <div style={{
          marginBottom: '10px',
          padding: '8px 12px',
          background: 'rgba(74, 222, 128, 0.15)',
          border: '1px solid #4ade80',
          borderRadius: '6px',
          fontSize: '12px',
          color: '#15803d',
          fontWeight: 600,
        }}>
          ✨ {syncNotice}
        </div>
      )}
      {props.renderDefault({
        ...props,
        onChange: handleChange,
      })}
    </div>
  )
}

