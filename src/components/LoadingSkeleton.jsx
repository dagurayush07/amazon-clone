function LoadingSkeleton() {
  return (
    <div className="animate-pulse rounded-[28px] border border-slate-800 bg-slate-900/90 p-5 shadow-soft">
      <div className="mb-5 h-72 rounded-[24px] bg-slate-800" />
      <div className="space-y-4">
        <div className="h-5 w-3/4 rounded-full bg-slate-800" />
        <div className="h-4 w-1/2 rounded-full bg-slate-800" />
        <div className="flex items-center gap-3">
          <div className="h-9 w-20 rounded-full bg-slate-800" />
          <div className="h-9 w-16 rounded-full bg-slate-800" />
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;
