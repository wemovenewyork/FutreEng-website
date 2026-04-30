'use client';

import { useState } from 'react';
import { FullRule } from '@/components/ui/FullRule';

const ITEMS = [
  {
    q: 'Who do you build for?',
    a: "Community organizations, labor unions, transit-adjacent operators, and small tri-state businesses. Most of our clients have a real-world job that software gets in the way of, and we get out of the way.",
  },
  {
    q: 'What does an engagement cost?',
    a: "Each engagement is scoped and priced individually. After our first conversation, we send a written proposal — fixed scope, fixed price, no hourly billing. Most clients stay on a quarterly retainer after launch.",
  },
  {
    q: 'How are you different from an agency?',
    a: "There are two of us. Both founders work on every project, every day. We don't sell hours, we sell finished work. We don't use templates. We don't sub work out.",
  },
  {
    q: 'Do you take on early-stage tech startups?',
    a: "Yes — if the fit is right. We work best with early-stage founders who know their industry and need software built to last, not just to demo. If you're building something real and want a studio that treats your product like a production system from day one, we're interested.",
  },
  {
    q: 'Can we keep working with you after launch?',
    a: "Yes. Most of our clients do. We offer a quarterly retainer for ongoing design + engineering, scoped to the actual work in front of us.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) => {
    setOpen(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  return (
    <div className="border-t-[2px] border-ink bg-cream">
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
              Section VII — FAQ
            </div>
            <h2 className="ff-fraunces font-black tracking-[-0.025em] leading-[0.94] text-[44px] md:text-[72px]">
              Common{' '}
              <em className="italic" style={{ color: '#1F2D5C' }}>
                questions.
              </em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="border-t-[2px] border-ink">
              {ITEMS.map((it, i) => (
                <li key={i} className="border-b" style={{ borderColor: '#1A171533' }}>
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={open.has(i)}
                    className="w-full grid grid-cols-12 gap-4 py-5 text-left items-baseline"
                  >
                    <div className="col-span-1 ff-mono text-[10.5px] uppercase tracking-[0.24em] text-red">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="col-span-10 ff-fraunces text-[22px] md:text-[28px] font-black tracking-[-0.015em] leading-[1.15]">
                      {it.q}
                    </div>
                    <div className="col-span-1 text-right ff-mono text-[18px] text-red">
                      {open.has(i) ? '−' : '+'}
                    </div>
                  </button>
                  {/* Height transition via grid-template-rows 0fr→1fr */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: open.has(i) ? '1fr' : '0fr',
                      transition: 'grid-template-rows 300ms ease-out',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div className="grid grid-cols-12 gap-4 pb-7">
                        <div className="hidden md:block md:col-span-1" />
                        <p
                          className="col-span-12 md:col-span-10 text-[15.5px] leading-[1.7] text-neutral-700"
                          style={{
                            opacity: open.has(i) ? 1 : 0,
                            transition: 'opacity 200ms ease-out 100ms',
                          }}
                        >
                          {it.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
