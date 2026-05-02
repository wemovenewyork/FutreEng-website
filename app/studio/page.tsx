import type { Metadata } from 'next';
import Image from 'next/image';
import { FullRule } from '@/components/ui/FullRule';

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'Two people. One studio. Joseph Panetta and Haron Wilson build digital products from inside the industries they know.',
  openGraph: {
    title: 'Studio — FutreEng',
    description:
      'Two people. One studio. Joseph Panetta and Haron Wilson build digital products from inside the industries they know.',
    url: 'https://futreeng.com/studio',
  },
  twitter: {
    title: 'Studio — FutreEng',
    description:
      'Two people. One studio. Joseph Panetta and Haron Wilson build digital products from inside the industries they know.',
  },
};

const FOUNDERS = [
  {
    name: 'Haron Wilson',
    role: 'Co-founder · CEO',
    bg: '#D63B27',
    bio: [
      '30+ years in public transportation. Founder of We Move New York, the largest brand for transit professionals. Runs client work, strategy, and the studio\'s relationship with the people doing real work in the city.',
      "Hands-on across the stack alongside Joseph — front-end work, content systems, and the production-side details that turn a design into a live site. Brings the client's perspective to every project: what actually breaks on the ground, what users will and won't use, and how technology lands inside organizations that have run for decades without it.",
    ],
    imagePath: '/images/haron.jpg',
    objectPosition: 'object-top',
    quote: '"The next generation of transformative technology companies will come from understanding industries deeply and building solutions from the inside out."',
    meta: ['Brooklyn, NY', 'HaronWilson@futreeng.com', 'We Move New York'],
  },
  {
    name: 'Joseph Panetta',
    role: 'Co-founder · CTO',
    bg: '#1F2D5C',
    bio: [
      "Engineering lead. Builds production software, maintains the studio's technical bench, and writes most of the code that ends up in front of users.",
      "Works across the full stack: React, Next.js, and Astro on the front end; Node, Python, and Postgres on the back end; Vercel, AWS, and edge infrastructure for deployment. Builds AI-augmented systems and integrations against the Anthropic and OpenAI APIs. Specializes in PWAs that work offline and in low-signal environments — the kind of software that has to keep running when the network doesn't.",
    ],
    imagePath: '/images/joseph.png',
    objectPosition: 'object-center',
    quote: '"Build companies that leverage advanced software and intelligent systems to reshape how businesses operate."',
    meta: ['Akron, OH', 'JosephPanetta@futreeng.com', 'System Architecture', 'AI & Automation'],
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
          FutreEng is Joseph Panetta and Haron Wilson. Every project is touched by both of us,
          beginning to end. There is no &ldquo;team&rdquo; being assigned — there&apos;s us, and the work.
        </p>
      </div>

      {/* Founders */}
      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {FOUNDERS.map((p, i) => (
              <div key={i}>
                <div className="aspect-[4/5] w-full relative overflow-hidden">
                  <Image
                    src={p.imagePath}
                    alt={`Portrait — ${p.name}`}
                    fill
                    className={`object-cover ${p.objectPosition}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
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
