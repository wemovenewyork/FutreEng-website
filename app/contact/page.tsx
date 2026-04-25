import type { Metadata } from 'next';
import { Contact } from '@/components/Contact';
import { FullRule } from '@/components/ui/FullRule';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a 30-minute conversation with FutreEng. We reply within two business days.',
};

export default function ContactPage() {
  return (
    <>
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
              { n: '02', title: '30-minute conversation', body: 'No deck. No questionnaire. We talk about the actual job in front of you and whether we\'re the right studio for it.' },
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
