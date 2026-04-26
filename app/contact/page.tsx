import type { Metadata } from 'next';
import { Contact } from '@/components/Contact';
import { FullRule } from '@/components/ui/FullRule';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'A 30-minute conversation. No deck. Just you, us, and the actual job in front of you. We reply within two business days.',
  openGraph: {
    title: 'Contact — FutreEng',
    description:
      'A 30-minute conversation. No deck. Just you, us, and the actual job in front of you. We reply within two business days.',
    url: 'https://futreeng.com/contact',
  },
  twitter: {
    title: 'Contact — FutreEng',
    description:
      'A 30-minute conversation. No deck. Just you, us, and the actual job in front of you. We reply within two business days.',
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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="ff-mono text-[11px] uppercase tracking-[0.3em] mb-4 text-red">
          Section VIII — Contact
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[140px]">
          Tell us about{' '}
          <em className="italic" style={{ color: '#D63B27' }}>
            the work.
          </em>
        </h1>
        <p className="mt-7 text-[16px] md:text-[18px] leading-[1.55] max-w-[58ch]">
          A 30-minute conversation. No deck. Just you, us, and the actual job in front of you.
        </p>
        <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] max-w-[58ch]">
          We&apos;re best suited for serious engagements — typically multi-week, dedicated builds.
          If you&apos;re scoping a quick one-pager or working at a freelance budget, we may not be the right studio.
        </p>
      </div>

      {/* What happens next */}
      <div className="border-y-[2px] border-ink bg-cream">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-12">
          <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-8 text-red">
            What happens next
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {[
              { n: '01', title: 'We read your message', body: 'Both of us. Within two business days we write back with a short response and, if it seems like a fit, a proposed call time.' },
              { n: '02', title: '30-minute conversation', body: "No deck. No questionnaire. We talk about the actual job in front of you and whether we're the right studio for it." },
              { n: '03', title: 'Written proposal', body: 'If we think we can help, we send a written proposal within one week. Scope, timeline, and cost — clearly stated.' },
            ].map((s) => (
              <div key={s.n} className="border-t-[2px] border-ink pt-5">
                <div className="ff-mono text-[12px] uppercase tracking-[0.28em] text-red mb-3">Step {s.n}</div>
                <h3 className="ff-fraunces font-black text-[24px] md:text-[30px] tracking-[-0.02em] leading-[1.1] mb-3">{s.title}</h3>
                <p className="text-[15px] leading-[1.65] text-neutral-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contact sidebar={false} />
    </>
  );
}
