import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CASES, getCaseBySlug } from '@/lib/cases';
import { FullRule } from '@/components/ui/FullRule';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.title} — ${c.no}`,
    description: c.desc,
    openGraph: {
      title: `${c.title} — ${c.no} — FutreEng`,
      description: c.desc,
      url: `https://futreeng.com/work/${c.slug}`,
    },
    twitter: {
      title: `${c.title} — ${c.no} — FutreEng`,
      description: c.desc,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const currentIndex = CASES.findIndex((x) => x.slug === slug);
  const next = CASES[currentIndex + 1] ?? CASES[0];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${c.title} ${c.italicWord}`,
    creator: { '@type': 'Organization', name: 'FutreEng' },
    datePublished: c.year,
    description: c.desc,
    url: `https://futreeng.com/work/${c.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FullRule />
      {/* Hero */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
          {c.no} / {c.cat} — {c.year}
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[140px]">
          {c.title}{' '}
          <em className="italic text-red">{c.italicWord}</em>
        </h1>
      </div>

      {/* Hero image */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pb-10">
        {c.imagePath ? (
          <div className="aspect-[16/9] w-full relative overflow-hidden">
            <Image
              src={c.imagePath}
              alt={`${c.title} hero`}
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
          </div>
        ) : (
          <ImagePlaceholder bg={c.bg} caption={c.caption} ratio="aspect-[16/9]" />
        )}
      </div>

      {/* Meta strip */}
      <div className="border-y-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 ff-mono text-[10.5px] uppercase tracking-[0.22em]">
          <div><div className="text-neutral-500 mb-1">Duration</div>{c.duration}</div>
          <div><div className="text-neutral-500 mb-1">Stack</div>{c.stack}</div>
          <div><div className="text-neutral-500 mb-1">Role</div>{c.role}</div>
          <div><div className="text-neutral-500 mb-1">Year</div>{c.year}</div>
        </div>
      </div>

      {/* Brief */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">The Brief</div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="ff-archivo font-bold uppercase text-[22px] md:text-[28px] tracking-[-0.01em] leading-[1.15] mb-8">
              {c.desc}
            </h2>
            {c.brief.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.7] text-neutral-700 mb-5">{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Outcome stats */}
      <div className="border-y-[2px] border-ink bg-cream">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
            {c.outcome.map((s, i) => (
              <div key={i} className={i < c.outcome.length - 1 ? 'md:border-r border-ink/20 md:pr-6' : ''}>
                <div className="ff-fraunces text-[56px] md:text-[80px] font-black leading-[0.85] tracking-[-0.04em]" style={{ color: i === 0 ? '#D63B27' : '#1A1715' }}>
                  {s.n}
                </div>
                <div className="mt-3 ff-mono text-[10.5px] uppercase tracking-[0.22em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pull quote */}
      {c.quote && (
        <>
          <FullRule />
          <div className="py-20 md:py-28" style={{ backgroundColor: '#1A1715', color: '#F2EDE4' }}>
            <div className="max-w-[1440px] mx-auto px-8 md:px-10">
              <blockquote className="ff-archivo italic font-bold uppercase text-[32px] sm:text-[48px] md:text-[72px] leading-[0.95] tracking-[-0.02em] max-w-[20ch]">
                <span className="text-red">&ldquo;</span>{c.quote.text}<span className="text-red">&rdquo;</span>
              </blockquote>
              <div className="mt-8 ff-mono text-[11px] uppercase tracking-[0.28em] text-red">
                — {c.quote.attribution}
              </div>
            </div>
          </div>
          <FullRule />
        </>
      )}

      {/* Next case */}
      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-14 flex items-center justify-between gap-6 flex-wrap">
          <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] text-neutral-500">
            Next case
          </div>
          <Link
            href={`/work/${next.slug}`}
            className="ff-fraunces font-black text-[28px] md:text-[48px] tracking-[-0.025em] leading-[1] hover:text-red transition-colors"
          >
            {next.title}{' '}
            <em className="italic" style={{ color: '#1F2D5C' }}>{next.italicWord}</em> →
          </Link>
        </div>
      </div>
    </>
  );
}
