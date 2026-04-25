import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'outline';
  children: ReactNode;
  className?: string;
}

export function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const base = 'ff-mono text-[12px] uppercase tracking-[0.24em] px-6 py-4 inline-block transition-opacity';
  const styles =
    variant === 'primary'
      ? 'bg-red text-white hover:opacity-90'
      : 'border-[2px] border-ink text-ink hover:bg-ink hover:text-cream';

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
