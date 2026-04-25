import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { POSTS, getPostBySlug } from '@/lib/journal';
import { FullRule } from '@/components/ui/FullRule';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.dek,
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const currentIndex = POSTS.findIndex((p) => p.slug === slug);
  const next = POSTS[currentIndex + 1];

  return (
    <>
      <FullRule />
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
          {post.no} / {post.cat} · {post.date} · {post.read} read
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[48px] sm:text-[72px] md:text-[100px] max-w-[18ch]">
          {post.title}
        </h1>
        {post.dek && (
          <p className="ff-archivo font-medium uppercase mt-6 text-[18px] md:text-[22px] leading-[1.18] tracking-[-0.012em] max-w-[44ch] text-neutral-700">
            {post.dek}
          </p>
        )}
      </div>

      {/* Body */}
      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-2 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-neutral-500">
              FutreEng Studio<br />
              {post.date}
            </div>
            <div className="col-span-12 md:col-span-8">
              {post.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[17px] md:text-[19px] leading-[1.75] text-neutral-800 mb-7"
                  style={i === 0 ? {
                    fontSize: undefined,
                  } : {}}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-10 flex items-center justify-between gap-6 flex-wrap">
          <Link
            href="/journal"
            className="ff-mono text-[11px] uppercase tracking-[0.24em] border-[2px] border-ink px-5 py-3 hover:bg-ink hover:text-cream transition-colors"
          >
            ← All entries
          </Link>
          {next && (
            <Link
              href={`/journal/${next.slug}`}
              className="ff-fraunces font-black text-[20px] md:text-[32px] tracking-[-0.025em] leading-[1] hover:text-red transition-colors text-right max-w-[28ch]"
            >
              {next.title} →
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
