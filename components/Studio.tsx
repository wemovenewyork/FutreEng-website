import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { FullRule } from '@/components/ui/FullRule';

const FOUNDERS = [
  {
    name: 'Haron Wilson',
    role: 'Co-founder · CEO',
    bg: '#D63B27',
    copy: "Comes from the organizer side — TWU Local 100, We Move New York. Runs client work, strategy, and the studio's relationship with the people doing real work in the city.",
    meta: ['Brooklyn, NY', 'haron@futreng.com'],
  },
  {
    name: 'Joseph Pannetta',
    role: 'Co-founder · CTO',
    bg: '#1F2D5C',
    copy: "Engineering lead. Builds production software, maintains the studio's technical bench, and writes most of the code that ends up in front of users.",
    meta: ['Jersey City, NJ', 'joseph@futreng.com'],
  },
];

const PRINCIPLES = [
  { n: 'I.', title: 'Two of us, every time.', italic: 'No hand-offs.' },
  { n: 'II.', title: 'Custom-built.', italic: 'No templates.' },
  { n: 'III.', title: 'Editorial taste, working software.', italic: 'Both, always.' },
  { n: 'IV.', title: 'Fewer clients, longer relationships.' },
];

export function Studio() {
  return (
    <div id="studio" className="border-t-[2px] border-ink" style={{ backgroundColor: '#1A1715', color: '#F2EDE4' }}>
      <FullRule color="#D63B27" h={8} />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-20 md:py-28">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
          Section III — The Studio
        </div>
        <h2 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[140px]">
          Two people.{' '}
          <em className="italic text-red">One studio.</em>
        </h2>
        <p className="mt-8 text-[18px] md:text-[20px] leading-[1.55] max-w-[60ch] font-medium">
          FutreEng is Joseph Pannetta and Haron Wilson. Every project is touched by both of us,
          beginning to end. There is no &ldquo;team&rdquo; being assigned — there&apos;s us, and the work.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {FOUNDERS.map((p, i) => (
            <div key={i}>
              {/* solid={true}: these are deliberate brand-color blocks, not missing-photo placeholders */}
              <ImagePlaceholder
                bg={p.bg}
                caption={`Portrait — ${p.name}, ${p.role.split(' · ')[1]}`}
                ratio="aspect-[4/5]"
                monoColor="#F2EDE4"
                solid
              />
              <div className="mt-6 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">{p.role}</div>
              <h4 className="ff-fraunces mt-2 font-black tracking-[-0.025em] leading-[1] text-[40px] md:text-[52px]">
                {p.name}
              </h4>
              <p className="mt-4 text-[15.5px] leading-[1.65] max-w-[44ch]">{p.copy}</p>
              <div className="mt-5 flex flex-wrap gap-3 ff-mono text-[10.5px] uppercase tracking-[0.22em]" style={{ color: '#F2EDE499' }}>
                {p.meta.map((m, j) => (
                  <span key={j} className="border px-3 py-1.5" style={{ borderColor: '#F2EDE455' }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6 border-t-[2px] pt-10" style={{ borderColor: '#F2EDE4' }}>
          <div className="col-span-12 md:col-span-4 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
            Studio principles
          </div>
          <div className="col-span-12 md:col-span-8">
            <ol className="ff-fraunces text-[28px] md:text-[40px] tracking-[-0.022em] leading-[1.15] font-black">
              {PRINCIPLES.map((p, i) => (
                <li key={i} className="border-b py-5" style={{ borderColor: '#F2EDE444' }}>
                  <span
                    className="ff-mono text-[12px] tracking-[0.24em] uppercase mr-4 align-middle text-red"
                  >
                    {p.n}
                  </span>
                  {p.title}
                  {p.italic && <em className="italic"> {p.italic}</em>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
