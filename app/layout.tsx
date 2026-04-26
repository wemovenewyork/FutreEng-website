import type { Metadata } from 'next';
import { fraunces, archivo, plexMono } from './fonts';
import { Ticker } from '@/components/Ticker';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://futreeng.com'),
  title: {
    default: 'FutreEng — A Software Studio in New York',
    template: '%s — FutreEng',
  },
  description:
    'FutreEng is a boutique software studio building web apps, PWAs, and bespoke software for community organizations, labor groups, and operators in NYC and NJ.',
  openGraph: {
    siteName: 'FutreEng',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body>
        <Ticker />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
