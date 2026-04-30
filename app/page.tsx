import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Clients } from '@/components/Clients';
import { Stats } from '@/components/Stats';
import { SectionMast } from '@/components/SectionMast';
import { FeatureCase } from '@/components/FeatureCase';
import { CaseGrid } from '@/components/CaseGrid';
import { Services } from '@/components/Services';
import { Studio } from '@/components/Studio';
import { Process } from '@/components/Process';
import { PullQuote } from '@/components/PullQuote';
import { JournalSection } from '@/components/JournalSection';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';

export const metadata: Metadata = {
  title: { absolute: 'FutreEng — A Boutique Software Studio in New York' },
  description:
    'Web apps, PWAs, and bespoke software for community organizations, labor groups, and operators building from inside the industries they know. Currently accepting 3 projects for Q3 2026.',
  openGraph: {
    title: 'FutreEng — A Boutique Software Studio in New York',
    description:
      'Web apps, PWAs, and bespoke software for community organizations, labor groups, and operators building from inside the industries they know. Currently accepting 3 projects for Q3 2026.',
    url: 'https://futreeng.com',
    type: 'website',
  },
  twitter: {
    title: 'FutreEng — A Boutique Software Studio in New York',
    description:
      'Web apps, PWAs, and bespoke software for community organizations, labor groups, and operators building from inside the industries they know.',
  },
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FutreEng',
  url: 'https://futreeng.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://futreeng.com/journal?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who do you build for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Community organizations, labor unions, transit-adjacent operators, and small tri-state businesses. Most of our clients have a real-world job that software gets in the way of, and we get out of the way.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does an engagement cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each engagement is scoped and priced individually. After our first conversation, we send a written proposal — fixed scope, fixed price, no hourly billing. Most clients stay on a quarterly retainer after launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are you different from an agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "There are two of us. Both founders work on every project, every day. We don't sell hours, we sell finished work. We don't use templates. We don't sub work out.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you take on early-stage tech startups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — if the fit is right. We work best with early-stage founders who know their industry and need software built to last, not just to demo. If you're building something real and want a studio that treats your product like a production system from day one, we're interested.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can we keep working with you after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most of our clients do. We offer a quarterly retainer for ongoing design + engineering, scoped to the actual work in front of us.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Hero />
      <Clients />
      <Stats />
      <div id="work">
        <SectionMast
          section="I"
          kicker="Selected Work"
          title="Twelve projects."
          italicTail="One studio."
          dek="Live work for clients across the tri-state area. Each engagement begins with a conversation and ends with something we'd put our names on."
        />
        <FeatureCase />
        <CaseGrid limit={4} />
      </div>
      <Services />
      <Studio />
      <Process />
      <PullQuote />
      <JournalSection limit={4} />
      <FAQ />
      <Contact />
    </>
  );
}
