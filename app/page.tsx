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

export default function Home() {
  return (
    <>
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
