const STATS = [
  { n: '12', label: 'Projects shipped', sub: 'across the tri-state area', red: false },
  { n: '02', label: 'Founders, both hands-on', sub: 'every project, end to end', red: true },
  { n: '08wk', label: 'Median engagement', sub: 'from kickoff to launch', red: false },
  { n: '100%', label: 'Custom-built', sub: 'no templates, no resellers', red: false },
];

export function Stats() {
  return (
    <div className="border-b-[2px] border-ink bg-cream">
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`${i < 3 ? 'md:border-r border-ink/20' : ''} ${i === 0 ? 'md:pl-0' : 'md:pl-6'}`}
            >
              <div
                className="ff-fraunces text-[72px] md:text-[112px] font-black leading-[0.85] tracking-[-0.04em]"
                style={{ color: s.red ? '#D63B27' : '#1A1715' }}
              >
                {s.n}
              </div>
              <div className="mt-3 ff-mono text-[10.5px] uppercase tracking-[0.22em]">{s.label}</div>
              <div className="ff-mono text-[10.5px] uppercase tracking-[0.22em] text-neutral-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
