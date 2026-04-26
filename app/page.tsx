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
        text: 'Community organizations, labor unions, transit-adjacent operators, and small NYC/NJ businesses. Most of our clients have a real-world job that software gets in the way of, and we get out of the way.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does an engagement cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical site or app runs $35–80K, eight weeks. Heritage and platform work runs longer. We send a written proposal after our first conversation. No retainer required, but most clients keep us on quarterly.',
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
        text: "Rarely. We're the wrong studio for venture-backed product MVPs. We're the right studio for organizations who already have a job and need software that respects it.",
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
          dek="Live work for clients across NYC and NJ. Each engagement begins with a conversation and ends with something we'd put our names on."
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
