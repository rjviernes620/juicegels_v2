import React, { useEffect, useState } from 'react'
import { useClient } from 'sanity'

export interface OrderItemValue {
  _key?: string
  description?: string
  quantity?: number
  unitPrice?: string
  lineTotal?: string
  imageUrl?: string
  image?: {
    asset?: {
      url?: string
      _ref?: string
    }
  }
}

export function OrderItemsList(props: any) {
  const client = useClient({ apiVersion: '2021-10-21' })
  const [catalogMap, setCatalogMap] = useState<Record<string, string>>({})
  const [enlargedItem, setEnlargedItem] = useState<{
    description: string
    imageUrl: string
    quantity?: number
    unitPrice?: string
    lineTotal?: string
  } | null>(null)

  const items: OrderItemValue[] = Array.isArray(props.value) ? props.value : []

  useEffect(() => {
    let isMounted = true
    client
      .fetch('*[_type == "product"]{ title, "imageUrl": image.asset->url }')
      .then((products: Array<{ title?: string; imageUrl?: string }>) => {
        if (!isMounted) return
        const map: Record<string, string> = {}
        products.forEach((p) => {
          if (p.title && p.imageUrl) {
            map[p.title.trim().toLowerCase()] = p.imageUrl
          }
        })
        setCatalogMap(map)
      })
      .catch((err) => {
        console.error('Error fetching catalog products for order item images:', err)
      })
    return () => {
      isMounted = false
    }
  }, [client])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setEnlargedItem(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function getBestImageUrl(item: OrderItemValue): string | null {
    if (item.imageUrl) return item.imageUrl
    if (item.image?.asset?.url) return item.image.asset.url

    if (item.description) {
      const descLower = item.description.toLowerCase()
      for (const [titleLower, url] of Object.entries(catalogMap)) {
        if (titleLower && descLower.includes(titleLower)) {
          return url
        }
      }
    }

    return null
  }

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {items.length === 0 ? (
        <div
          style={{
            padding: '20px',
            background: '#f4f4f5',
            border: '1px dashed #d4d4d8',
            borderRadius: '8px',
            color: '#71717a',
            fontSize: '13px',
            textAlign: 'center',
          }}
        >
          No items found in this order.
        </div>
      ) : (
        <div
          style={{
            border: '1px solid #e4e4e7',
            borderRadius: '10px',
            padding: '16px',
            background: '#fafafa',
          }}
        >
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#3f3f46',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>🛍️ Order Items ({items.length})</span>
            <span style={{ fontSize: '11px', color: '#71717a', fontWeight: 400 }}>
              Click any item to view enlarged image
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '12px',
            }}
          >
            {items.map((item, idx) => {
              const imgUrl = getBestImageUrl(item)
              return (
                <div
                  key={item._key || idx}
                  onClick={() =>
                    imgUrl &&
                    setEnlargedItem({
                      description: item.description || 'Order Item',
                      imageUrl: imgUrl,
                      quantity: item.quantity,
                      unitPrice: item.unitPrice,
                      lineTotal: item.lineTotal,
                    })
                  }
                  style={{
                    border: '1px solid #e4e4e7',
                    borderRadius: '10px',
                    padding: '10px 12px',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: imgUrl ? 'pointer' : 'default',
                    transition: 'all 0.15s ease-in-out',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    if (imgUrl) {
                      e.currentTarget.style.borderColor = '#ae3c6f'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(174, 60, 111, 0.15)'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (imgUrl) {
                      e.currentTarget.style.borderColor = '#e4e4e7'
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  {/* Image Thumbnail */}
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      background: '#f4f4f5',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    {imgUrl ? (
                      <>
                        <img
                          src={imgUrl}
                          alt={item.description || 'Item thumbnail'}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 2,
                            right: 2,
                            background: 'rgba(0, 0, 0, 0.65)',
                            color: '#ffffff',
                            fontSize: '9px',
                            padding: '1px 3px',
                            borderRadius: '3px',
                            fontWeight: 600,
                            lineHeight: 1,
                          }}
                        >
                          🔍
                        </div>
                      </>
                    ) : (
                      <span style={{ fontSize: '20px' }}>📦</span>
                    )}
                  </div>

                  {/* Item Specs */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: '13px',
                        color: '#18181b',
                        marginBottom: '3px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                      title={item.description}
                    >
                      {item.description || 'Unnamed Item'}
                    </div>

                    <div
                      style={{
                        fontSize: '12px',
                        color: '#71717a',
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span
                        style={{
                          background: '#f4f4f5',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          fontWeight: 500,
                          fontSize: '11px',
                        }}
                      >
                        Qty: {item.quantity || 1}
                      </span>
                      {item.lineTotal && (
                        <span style={{ fontWeight: 700, color: '#ae3c6f', fontSize: '12px' }}>
                          {item.lineTotal}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Enlarged Image Lightbox Modal */}
      {enlargedItem && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setEnlargedItem(null)}
        >
          <div
            style={{
              position: 'relative',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              maxWidth: '560px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                padding: '16px 20px',
                borderBottom: '1px solid #e4e4e7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fafafa',
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#18181b',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {enlargedItem.description}
                </h3>
                <div style={{ fontSize: '12px', color: '#71717a', marginTop: '2px' }}>
                  Enlarged Item View
                </div>
              </div>
              <button
                onClick={() => setEnlargedItem(null)}
                style={{
                  background: '#f4f4f5',
                  border: '1px solid #e4e4e7',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#71717a',
                  fontWeight: 'bold',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e4e4e7'
                  e.currentTarget.style.color = '#18181b'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f4f4f5'
                  e.currentTarget.style.color = '#71717a'
                }}
              >
                ✕
              </button>
            </div>

            {/* Image Preview Container */}
            <div
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f8fafc',
                maxHeight: '60vh',
                overflow: 'hidden',
              }}
            >
              <img
                src={enlargedItem.imageUrl}
                alt={enlargedItem.description}
                style={{
                  maxWidth: '100%',
                  maxHeight: '52vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              />
            </div>

            {/* Details Footer */}
            <div
              style={{
                padding: '16px 20px',
                borderTop: '1px solid #e4e4e7',
                background: '#ffffff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '14px',
                color: '#3f3f46',
              }}
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span>
                  <strong>Quantity:</strong> {enlargedItem.quantity || 1}
                </span>
                {enlargedItem.unitPrice && (
                  <span>
                    <strong>Unit Price:</strong> {enlargedItem.unitPrice}
                  </span>
                )}
              </div>

              {enlargedItem.lineTotal && (
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#ae3c6f' }}>
                  {enlargedItem.lineTotal}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
