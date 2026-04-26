import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          backgroundColor: '#F2EDE4',
          display: 'flex',
          position: 'relative',
        }}
      >
        {/* F — vertical stem */}
        <div style={{ position: 'absolute', left: 65, top: 96, width: 58, height: 320, backgroundColor: '#1A1715' }} />
        {/* F — top crossbar */}
        <div style={{ position: 'absolute', left: 65, top: 96, width: 220, height: 55, backgroundColor: '#1A1715' }} />
        {/* F — middle crossbar */}
        <div style={{ position: 'absolute', left: 65, top: 229, width: 178, height: 55, backgroundColor: '#1A1715' }} />
        {/* E — vertical stem */}
        <div style={{ position: 'absolute', left: 289, top: 96, width: 58, height: 320, backgroundColor: '#1A1715' }} />
        {/* E — top crossbar */}
        <div style={{ position: 'absolute', left: 289, top: 96, width: 158, height: 55, backgroundColor: '#1A1715' }} />
        {/* E — middle crossbar */}
        <div style={{ position: 'absolute', left: 289, top: 229, width: 130, height: 55, backgroundColor: '#1A1715' }} />
        {/* E — bottom crossbar */}
        <div style={{ position: 'absolute', left: 289, top: 362, width: 158, height: 54, backgroundColor: '#1A1715' }} />
        {/* Red period */}
        <div
          style={{
            position: 'absolute',
            right: 44,
            bottom: 40,
            width: 88,
            height: 88,
            borderRadius: 44,
            backgroundColor: '#D63B27',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
