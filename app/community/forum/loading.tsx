import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import DashboardLayout from "@/components/layout/DashboardLayout"

export default function ForumLoading() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          {/* Header Skeleton */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <Skeleton className="h-10 w-64 mb-2 bg-slate-800" />
              <Skeleton className="h-5 w-96 bg-slate-800" />
            </div>
            <Skeleton className="h-10 w-32 bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardHeader>
                  <Skeleton className="h-6 w-20 bg-slate-700" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                        <div className="flex items-center gap-3">
                          <Skeleton className="w-3 h-3 rounded-full bg-slate-600" />
                          <Skeleton className="h-4 w-16 bg-slate-600" />
                        </div>
                        <Skeleton className="h-5 w-8 bg-slate-600" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Skeleton */}
            <div className="lg:col-span-3">
              {/* Search Bar Skeleton */}
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Skeleton className="h-10 flex-1 bg-slate-700" />
                    <div className="flex gap-2">
                      <Skeleton className="h-10 w-32 bg-slate-700" />
                      <Skeleton className="h-10 w-10 bg-slate-700" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Posts Skeleton */}
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Skeleton className="w-12 h-12 rounded-full bg-slate-700" />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <Skeleton className="h-6 w-3/4 mb-2 bg-slate-700" />
                              <div className="flex items-center gap-4">
                                <Skeleton className="h-4 w-20 bg-slate-700" />
                                <Skeleton className="h-4 w-16 bg-slate-700" />
                                <Skeleton className="h-5 w-16 bg-slate-700" />
                              </div>
                            </div>
                            <Skeleton className="h-8 w-8 bg-slate-700" />
                          </div>
                          <div className="flex gap-2 mb-4">
                            <Skeleton className="h-5 w-16 bg-slate-700" />
                            <Skeleton className="h-5 w-20 bg-slate-700" />
                            <Skeleton className="h-5 w-18 bg-slate-700" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                              <Skeleton className="h-4 w-16 bg-slate-700" />
                              <Skeleton className="h-4 w-16 bg-slate-700" />
                              <Skeleton className="h-4 w-16 bg-slate-700" />
                            </div>
                            <Skeleton className="h-4 w-24 bg-slate-700" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
