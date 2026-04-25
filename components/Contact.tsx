'use client';

import { useState } from 'react';
import { FullRule } from '@/components/ui/FullRule';

const SCOPE_OPTIONS = ['', 'Web app / PWA', 'Marketing / heritage site', 'Internal tools', 'Ongoing studio retainer', 'Not sure yet'];
const BUDGET_OPTIONS = ['', 'Under $35K', '$35–80K', '$80–150K', '$150K+', 'Open'];

function Field({
  label, value, onChange, type = 'text', className = '',
}: {
  label: string; value: string; onChange: (v: string) => void; type?: string; className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <div className="ff-mono text-[10.5px] uppercase tracking-[0.24em] mb-2" style={{ color: '#F2EDE4AA' }}>
        {label}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b-[2px] py-2 ff-fraunces text-[20px] tracking-[-0.01em] focus:outline-none"
        style={{ borderColor: '#F2EDE4', color: '#F2EDE4' }}
      />
    </label>
  );
}

function Select({
  label, value, onChange, options, className = '',
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[]; className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <div className="ff-mono text-[10.5px] uppercase tracking-[0.24em] mb-2" style={{ color: '#F2EDE4AA' }}>
        {label}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b-[2px] py-2 ff-fraunces text-[20px] tracking-[-0.01em] focus:outline-none"
        style={{ borderColor: '#F2EDE4', color: '#F2EDE4' }}
      >
        {options.map((o, i) => (
          <option key={i} value={o} style={{ color: '#1A1715' }}>
            {o || 'Select…'}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label, value, onChange, className = '',
}: {
  label: string; value: string; onChange: (v: string) => void; className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <div className="ff-mono text-[10.5px] uppercase tracking-[0.24em] mb-2" style={{ color: '#F2EDE4AA' }}>
        {label}
      </div>
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-[2px] p-3 text-[15px] leading-[1.6] focus:outline-none"
        style={{ borderColor: '#F2EDE4', color: '#F2EDE4' }}
      />
    </label>
  );
}

export function Contact({ sidebar = true }: { sidebar?: boolean }) {
  const [data, setData] = useState({ name: '', org: '', email: '', scope: '', budget: '', note: '' });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof data) => (v: string) => setData((d) => ({ ...d, [k]: v }));

  return (
    <div id="contact" className="border-t-[2px] border-ink" style={{ backgroundColor: '#1A1715', color: '#F2EDE4' }}>
      <FullRule color="#D63B27" h={8} />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-20 md:py-28">
        <div className={`grid ${sidebar ? 'grid-cols-12' : 'grid-cols-1'} gap-10`}>
          {sidebar && (
            <div className="col-span-12 md:col-span-5">
              <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
                Section VIII — Contact
              </div>
              <h2 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[80px] md:text-[100px]">
                Tell us about{' '}
                <em className="italic text-red">the work.</em>
              </h2>
              <p className="mt-7 text-[16px] md:text-[18px] leading-[1.6] max-w-[42ch]" style={{ color: '#F2EDE4DD' }}>
                A 30-minute conversation. No deck. Just you, us, and the actual job in front of you.
                We&apos;ll write back within two business days.
              </p>
              <div className="mt-10 ff-mono text-[11px] uppercase tracking-[0.24em] leading-[2.1]" style={{ color: '#F2EDE4AA' }}>
                <div><span className="text-red">Email — </span>hello@futreng.com</div>
                <div><span className="text-red">Studio — </span>NYC + NJ, by appointment</div>
                <div><span className="text-red">Hours — </span>Mon–Thu, 9–6 ET</div>
                <div><span className="text-red">Reply — </span>Within two business days</div>
              </div>
            </div>
          )}

          <div className={sidebar ? 'col-span-12 md:col-span-7' : ''}>
            {!sent ? (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="border-[2px] p-6 md:p-8"
                style={{ borderColor: '#F2EDE4' }}
              >
                <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-6 text-red">
                  Form 01 — Project enquiry
                </div>
                {/* TODO: wire to Resend API route or Formspree */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Your name" value={data.name} onChange={set('name')} />
                  <Field label="Organization" value={data.org} onChange={set('org')} />
                  <Field label="Email" type="email" value={data.email} onChange={set('email')} className="md:col-span-2" />
                  <Select label="Scope" value={data.scope} onChange={set('scope')} options={SCOPE_OPTIONS} />
                  <Select label="Budget range" value={data.budget} onChange={set('budget')} options={BUDGET_OPTIONS} />
                  <Textarea label="A few lines about the work" value={data.note} onChange={set('note')} className="md:col-span-2" />
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="text-white px-7 py-4 ff-mono text-[12px] uppercase tracking-[0.24em] hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#D63B27' }}
                  >
                    Send enquiry →
                  </button>
                  <span className="ff-mono text-[10.5px] uppercase tracking-[0.22em]" style={{ color: '#F2EDE499' }}>
                    We reply within 2 business days.
                  </span>
                </div>
              </form>
            ) : (
              <div className="border-[2px] p-10" style={{ borderColor: '#F2EDE4' }}>
                <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
                  Confirmation — Form 01
                </div>
                <div className="ff-fraunces font-black tracking-[-0.025em] leading-[1] text-[40px] md:text-[56px]">
                  Got it.{' '}
                  <em className="italic text-red">Talk soon.</em>
                </div>
                <p className="mt-5 text-[16px] leading-[1.65] max-w-[44ch]" style={{ color: '#F2EDE4DD' }}>
                  We&apos;ll write back to {data.email || 'you'} within two business days. If it&apos;s urgent,
                  hello@futreng.com lands in both our inboxes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
