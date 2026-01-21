export default function Loading() {
  return (
    <main className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 w-full h-full bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-0" />

      <div className="relative z-10 px-6 lg:px-12 py-20">
        {/* Back button skeleton */}
        <div className="mb-12">
          <div className="h-10 w-32 bg-mono-gray/50 animate-pulse" />
        </div>

        {/* Header skeleton */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-4 w-20 bg-hazard/30 animate-pulse" />
            <div className="h-4 w-16 bg-mono-gray/50 animate-pulse" />
          </div>
          <div className="h-16 w-3/4 bg-mono-gray/50 animate-pulse mb-6" />
          <div className="h-6 w-1/2 bg-mono-gray/30 animate-pulse mb-8" />

          {/* Tags skeleton */}
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-6 w-20 bg-mono-gray/50 animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* Content skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {/* Description */}
            <div className="mb-12">
              <div className="h-5 w-32 bg-hazard/30 animate-pulse mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-mono-gray/30 animate-pulse" />
                <div className="h-4 w-5/6 bg-mono-gray/30 animate-pulse" />
                <div className="h-4 w-4/5 bg-mono-gray/30 animate-pulse" />
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <div className="h-5 w-28 bg-hazard/30 animate-pulse mb-4" />
              <div className="space-y-3">
                {[75, 90, 65, 85, 70].map((width, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-hazard/50 animate-pulse" />
                    <div
                      className="h-4 bg-mono-gray/30 animate-pulse"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar skeleton */}
          <div className="lg:col-span-4">
            <div className="border border-mono-gray p-6">
              <div className="h-5 w-24 bg-hazard/30 animate-pulse mb-6" />
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-6 w-full bg-mono-gray/30 animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="fixed top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-hazard/30" />
      <div className="fixed bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-hazard/30" />

      {/* Loading indicator */}
      <div className="fixed bottom-8 left-8 flex items-center gap-2 text-xs font-mono text-gray-500">
        <div className="w-2 h-2 bg-hazard rounded-full animate-pulse" />
        LOADING_PROJECT...
      </div>
    </main>
  );
}
