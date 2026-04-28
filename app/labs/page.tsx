import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FullRule } from '@/components/ui/FullRule';

export const metadata: Metadata = {
  title: 'Labs',
  description: 'Studio products in development. The Forge is the first.',
  openGraph: {
    title: 'Labs — FutreEng',
    description: 'Studio products in development. The Forge is the first.',
    url: 'https://futreeng.com/labs',
  },
  twitter: {
    title: 'Labs — FutreEng',
    description: 'Studio products in development. The Forge is the first.',
  },
};

export default function LabsPage() {
  return (
    <>
      {/* ── Section 1: Page header ── */}
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="ff-mono text-[11px] uppercase tracking-[0.3em] mb-4 text-red">
          Section IX — Studio Products
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[140px]">
          What we build
          <br />
          <em className="italic" style={{ color: '#D63B27' }}>
            for ourselves.
          </em>
        </h1>
        <p className="mt-8 ff-archivo text-[18px] sm:text-[20px] md:text-[22px] leading-[1.45] tracking-[-0.01em] font-medium uppercase max-w-[720px]">
          FutreEng is studio-led. Custom client software is the primary work. But some problems are
          big enough — or interesting enough — that we build for ourselves too. Below: what&apos;s
          currently in the studio.
        </p>
        <div className="mt-6 ff-mono text-[11px] uppercase tracking-[0.28em] flex items-center gap-2 text-red">
          <span className="inline-block w-1.5 h-1.5 bg-red" />
          One product in active development — Q3 2026
        </div>
      </div>

      {/* ── Section 2: Red rule divider ── */}
      <FullRule color="#D63B27" h={8} />

      {/* ── Section 3: The Forge feature block ── */}
      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-24">

          {/* Eyebrow */}
          <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-6 text-red">
            FE/L 001 — In Active Development
          </div>

          {/* Product name + tagline */}
          <div className="grid grid-cols-12 gap-6 items-end mb-12">
            <div className="col-span-12 md:col-span-8">
              <h2 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[80px] md:text-[120px]">
                The One{' '}
                <em className="italic text-red">Forge</em>
              </h2>
              <p className="mt-5 ff-archivo text-[18px] md:text-[22px] leading-[1.3] tracking-[-0.01em] font-medium uppercase">
                AI code generation, wrapped in a deterministic envelope.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[16px] md:text-[18px] leading-[1.65] text-neutral-700 max-w-[640px]">
                Most AI code tools ship hallucinated configs, version mismatches, and errors that
                compound. The Forge wraps an LLM in a closed-loop pipeline that scaffolds before
                generating, pins dependencies, verifies every output, and learns from failures. The
                result: complete, runnable React and Node applications with production-readiness
                scoring you can actually defend to a buyer.
              </p>
            </div>
          </div>

          {/* Forge workspace screenshot */}
          <div className="aspect-[16/9] w-full relative overflow-hidden mb-12">
            <Image
              src="/images/forge-screenshot.png"
              alt="The One Forge workspace — pipeline view"
              fill
              className="object-contain object-top"
              sizes="100vw"
            />
          </div>

          {/* Metadata strip */}
          <div className="border-y-[2px] border-ink py-6 mb-12">
            <div className="grid grid-cols-3 gap-6 ff-mono text-[10.5px] uppercase tracking-[0.22em]">
              <div>
                <div className="text-neutral-500 mb-2">Status</div>
                <div className="ff-fraunces text-[20px] font-black tracking-[-0.01em]">In beta</div>
              </div>
              <div>
                <div className="text-neutral-500 mb-2">Stack</div>
                <div className="ff-fraunces text-[20px] font-black tracking-[-0.01em] leading-[1.3]">Next.js · OpenAI · Anthropic · Vercel</div>
              </div>
              <div>
                <div className="text-neutral-500 mb-2">Stage</div>
                <div className="ff-fraunces text-[20px] font-black tracking-[-0.01em]">Closed early access</div>
              </div>
            </div>
          </div>

          {/* Second body paragraph */}
          <div className="grid grid-cols-12 gap-6 mb-10">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[16px] md:text-[18px] leading-[1.65] text-neutral-700 max-w-[640px]">
                The Forge runs as a self-serve workspace. Founders use it to bootstrap
                production-ready projects. Agencies use it for delivery acceleration. Engineering
                teams use it for backlog relief. Every run produces a verifiable artifact with cost
                and confidence scoring, not just code.
              </p>

              <p className="mt-6 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-neutral-500">
                The Forge has its own workspace and visual identity. Click through to explore.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://structured-ai-pipelines.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-7 py-4 ff-mono text-[12px] uppercase tracking-[0.24em] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#D63B27' }}
            >
              Open the Forge workspace →
            </a>
            <Link
              href="/contact"
              className="px-7 py-4 ff-mono text-[12px] uppercase tracking-[0.24em] border-[2px] border-ink hover:bg-ink hover:text-cream transition-colors"
            >
              Book a walkthrough →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Section 4: Closing note ── */}
      <div className="border-t-[2px] border-ink bg-cream">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-20">
          <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-6 text-red">
            What&apos;s Next
          </div>
          <p className="text-[16px] md:text-[18px] leading-[1.65] text-neutral-700 max-w-[640px]">
            More studio products are in planning. We&apos;ll add them here when they&apos;re ready
            to be seen. In the meantime, if you have a problem you think a small studio could turn
            into software, the conversation starts at{' '}
            <Link href="/contact" className="hover:text-red transition-colors border-b border-current">
              /contact
            </Link>
            .
          </p>
          <Link
            href="/studio"
            className="mt-6 inline-block ff-fraunces italic text-red text-[18px] md:text-[20px] tracking-[-0.01em] hover:opacity-80 transition-opacity"
          >
            Read the studio philosophy →
          </Link>
        </div>
      </div>
    </>
  );
}
