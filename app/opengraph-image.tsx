import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'FutreEng — A Boutique Software Studio in New York';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#F2EDE4',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* 6px red rule at top — full bleed */}
        <div style={{ width: '100%', height: 8, backgroundColor: '#D63B27', flexShrink: 0 }} />

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '56px 80px 48px',
            position: 'relative',
          }}
        >
          {/* Kicker — mono caps red */}
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 18,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#D63B27',
              fontWeight: 400,
              marginBottom: 44,
            }}
          >
            COVER — A SOFTWARE STUDIO IN NEW YORK
          </div>

          {/* Main headline */}
          <div
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 86,
              fontWeight: 900,
              lineHeight: 0.96,
              letterSpacing: '-0.04em',
              color: '#1A1715',
              maxWidth: 860,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0 0',
            }}
          >
            {'We build digital products for the people '}
            <span style={{ color: '#D63B27', fontStyle: 'italic' }}>
              {'moving'}
            </span>
            {' New York.'}
          </div>

          {/* Bottom-left — issue line */}
          <div
            style={{
              position: 'absolute',
              bottom: 48,
              left: 80,
              fontFamily: 'monospace',
              fontSize: 15,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1A1715',
              fontWeight: 400,
            }}
          >
            FUTREENG · ISSUE 01 · Q3 2026
          </div>

          {/* Bottom-right — oversized '26 */}
          <div
            style={{
              position: 'absolute',
              bottom: 8,
              right: 80,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 190,
              fontWeight: 900,
              letterSpacing: '-0.05em',
              color: '#1F2D5C',
              lineHeight: 0.8,
              fontStyle: 'italic',
            }}
          >
            {'\'26'}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
