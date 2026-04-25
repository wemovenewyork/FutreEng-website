const SERVICES = [
  {
    n: '01',
    title: 'Web apps + PWAs',
    desc: 'Custom-built, real-world software. We design, ship, and maintain — no handoffs to a third agency at the end.',
    tags: ['React · Next · Astro', 'Node · Postgres · Stripe', 'Offline-first PWAs'],
  },
  {
    n: '02',
    title: 'Marketing + heritage sites',
    desc: "Editorial-feel sites for organizations whose story matters. Hand-set type, real archives, real research.",
    tags: ['Sanity · MDX · Hugo', 'Print companions', 'Content strategy'],
  },
  {
    n: '03',
    title: 'Internal tools + ops',
    desc: 'Quiet, useful software for the back of the house — dispatch boards, member rolls, depot check-ins, field forms.',
    tags: ['Internal dashboards', 'Field-grade PWAs', 'Workflow tooling'],
  },
  {
    n: '04',
    title: 'Studio + ongoing partnership',
    desc: 'Quarterly retainers for the orgs we keep building with. Fewer clients, longer relationships, real continuity.',
    tags: ['Quarterly retainer', 'Roadmapping', 'Always two of us'],
  },
];

export function Services() {
  return (
    <div className="border-t-[2px] border-ink bg-cream">
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-24">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
          Section II — What we do
        </div>
        <h2 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[120px]">
          Four things,{' '}
          <em className="italic" style={{ color: '#1F2D5C' }}>
            done well.
          </em>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {SERVICES.map((s) => (
            <div key={s.n} className="border-t-[2px] border-ink pt-6">
              <div className="flex items-baseline justify-between">
                <div className="ff-mono text-[12px] uppercase tracking-[0.24em] text-red">{s.n}</div>
                <div className="ff-mono text-[10.5px] uppercase tracking-[0.22em] text-neutral-500">Service</div>
              </div>
              <h4 className="ff-fraunces mt-4 font-black tracking-[-0.025em] leading-[0.98] text-[36px] md:text-[44px]">
                {s.title}
              </h4>
              <p className="mt-4 text-[15.5px] leading-[1.65] text-neutral-700">{s.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t, j) => (
                  <li
                    key={j}
                    className="ff-mono text-[10.5px] uppercase tracking-[0.22em] border px-3 py-1.5"
                    style={{ borderColor: '#1A171566' }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
