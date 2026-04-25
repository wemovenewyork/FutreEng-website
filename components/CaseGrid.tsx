import { CASES } from '@/lib/cases';
import { CaseCard } from '@/components/CaseCard';

export function CaseGrid({ limit }: { limit?: number }) {
  const cases = CASES.slice(1, limit ? limit + 1 : undefined);
  return (
    <div className="border-t-[2px] border-ink">
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-20">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-10 text-red">
          Also in this issue — Selected work, continued
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {cases.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
