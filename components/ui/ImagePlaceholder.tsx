export function ImagePlaceholder({
  bg,
  caption,
  ratio = 'aspect-[4/3]',
  monoColor = '#fff',
}: {
  bg: string;
  caption: string;
  ratio?: string;
  monoColor?: string;
}) {
  return (
    <figure className={`${ratio} w-full relative`} style={{ backgroundColor: bg }}>
      <div className="absolute inset-0 flex items-end p-5">
        <figcaption
          className="ff-mono text-[10.5px] uppercase tracking-[0.22em]"
          style={{ color: monoColor, opacity: 0.85 }}
        >
          {caption}
        </figcaption>
      </div>
    </figure>
  );
}
