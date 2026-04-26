import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          backgroundColor: '#F2EDE4',
          display: 'flex',
          position: 'relative',
        }}
      >
        {/* F — vertical stem */}
        <div style={{ position: 'absolute', left: 23, top: 34, width: 20, height: 112, backgroundColor: '#1A1715' }} />
        {/* F — top crossbar */}
        <div style={{ position: 'absolute', left: 23, top: 34, width: 77, height: 19, backgroundColor: '#1A1715' }} />
        {/* F — middle crossbar */}
        <div style={{ position: 'absolute', left: 23, top: 80, width: 62, height: 19, backgroundColor: '#1A1715' }} />
        {/* E — vertical stem */}
        <div style={{ position: 'absolute', left: 101, top: 34, width: 20, height: 112, backgroundColor: '#1A1715' }} />
        {/* E — top crossbar */}
        <div style={{ position: 'absolute', left: 101, top: 34, width: 55, height: 19, backgroundColor: '#1A1715' }} />
        {/* E — middle crossbar */}
        <div style={{ position: 'absolute', left: 101, top: 80, width: 45, height: 19, backgroundColor: '#1A1715' }} />
        {/* E — bottom crossbar */}
        <div style={{ position: 'absolute', left: 101, top: 127, width: 55, height: 19, backgroundColor: '#1A1715' }} />
        {/* Red period */}
        <div
          style={{
            position: 'absolute',
            right: 15,
            bottom: 14,
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: '#D63B27',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
