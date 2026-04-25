import { FullRule } from '@/components/ui/FullRule';

const STEPS = [
  { n: '01', w: 'Wk 0', title: 'Conversation', body: 'A 30-minute call. Are we right for each other? If yes, a written proposal within a week.' },
  { n: '02', w: 'Wk 1', title: 'Discovery', body: 'We learn the actual job. We meet your people, read your archive, look at how the work is done today.' },
  { n: '03', w: 'Wk 2–3', title: 'Design', body: 'Type, layout, and a clickable prototype of the real thing. Reviewed in person where possible.' },
  { n: '04', w: 'Wk 3–7', title: 'Build', body: 'Production code. We deploy continuously to a staging URL. You see it grow week by week.' },
  { n: '05', w: 'Wk 8', title: 'Launch', body: 'Hand-tuned launch, training your team, and the keys. Then a 30-day support window included.' },
  { n: '06', w: 'Ongoing', title: 'Studio', body: 'Optional quarterly retainer. We keep building. Most of our clients stay.' },
];

export function Process() {
  return (
    <div className="border-t-[2px] border-ink bg-cream">
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-24">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
          Section IV — How we work
        </div>
        <h2 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[120px]">
          Eight weeks,{' '}
          <em className="italic" style={{ color: '#1F2D5C' }}>
            start to ship.
          </em>
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-10">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t-[2px] border-ink pt-5">
              <div className="flex items-baseline justify-between">
                <div className="ff-mono text-[12px] uppercase tracking-[0.28em] text-red">Step {s.n}</div>
                <div className="ff-mono text-[10.5px] uppercase tracking-[0.22em] text-neutral-500">{s.w}</div>
              </div>
              <h4 className="ff-fraunces mt-3 font-black tracking-[-0.02em] leading-[1] text-[32px] md:text-[40px]">
                {s.title}
              </h4>
              <p className="mt-3 text-[15px] leading-[1.65] text-neutral-700">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
