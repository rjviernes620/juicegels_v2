import React from 'react'
import { useFormValue } from 'sanity'

const DEFAULT_SHAPES = ['Square', 'Oval', 'Stiletto', 'Coffin', 'Almond']
const DEFAULT_LENGTHS = ['Short', 'Medium', 'Long']

export function VariationsList() {
  const baseId = useFormValue(['baseId']) as number | undefined
  const title = useFormValue(['title']) as string | undefined
  const price = useFormValue(['price']) as number | undefined

  if (!baseId || typeof baseId !== 'number') {
    return (
      <div style={{
        padding: '16px',
        background: '#f4f4f5',
        border: '1px dashed #d4d4d8',
        borderRadius: '6px',
        color: '#71717a',
        fontSize: '14px',
        textAlign: 'center'
      }}>
        Please enter a valid <strong>Base ID Number</strong> above to view the generated variations.
      </div>
    )
  }

  const isSingle = title?.toLowerCase() === "nail sizing guide" || baseId === 286

  const variations: Array<{ id: string; shape: string; length: string }> = []
  if (isSingle) {
    variations.push({
      id: `JUICEGELS-${baseId.toString().padStart(4, '0')}`,
      shape: 'Square',
      length: 'Short',
    })
  } else {
    DEFAULT_SHAPES.forEach((shape, sIdx) => {
      DEFAULT_LENGTHS.forEach((length, lIdx) => {
        const offset = sIdx * 3 + lIdx
        const idNum = baseId + offset
        variations.push({
          id: `JUICEGELS-${idNum.toString().padStart(4, '0')}`,
          shape,
          length,
        })
      })
    })
  }

  return (
    <div style={{
      border: '1px solid #e4e4e7',
      borderRadius: '6px',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        padding: '12px 16px',
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        fontWeight: 600,
        fontSize: '14px',
        color: '#1e293b',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span>Generated Variations ({variations.length})</span>
        <span style={{
          fontSize: '11px',
          background: '#e0f2fe',
          color: '#0369a1',
          padding: '2px 8px',
          borderRadius: '12px',
          fontWeight: 500
        }}>
          Dynamic
        </span>
      </div>
      <div style={{
        maxHeight: '300px',
        overflowY: 'auto',
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '13px',
          textAlign: 'left',
        }}>
          <thead>
            <tr style={{
              background: '#f1f5f9',
              borderBottom: '1px solid #e2e8f0',
              color: '#475569',
              position: 'sticky',
              top: 0
            }}>
              <th style={{ padding: '8px 16px', fontWeight: 500 }}>ID</th>
              <th style={{ padding: '8px 16px', fontWeight: 500 }}>Shape</th>
              <th style={{ padding: '8px 16px', fontWeight: 500 }}>Length</th>
              <th style={{ padding: '8px 16px', fontWeight: 500, textAlign: 'right' }}>Price</th>
              <th style={{ padding: '8px 16px', fontWeight: 500 }}>Link</th>
            </tr>
          </thead>
          <tbody>
            {variations.map((v, idx) => (
              <tr key={v.id} style={{
                borderBottom: idx < variations.length - 1 ? '1px solid #f1f5f9' : 'none',
                color: '#334155',
                background: idx % 2 === 0 ? '#ffffff' : '#fafafa'
              }}>
                <td style={{ padding: '8px 16px', fontFamily: 'monospace', fontWeight: 600, color: '#0f172a' }}>{v.id}</td>
                <td style={{ padding: '8px 16px' }}>{v.shape}</td>
                <td style={{ padding: '8px 16px' }}>{v.length}</td>
                <td style={{ padding: '8px 16px', textAlign: 'right', fontWeight: 500 }}>
                  {typeof price === 'number' ? `£${price.toFixed(2)}` : '—'}
                </td>
                <td style={{ padding: '8px 16px' }}>
                  <a
                    href={`https://juicegels.com/product/${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#ae3c6f',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline' }}
                    onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none' }}
                  >
                    View Set ↗
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
