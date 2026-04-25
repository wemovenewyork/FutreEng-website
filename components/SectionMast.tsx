import { FullRule } from '@/components/ui/FullRule';

interface SectionMastProps {
  section: string;
  kicker: string;
  title: string;
  italicTail?: string;
  dek?: string;
}

export function SectionMast({ section, kicker, title, italicTail, dek }: SectionMastProps) {
  return (
    <>
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="ff-mono text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: '#D63B27' }}>
          Section {section} — {kicker}
        </div>
        <h2 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[140px]">
          {title}
          {italicTail && (
            <>
              <br />
              <em className="italic" style={{ color: '#1F2D5C' }}>
                {italicTail}
              </em>
            </>
          )}
        </h2>
        {dek && (
          <p className="ff-mono mt-7 text-[16px] md:text-[18px] leading-[1.55] max-w-[58ch] font-medium">
            {dek}
          </p>
        )}
      </div>
    </>
  );
}
