const CLIENTS = [
  'We Move New York',
  'Adelphic Union Lodge No. 14',
  'Tramell Thompson',
  'PHAmily Classic',
  'Low.Key Studios',
];

export function Clients() {
  return (
    <div className="border-y-[2px] border-ink bg-cream">
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-10">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-8 text-red">
          Trusted by — selected client roster
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
          {CLIENTS.map((c, i) => (
            <li key={i} className="ff-fraunces text-[20px] md:text-[22px] font-black tracking-[-0.015em] leading-[1.1]">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
