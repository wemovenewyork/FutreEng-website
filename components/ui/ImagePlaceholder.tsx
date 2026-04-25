/* FIX 4: Default treatment is a light placeholder (cream bg + ink border) so typography leads.
   Pass solid={true} only for deliberate brand-color blocks (e.g. Studio founder portrait slots)
   where the solid fill is an intentional design element, not a missing-photo indicator. */
export function ImagePlaceholder({
  bg,
  caption,
  ratio = 'aspect-[4/3]',
  monoColor,
  solid = false,
}: {
  bg: string;
  caption: string;
  ratio?: string;
  monoColor?: string;
  solid?: boolean;
}) {
  if (solid) {
    return (
      <figure className={`${ratio} w-full relative`} style={{ backgroundColor: bg }}>
        <div className="absolute inset-0 flex items-end p-5">
          <figcaption
            className="ff-mono text-[10.5px] uppercase tracking-[0.22em]"
            style={{ color: monoColor ?? '#fff', opacity: 0.85 }}
          >
            {caption}
          </figcaption>
        </div>
      </figure>
    );
  }

  // Light treatment: recedes so typography leads; signals "photo coming" without dominating
  return (
    <figure className={`${ratio} w-full relative border-[2px] border-ink bg-cream`}>
      {/* Red square — marks the placeholder as an intentional hold for photography */}
      <div className="absolute top-4 right-4 w-2.5 h-2.5" style={{ backgroundColor: '#D63B27' }} />
      <div className="absolute inset-0 flex items-end p-5">
        <figcaption
          className="ff-mono text-[10.5px] uppercase tracking-[0.22em]"
          style={{ color: '#1A1715', opacity: 0.45 }}
        >
          {caption}
        </figcaption>
      </div>
    </figure>
  );
}
