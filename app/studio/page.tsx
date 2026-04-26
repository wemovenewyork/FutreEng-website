import type { Metadata } from 'next';
import { FullRule } from '@/components/ui/FullRule';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Studio',
  description: 'FutreEng is Joseph Pannetta and Haron Wilson — a boutique software studio for the people moving New York.',
};

const FOUNDERS = [
  {
    name: 'Haron Wilson',
    role: 'Co-founder · CEO',
    bg: '#D63B27',
    bio: [
      'Haron Wilson is an entrepreneur focused on transforming traditional industries through technology, community, and bold thinking.',
      'With 30+ years in public transportation, he founded We Move New York — the largest brand for transportation professionals in the NYC metro area — and the WMNY Invitational, the largest sporting event for transportation employees.',
      'At FutreEng, Haron runs client relationships, strategy, and the studio\'s work with labor organizations and community groups across the city.',
    ],
    quote: '"The next generation of transformative technology companies will come from understanding industries deeply and building solutions from the inside out."',
    meta: ['Brooklyn, NY', 'haron@futreeng.com', 'TWU Local 100', 'We Move New York'],
  },
  {
    name: 'Joseph Pannetta',
    role: 'Co-founder · CTO',
    bg: '#1F2D5C',
    bio: [
      'Joseph Pannetta brings deep expertise across the full software development lifecycle — from system architecture and backend engineering to UX design and cloud deployment.',
      'He focuses on building technology at the intersection of AI, automation, and software platforms that enable businesses to operate more intelligently.',
      'At FutreEng, Joseph writes the production code, maintains the technical bench, and ensures every system shipped is built to last.',
    ],
    quote: '"Build companies that leverage advanced software and intelligent systems to reshape how businesses operate."',
    meta: ['Jersey City, NJ', 'joseph@futreeng.com', 'System Architecture', 'AI & Automation'],
  },
];

const PRINCIPLES = [
  { n: 'I.', title: 'Two of us, every time.', italic: 'No hand-offs.' },
  { n: 'II.', title: 'Custom-built.', italic: 'No templates.' },
  { n: 'III.', title: 'Editorial taste, working software.', italic: 'Both, always.' },
  { n: 'IV.', title: 'Fewer clients, longer relationships.' },
  { n: 'V.', title: 'We come from the industries we build for.', italic: 'That matters.' },
];

export default function StudioPage() {
  return (
    <>
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="ff-mono text-[11px] uppercase tracking-[0.3em] mb-4 text-red">
          Section III — The Studio
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[140px]">
          Two people.{' '}
          <em className="italic" style={{ color: '#D63B27' }}>
            One studio.
          </em>
        </h1>
        <p className="mt-8 text-[18px] md:text-[22px] leading-[1.55] max-w-[60ch]">
          FutreEng is Joseph Pannetta and Haron Wilson. Every project is touched by both of us,
          beginning to end. There is no &ldquo;team&rdquo; being assigned — there&apos;s us, and the work.
        </p>
      </div>

      {/* Founders */}
      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {FOUNDERS.map((p, i) => (
              <div key={i}>
                <ImagePlaceholder bg={p.bg} caption={`Portrait — ${p.name}`} ratio="aspect-[4/5]" />
                <div className="mt-6 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">{p.role}</div>
                <h2 className="ff-fraunces mt-2 font-black tracking-[-0.025em] leading-[1] text-[40px] md:text-[56px]">
                  {p.name}
                </h2>
                {p.bio.map((para, j) => (
                  <p key={j} className="mt-4 text-[15.5px] leading-[1.7] text-neutral-700">{para}</p>
                ))}
                <blockquote className="mt-6 border-l-[3px] border-red pl-4 ff-fraunces italic text-[18px] md:text-[22px] leading-[1.4] tracking-[-0.01em] text-neutral-800">
                  {p.quote}
                </blockquote>
                <div className="mt-6 flex flex-wrap gap-3 ff-mono text-[10.5px] uppercase tracking-[0.22em]">
                  {p.meta.map((m, j) => (
                    <span key={j} className="border-[2px] border-ink px-3 py-1.5 text-neutral-700">{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="border-t-[2px] border-ink" style={{ backgroundColor: '#1A1715', color: '#F2EDE4' }}>
        <FullRule color="#D63B27" h={8} />
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">Studio principles</div>
              <p className="text-[15px] leading-[1.7] max-w-[30ch]" style={{ color: '#F2EDE4BB' }}>
                These are not marketing copy. They are the rules we actually run the studio by.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <ol className="ff-fraunces text-[28px] md:text-[40px] tracking-[-0.022em] leading-[1.15] font-black">
                {PRINCIPLES.map((p, i) => (
                  <li key={i} className="border-b py-5" style={{ borderColor: '#F2EDE444' }}>
                    <span className="ff-mono text-[12px] tracking-[0.24em] uppercase mr-4 align-middle text-red">{p.n}</span>
                    {p.title}
                    {p.italic && <em className="italic"> {p.italic}</em>}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
