import { ReactNode } from 'react';

export function Kicker({ children, color = '#D63B27' }: { children: ReactNode; color?: string }) {
  return (
    <div
      className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4"
      style={{ color }}
    >
      {children}
    </div>
  );
}
