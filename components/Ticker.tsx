const ITEMS = [
  'Issue No. 01',
  'Q3 · 2026',
  'Currently accepting 3 projects',
  'Studio of two',
  'Based in NYC Tri-State',
  'We Move New York',
  'Adelphic Union Lodge No. 14',
  'Tramell Thompson',
  'PHAmily Classic',
  'Low.Key Studios',
];

export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="border-b-[2px] overflow-hidden"
      style={{ borderColor: '#1A1715', backgroundColor: '#1A1715', color: '#F2EDE4' }}
    >
      <div className="ticker-track flex whitespace-nowrap py-2.5 ff-mono text-[11px] uppercase tracking-[0.28em]">
        {row.map((s, i) => (
          <span key={i} className="px-6 flex items-center gap-6">
            <span className="inline-block w-1.5 h-1.5" style={{ backgroundColor: '#D63B27' }} />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
