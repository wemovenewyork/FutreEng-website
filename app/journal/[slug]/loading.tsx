export default function JournalPostLoading() {
  return (
    <>
      {/* FullRule placeholder */}
      <div className="h-2 bg-red w-full" />

      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="skeleton h-4 w-56 mb-4" />
        <div className="skeleton h-12 md:h-20 w-full max-w-[18ch] mb-3" />
        <div className="skeleton h-12 md:h-20 w-3/4 max-w-[18ch] mb-6" />
        <div className="skeleton h-5 w-80" />
      </div>

      {/* Body */}
      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-2 space-y-2">
              <div className="skeleton h-3 w-28" />
              <div className="skeleton h-3 w-20" />
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5">
              {[100, 90, 100, 85, 100, 75, 95].map((w, i) => (
                <div key={i} className={`skeleton h-5`} style={{ width: `${w}%` }} />
              ))}
              <div className="pt-4 space-y-3">
                {[100, 88, 100, 80].map((w, i) => (
                  <div key={i} className="skeleton h-5" style={{ width: `${w}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
