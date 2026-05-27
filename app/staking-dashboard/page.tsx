import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { AlertTriangle, ArrowUpRight } from "lucide-react"
import DashboardLayout from "../../components/layout/DashboardLayout"
import PageTransition from "../../components/layout/PageTransition"

export default function StakingDashboard() {
  return (
    <DashboardLayout title="스테이킹 대시보드" description="스테이킹 및 위임 관리, 밸리데이터 성과 모니터링">
      <PageTransition>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Validators List Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl col-span-1 rounded-2xl hover:bg-white/15 transition-all">
            <CardHeader>
              <CardTitle className="text-xl text-teal-400">Validators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: "Shinhan Bank",
                  id: "S001",
                  active: true,
                  logo: "/placeholder.svg?height=40&width=40&text=Shinhan",
                },
                {
                  name: "KB Kookmin Bank",
                  id: "S002",
                  active: true,
                  logo: "/placeholder.svg?height=40&width=40&text=KBK",
                },
                { name: "Toss Bank", id: "S003", active: false, logo: "/placeholder.svg?height=40&width=40&text=Toss" },
                {
                  name: "NongHyup Bank",
                  id: "S004",
                  active: true,
                  logo: "/placeholder.svg?height=40&width=40&text=NongHyup",
                },
                {
                  name: "Woori Bank",
                  id: "S005",
                  active: false,
                  logo: "/placeholder.svg?height=40&width=40&text=Woori",
                },
              ].map((validator) => (
                <div
                  key={validator.id}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 cursor-pointer transition-all group"
                >
                  <div className="flex items-center">
                    <Image
                      src={validator.logo || "/placeholder.svg"}
                      alt={validator.name}
                      width={30}
                      height={30}
                      className="rounded-full mr-3 bg-slate-700 p-1 group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <p className="font-semibold">{validator.name}</p>
                      <p className="text-xs text-slate-400">{validator.id}</p>
                    </div>
                  </div>
                  <Badge
                    className={`${validator.active ? "bg-teal-500 text-slate-900" : "bg-slate-600 text-white"} px-2 py-0.5 rounded-full text-xs`}
                  >
                    {validator.active ? "ACTIVE" : "INACTIVE"}
                  </Badge>
                </div>
              ))}
              <div className="space-y-2 pt-4">
                <Button className="w-full bg-teal-500 text-slate-900 hover:bg-teal-400 transition-all hover:scale-105">
                  Delegate
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-400 hover:bg-slate-700 bg-transparent"
                >
                  Unbond
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Selected Validator Details Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl col-span-2 lg:col-span-1 rounded-2xl hover:bg-white/15 transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=Shinhan"
                  alt="Shinhan Bank"
                  width={40}
                  height={40}
                  className="rounded-full mr-3 bg-slate-700 p-1"
                />
                <CardTitle className="text-xl text-teal-400">Shinhan Bank</CardTitle>
              </div>
              <span className="text-slate-400 text-sm">S001</span>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-slate-400 text-sm">Delegated</p>
                  <p className="text-xl font-bold">1,250,938 MRW</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Self-Staked</p>
                  <p className="text-xl font-bold">500,000 MRW</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Rewards</p>
                  <p className="text-xl font-bold text-teal-400">28,194 MRW</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-300 mb-2">PERFORMANCE</h3>
                <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
                  <span>7 DAY</span>
                  <span>1 Month</span>
                </div>
                {/* Placeholder for performance graph */}
                <div className="h-24 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-800 transition-colors">
                  Performance Chart
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-300 mb-2">Rankings</h3>
                {/* Placeholder for rankings bar chart */}
                <div className="h-24 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-800 transition-colors">
                  Rankings Chart
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column Cards */}
          <div className="col-span-1 space-y-6">
            {/* Network Status Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">Network Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Block Height</span>
                  <span className="font-bold">6,801,192</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Participation Rate</span>
                  <span className="font-bold text-teal-400">73.96%</span>
                </div>
              </CardContent>
            </Card>

            {/* Slashing Events Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">Slashing Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex flex-col p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                  <span className="font-semibold">S013 Alternative Fund Node 3</span>
                  <span className="text-slate-400">Slashed 60m 1s ago</span>
                  <span className="text-slate-500">Standard slash message text</span>
                </div>
                <div className="flex flex-col p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                  <span className="font-semibold">S022 Deferred Fund Node 3</span>
                  <span className="text-slate-400">Slashed 2h ago</span>
                  <span className="text-slate-500">Standard slash message text</span>
                </div>
              </CardContent>
            </Card>

            {/* Upgrades & Updates Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">Upgrades & Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Current Version</span>
                  <span className="font-bold">v1.9.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Shire Upgrade</span>
                  <span className="font-bold text-teal-400">Coming soon</span>
                </div>
                <Button variant="link" className="text-teal-400 hover:text-teal-300 p-0 h-auto">
                  View All <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Alerts Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Today</span>
                  <Badge className="bg-yellow-500 text-slate-900 px-2 py-0.5 rounded-full text-xs flex items-center">
                    <AlertTriangle className="h-3 w-3 mr-1" /> Alert 3
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Slashing</span>
                  <Badge className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs flex items-center">
                    <AlertTriangle className="h-3 w-3 mr-1" /> Alert
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Unbound</span>
                  <Badge className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs flex items-center">
                    <AlertTriangle className="h-3 w-3 mr-1" /> Alert 2
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  )
}
