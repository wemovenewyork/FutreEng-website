import Image from 'next/image';
import { FullRule } from '@/components/ui/FullRule';

const FOUNDERS = [
  {
    name: 'Haron Wilson',
    role: 'Co-founder · CEO',
    bg: '#D63B27',
    copy: [
      "30+ years in public transportation. Founder of We Move New York, the largest brand for transit professionals. Runs client work, strategy, and the studio's relationship with the people doing real work in the city.",
      "Hands-on across the stack alongside Joseph — front-end work, content systems, and the production-side details that turn a design into a live site. Brings the client's perspective to every project: what actually breaks on the ground, what users will and won't use, and how technology lands inside organizations that have run for decades without it.",
    ],
    imagePath: '/images/haron.jpg',
    objectPosition: 'object-top',
    meta: ['Brooklyn, NY', 'HaronWilson@futreeng.com'],
  },
  {
    name: 'Joseph Pannetta',
    role: 'Co-founder · CTO',
    bg: '#1F2D5C',
    copy: [
      "Engineering lead. Builds production software, maintains the studio's technical bench, and writes most of the code that ends up in front of users.",
      "Works across the full stack: React, Next.js, and Astro on the front end; Node, Python, and Postgres on the back end; Vercel, AWS, and edge infrastructure for deployment. Builds AI-augmented systems and integrations against the Anthropic and OpenAI APIs. Specializes in PWAs that work offline and in low-signal environments — the kind of software that has to keep running when the network doesn't.",
    ],
    imagePath: '/images/joseph.png',
    objectPosition: 'object-center',
    meta: ['Akron, OH', 'JosephPannetta@futreeng.com'],
  },
];

const PRINCIPLES = [
  { n: 'I.', title: 'Two of us, every time.', italic: 'No hand-offs.' },
  { n: 'II.', title: 'Custom-built.', italic: 'No templates.' },
  { n: 'III.', title: 'Editorial taste, working software.', italic: 'Both, always.' },
  { n: 'IV.', title: 'Fewer clients, longer relationships.' },
];

export function Studio() {
  return (
    <div id="studio" className="border-t-[2px] border-ink" style={{ backgroundColor: '#1A1715', color: '#F2EDE4' }}>
      <FullRule color="#D63B27" h={8} />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-20 md:py-28">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
          Section III — The Studio
        </div>
        <h2 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[140px]">
          Two people.{' '}
          <em className="italic text-red">One studio.</em>
        </h2>
        <p className="mt-8 text-[18px] md:text-[20px] leading-[1.55] max-w-[60ch] font-medium">
          FutreEng is Joseph Pannetta and Haron Wilson. Every project is touched by both of us,
          beginning to end. There is no &ldquo;team&rdquo; being assigned — there&apos;s us, and the work.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
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
              <h4 className="ff-fraunces mt-2 font-black tracking-[-0.025em] leading-[1] text-[40px] md:text-[52px]">
                {p.name}
              </h4>
              {p.copy.map((para, j) => (
                <p key={j} className="mt-4 text-[15.5px] leading-[1.65] max-w-[44ch]">{para}</p>
              ))}
              <div className="mt-5 flex flex-wrap gap-3 ff-mono text-[10.5px] uppercase tracking-[0.22em]" style={{ color: '#F2EDE499' }}>
                {p.meta.map((m, j) => (
                  <span key={j} className="border px-3 py-1.5" style={{ borderColor: '#F2EDE455' }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6 border-t-[2px] pt-10" style={{ borderColor: '#F2EDE4' }}>
          <div className="col-span-12 md:col-span-4 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
            Studio principles
          </div>
          <div className="col-span-12 md:col-span-8">
            <ol className="ff-fraunces text-[28px] md:text-[40px] tracking-[-0.022em] leading-[1.15] font-black">
              {PRINCIPLES.map((p, i) => (
                <li key={i} className="border-b py-5" style={{ borderColor: '#F2EDE444' }}>
                  <span
                    className="ff-mono text-[12px] tracking-[0.24em] uppercase mr-4 align-middle text-red"
                  >
                    {p.n}
                  </span>
                  {p.title}
                  {p.italic && <em className="italic"> {p.italic}</em>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
