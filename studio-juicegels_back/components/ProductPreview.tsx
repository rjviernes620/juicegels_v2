import React from 'react'

export function ProductPreview(props: any) {
  const { title, subtitle, media } = props

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        minWidth: 0,
      }}
    >
      {media && (
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '4px',
            overflow: 'hidden',
            flexShrink: 0,
            background: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {typeof media === 'function' ? media() : media}
        </div>
      )}

      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: '13px',
            lineHeight: '1.2',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title || 'Unnamed Nail Set'}
        </div>

        {subtitle && (
          <div
            style={{
              fontSize: '11px',
              color: '#9ca3af',
              marginTop: '2px',
              fontWeight: 500,
              lineHeight: '1.2',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  )
}
