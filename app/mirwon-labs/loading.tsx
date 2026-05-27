import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function MirWonLabsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section Skeleton */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-teal-500/10 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Skeleton className="w-12 h-12 rounded-full" />
              <Skeleton className="h-12 w-64" />
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
            <Skeleton className="h-6 w-96 mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-8 w-32" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-slate-900/50 border-slate-700/50">
              <CardHeader className="text-center">
                <Skeleton className="w-12 h-12 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-32 mx-auto" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-16 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Section Skeleton */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-4 w-96 mx-auto" />
          </div>

          <Skeleton className="h-12 w-full mb-8" />

          <Card className="bg-slate-900/50 border-slate-700/50">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-xl" />
                  <div>
                    <Skeleton className="h-8 w-48 mb-2" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
                <div className="text-right">
                  <Skeleton className="h-6 w-20 mb-2" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-2 w-24 mt-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-16 w-full mb-6" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Skeleton className="h-6 w-24 mb-3" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} className="h-4 w-full" />
                    ))}
                  </div>
                </div>
                <div>
                  <Skeleton className="h-6 w-24 mb-3" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
