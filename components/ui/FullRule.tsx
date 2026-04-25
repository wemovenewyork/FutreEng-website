export function FullRule({
  color = '#D63B27',
  h = 8,
}: {
  color?: string;
  h?: number;
}) {
  return <div style={{ height: h, backgroundColor: color }} />;
}
