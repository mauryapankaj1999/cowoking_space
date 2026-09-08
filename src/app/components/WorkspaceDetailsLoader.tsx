const WorkspaceDetailsLoader = () => {
  return (
    <div className="w-full bg-[#F9FBFC]">
      {/* ================= HEADER ================= */}
      <div className="h-[70px] w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-0">
          {/* Logo */}
          <div className="h-8 w-40 animate-pulse rounded-md bg-slate-200" />

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 lg:flex">
            <div className="h-5 w-16 animate-pulse rounded bg-slate-200" />
            <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />
            <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />
            <div className="h-5 w-20 animate-pulse rounded bg-slate-200" />
            <div className="h-10 w-32 animate-pulse rounded-lg bg-slate-200" />
          </div>

          {/* Mobile Menu */}
          <div className="h-8 w-8 animate-pulse rounded bg-slate-200 lg:hidden" />
        </div>
      </div>

      {/* ================= IMAGE GALLERY ================= */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-0 lg:pt-5">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">

          {/* Left Images */}
          <div className="hidden gap-4 lg:col-span-3 lg:grid">
            <div className="h-[245px] w-full animate-pulse rounded-2xl bg-slate-200" />

            <div className="h-[245px] w-full animate-pulse rounded-2xl bg-slate-200" />
          </div>

          {/* Main Image */}
          <div className="relative h-[250px] w-full animate-pulse rounded-2xl bg-slate-200 sm:h-[350px] lg:col-span-6 lg:h-[505px]" />

          {/* Right Images */}
          <div className="hidden gap-4 lg:col-span-3 lg:grid">
            <div className="h-[245px] w-full animate-pulse rounded-2xl bg-slate-200" />

            <div className="h-[245px] w-full animate-pulse rounded-2xl bg-slate-200" />
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-0 lg:pb-16 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full min-w-0 lg:col-span-8">

            {/* Title */}
            <div className="h-9 w-3/4 animate-pulse rounded-lg bg-slate-200 sm:w-1/2" />

            {/* Address */}
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-slate-200" />

            {/* About */}
            <div className="space-y-4">
              <div className="h-7 w-48 animate-pulse rounded bg-slate-200" />

              <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
            </div>

            <div className="my-8 h-px w-full bg-slate-200" />

            {/* Seating Plans */}
            <div className="space-y-4">
              <div className="h-7 w-48 animate-pulse rounded bg-slate-200" />

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex-1 space-y-3">
                    <div className="h-5 w-36 animate-pulse rounded bg-slate-200" />
                    <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
                    <div className="h-3 w-4/5 animate-pulse rounded bg-slate-200" />
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <div className="h-5 w-20 animate-pulse rounded bg-slate-200" />
                    <div className="h-10 w-28 animate-pulse rounded-lg bg-slate-200" />
                  </div>

                </div>
              </div>
            </div>

            <div className="my-8 h-px w-full bg-slate-200" />

            {/* Office Timing */}
            <div className="space-y-4">
              <div className="h-7 w-44 animate-pulse rounded bg-slate-200" />

              <div className="h-16 w-full animate-pulse rounded-xl bg-slate-200" />
            </div>

            <div className="my-8 h-px w-full bg-slate-200" />

            {/* Amenities */}
            <div className="space-y-4">
              <div className="h-7 w-32 animate-pulse rounded bg-slate-200" />

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="h-5 w-full animate-pulse rounded bg-slate-200"
                  />
                ))}
              </div>
            </div>

          </div>

          {/* ================= RIGHT PRICE CARD ================= */}
          <div className="hidden w-full min-w-0 lg:col-span-4 lg:block">
            <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-6">

              {/* Small heading */}
              <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />

              {/* Price */}
              <div className="mt-4 h-10 w-40 animate-pulse rounded-lg bg-slate-200" />

              {/* Badge */}
              <div className="mt-4 h-7 w-36 animate-pulse rounded-full bg-slate-200" />

              {/* Features */}
              <div className="mt-6 space-y-3">
                <div className="h-10 w-full animate-pulse rounded-lg bg-slate-200" />
                <div className="h-10 w-full animate-pulse rounded-lg bg-slate-200" />
              </div>

              {/* Button */}
              <div className="mt-6 h-12 w-full animate-pulse rounded-lg bg-slate-200" />

            </div>
          </div>

        </div>
      </div>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-4 border-t border-slate-200 bg-white p-4 lg:hidden">

        <div className="space-y-2">
          <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />
          <div className="h-3 w-16 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="h-11 w-28 animate-pulse rounded-lg bg-slate-200" />

      </div>
    </div>
  );
};

export default WorkspaceDetailsLoader;