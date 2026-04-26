export default function CaseStudyLoading() {
  return (
    <>
      {/* FullRule placeholder */}
      <div className="h-2 bg-red w-full" />

      {/* Header area */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="skeleton h-4 w-48 mb-4" />
        <div className="skeleton h-14 md:h-24 w-4/5 mb-3" />
        <div className="skeleton h-14 md:h-24 w-3/5" />
      </div>

      {/* Hero image */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pb-10">
        <div className="skeleton aspect-[16/9] w-full" />
      </div>

      {/* Meta strip */}
      <div className="border-y-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <div className="skeleton h-3 w-16 mb-2" />
              <div className="skeleton h-4 w-24" />
            </div>
          ))}
        </div>
      </div>

      {/* Brief */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="skeleton h-4 w-24" />
          </div>
          <div className="col-span-12 md:col-span-7 space-y-4">
            <div className="skeleton h-7 w-full" />
            <div className="skeleton h-7 w-4/5" />
            <div className="mt-6 space-y-3">
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
