import React from 'react';

interface PortableTextProps {
  value: any[];
}

export function PortableText({ value }: PortableTextProps) {
  if (!Array.isArray(value)) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {value.map((block, index) => {
        if (block._type !== 'block') return null;

        const { children, markDefs, style, listItem } = block;

        // Custom style mapping
        let styleObj: React.CSSProperties = {
          margin: 0,
          lineHeight: '1.7',
          color: '#4f444a',
          whiteSpace: 'pre-line', // Preserves inline line breaks/new lines from Shift+Enter
        };

        let Tag: any = 'p';
        if (style === 'h1') {
          Tag = 'h1';
          styleObj = { ...styleObj, fontSize: '20px', fontWeight: 'bold', color: '#ae3c6f', marginTop: '12px', marginBottom: '4px' };
        } else if (style === 'h2') {
          Tag = 'h2';
          styleObj = { ...styleObj, fontSize: '18px', fontWeight: 'bold', color: '#ae3c6f', marginTop: '10px', marginBottom: '4px' };
        } else if (style === 'h3') {
          Tag = 'h3';
          styleObj = { ...styleObj, fontSize: '16px', fontWeight: 'bold', color: '#ae3c6f', marginTop: '8px', marginBottom: '4px' };
        } else if (style === 'blockquote') {
          Tag = 'blockquote';
          styleObj = { ...styleObj, borderLeft: '3px solid #e988b5', paddingLeft: '10px', fontStyle: 'italic', margin: '4px 0' };
        }

        const renderChildren = () => {
          if (!Array.isArray(children)) return null;

          return children.map((child: any, cIdx: number) => {
            if (child._type !== 'span') return null;

            let textElement: React.ReactNode = child.text;

            // Apply decorators (marks)
            if (Array.isArray(child.marks)) {
              child.marks.forEach((mark: string) => {
                if (mark === 'strong') {
                  textElement = <strong key={cIdx}>{textElement}</strong>;
                } else if (mark === 'em') {
                  textElement = <em key={cIdx}>{textElement}</em>;
                } else if (mark === 'underline') {
                  textElement = <u key={cIdx}>{textElement}</u>;
                } else if (mark === 'strike-through') {
                  textElement = <s key={cIdx}>{textElement}</s>;
                } else if (mark === 'small') {
                  textElement = <span key={cIdx} style={{ fontSize: '11px' }}>{textElement}</span>;
                } else if (mark === 'large') {
                  textElement = <span key={cIdx} style={{ fontSize: '16px' }}>{textElement}</span>;
                } else if (mark === 'xlarge') {
                  textElement = <span key={cIdx} style={{ fontSize: '20px' }}>{textElement}</span>;
                } else {
                  // Check if mark is an annotation (like a link)
                  const linkDef = markDefs?.find((def: any) => def._key === mark);
                  if (linkDef && linkDef._type === 'link') {
                    textElement = (
                      <a
                        key={cIdx}
                        href={linkDef.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#ae3c6f', textDecoration: 'underline' }}
                      >
                        {textElement}
                      </a>
                    );
                  }
                }
              });
            }

            return <React.Fragment key={cIdx}>{textElement}</React.Fragment>;
          });
        };

        if (listItem === 'bullet') {
          return (
            <ul key={index} style={{ margin: '0 0 0 20px', padding: 0, listStyleType: 'disc' }}>
              <li style={styleObj}>{renderChildren()}</li>
            </ul>
          );
        }

        if (listItem === 'number') {
          return (
            <ol key={index} style={{ margin: '0 0 0 20px', padding: 0, listStyleType: 'decimal' }}>
              <li style={styleObj}>{renderChildren()}</li>
            </ol>
          );
        }

        return (
          <Tag key={index} style={styleObj}>
            {renderChildren()}
          </Tag>
        );
      })}
    </div>
  );
}
