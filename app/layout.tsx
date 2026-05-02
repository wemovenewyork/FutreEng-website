import type { Metadata } from 'next';
import { fraunces, archivo, plexMono } from './fonts';
import { Ticker } from '@/components/Ticker';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import './globals.css';

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FutreEng',
  alternateName: 'FutreEng Studio',
  url: 'https://futreeng.com',
  logo: 'https://futreeng.com/opengraph-image',
  email: 'hello@futreeng.com',
  founder: [
    {
      '@type': 'Person',
      name: 'Haron Wilson',
      jobTitle: 'Co-founder, CEO',
      email: 'HaronWilson@futreeng.com',
    },
    {
      '@type': 'Person',
      name: 'Joseph Panetta',
      jobTitle: 'Co-founder, CTO',
      email: 'JosephPanetta@futreeng.com',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  areaServed: ['New York', 'New Jersey', 'Connecticut'],
  description: 'A boutique software studio in New York.',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://futreeng.com'),
  title: {
    default: 'FutreEng — A Boutique Software Studio in New York',
    template: '%s — FutreEng',
  },
  description:
    'Web apps, PWAs, and bespoke software for community organizations, labor groups, and operators building from inside the industries they know.',
  openGraph: {
    siteName: 'FutreEng',
    type: 'website',
    locale: 'en_US',
    title: 'FutreEng — A Boutique Software Studio in New York',
    description:
      'Web apps, PWAs, and bespoke software for community organizations, labor groups, and operators building from inside the industries they know.',
    url: 'https://futreeng.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FutreEng — A Boutique Software Studio in New York',
    description:
      'Web apps, PWAs, and bespoke software for community organizations, labor groups, and operators building from inside the industries they know.',
  },
  manifest: '/site.webmanifest',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <Ticker />
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
