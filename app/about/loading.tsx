import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation Skeleton */}
      <div className="sticky top-0 bg-slate-950/90 backdrop-blur-md z-40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Skeleton className="h-10 w-32 bg-slate-800" />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Skeleton className="w-32 h-32 rounded-full mx-auto mb-8 bg-slate-800" />
          <Skeleton className="h-16 w-96 mx-auto mb-6 bg-slate-800" />
          <Skeleton className="h-12 w-80 mx-auto mb-8 bg-slate-800" />
          <Skeleton className="h-8 w-64 mx-auto mb-12 bg-slate-800" />
          <div className="flex justify-center gap-4 mb-16">
            <Skeleton className="h-10 w-32 bg-slate-800" />
            <Skeleton className="h-10 w-32 bg-slate-800" />
            <Skeleton className="h-10 w-32 bg-slate-800" />
          </div>
        </div>
      </section>

      {/* Why Money Should Work Section Skeleton */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-12 w-96 mx-auto mb-16 bg-slate-800" />
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Skeleton className="h-96 bg-slate-800" />
            <Skeleton className="h-96 bg-slate-800" />
            <Skeleton className="h-96 bg-slate-800" />
          </div>
          <Skeleton className="h-80 bg-slate-800" />
        </div>
      </section>

      {/* Content Sections Skeleton */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-12 w-96 mx-auto mb-16 bg-slate-800" />
          <div className="grid md:grid-cols-2 gap-12">
            <Skeleton className="h-80 bg-slate-800" />
            <Skeleton className="h-80 bg-slate-800" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-12 w-64 mx-auto mb-16 bg-slate-800" />
          <div className="grid md:grid-cols-3 gap-8">
            <Skeleton className="h-96 bg-slate-800" />
            <Skeleton className="h-96 bg-slate-800" />
            <Skeleton className="h-96 bg-slate-800" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-12 w-80 mx-auto mb-16 bg-slate-800" />
          <div className="grid md:grid-cols-3 gap-8">
            <Skeleton className="h-64 bg-slate-800" />
            <Skeleton className="h-64 bg-slate-800" />
            <Skeleton className="h-64 bg-slate-800" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-12 w-72 mx-auto mb-16 bg-slate-800" />
          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="h-64 bg-slate-800" />
            <Skeleton className="h-64 bg-slate-800" />
            <Skeleton className="h-64 bg-slate-800" />
            <Skeleton className="h-64 bg-slate-800" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="w-20 h-20 rounded-full mx-auto mb-8 bg-slate-800" />
          <Skeleton className="h-12 w-96 mx-auto mb-6 bg-slate-800" />
          <Skeleton className="h-32 w-full max-w-2xl mx-auto mb-12 bg-slate-800" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-48 bg-slate-800" />
            <Skeleton className="h-12 w-32 bg-slate-800" />
          </div>
        </div>
      </section>
    </div>
  )
}
