const CardLoading = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          {/* Image Skeleton */}
          <div className="h-48 w-full animate-pulse bg-slate-200" />

          {/* Content Skeleton */}
          <div className="space-y-3 p-5">
            {/* Title */}
            <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />

            {/* Description */}
            <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-slate-200" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-slate-200" />

            {/* Button */}
            <div className="mt-4 h-9 w-28 animate-pulse rounded-lg bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLoading;