import { ImageResponse } from '@vercel/og';
import { company } from '../../../data/company';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#3E2714',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 60,
            backgroundColor: '#C17F38',
            borderRadius: 8,
            marginBottom: 32,
          }}
        >
          <span style={{ color: 'white', fontSize: 32, fontWeight: 'bold' }}>
            TC
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <h1 style={{ color: 'white', fontSize: 48, fontWeight: 'bold', margin: 0 }}>
            {company.name}
          </h1>
          <p style={{ color: '#C17F38', fontSize: 24, margin: 0 }}>
            Instalación de Suelos en Málaga
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: 40, display: 'flex', gap: 24 }}>
          <span style={{ color: '#9ca3af', fontSize: 18 }}>📞 +34 {company.phoneFormatted}</span>
          <span style={{ color: '#9ca3af', fontSize: 18 }}>✉️ {company.email}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}