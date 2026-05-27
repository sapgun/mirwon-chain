import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { DeltaNeutralSimulator } from "../../components/delta-neutral-simulator"
import { DonutChart } from "../../components/donut-chart"
import DashboardLayout from "../../components/layout/DashboardLayout"
import PageTransition from "../../components/layout/PageTransition"

export default function ValidatorConsole() {
  return (
    <DashboardLayout title="밸리데이터 콘솔" description="기관 밸리데이터 관리 및 거버넌스 참여">
      <PageTransition>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl p-6">
              <CardContent className="p-0">
                {/* Bank Logos Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-2xl p-4 flex items-center justify-center hover:scale-105 transition-transform">
                    <Image
                      src="/placeholder.svg?height=50&width=50&text=S&color=0066cc"
                      alt="Shinhan Bank"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="bg-white rounded-2xl p-4 flex items-center justify-center hover:scale-105 transition-transform">
                    <Image
                      src="/placeholder.svg?height=50&width=50&text=H&color=00cc66"
                      alt="Hana Bank"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="bg-white rounded-2xl p-4 flex items-center justify-center hover:scale-105 transition-transform">
                    <Image
                      src="/placeholder.svg?height=50&width=50&text=KB&color=ffcc00"
                      alt="KB Bank"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="bg-white rounded-2xl p-4 flex items-center justify-center hover:scale-105 transition-transform">
                    <Image
                      src="/placeholder.svg?height=50&width=50&text=IBK&color=ff6600"
                      alt="IBK Bank"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="bg-slate-700 rounded-2xl p-4 flex items-center justify-center hover:scale-105 transition-transform">
                    <span className="text-white font-bold text-lg">KBK</span>
                  </div>
                  <div className="bg-blue-600 rounded-2xl p-4 flex items-center justify-center hover:scale-105 transition-transform">
                    <span className="text-white font-bold text-lg">IBK</span>
                  </div>
                </div>

                {/* Node Status */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Node Status</h3>
                  <Select defaultValue="active">
                    <SelectTrigger className="w-full bg-white/10 border-white/20 text-white rounded-xl h-12">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 text-white border-slate-700 rounded-xl">
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="syncing">Syncing</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-teal-400 mb-4">Current Status</h3>
                    <div className="bg-white/10 rounded-xl p-4">
                      <Badge className="bg-green-500 text-white">Active</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content Area */}
          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mint MRW Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white">Mint MRW</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Balance</p>
                    <p className="text-4xl font-bold text-white">
                      3,750 <span className="text-slate-400 text-2xl">MRW</span>
                    </p>
                  </div>
                  <Badge className="bg-teal-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                    Active
                  </Badge>
                </div>

                <Button className="w-full bg-teal-500 text-slate-900 hover:bg-teal-400 font-semibold py-4 rounded-xl text-lg transition-all hover:scale-105">
                  Mint MRW
                </Button>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Recent Transactions</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl hover:bg-white/15 transition-colors">
                      <div>
                        <p className="text-white font-medium">Transaction</p>
                        <p className="text-slate-400 text-sm">F560P</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">Amount (MRW)</p>
                        <p className="text-teal-400 font-bold">+1,200</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl hover:bg-white/15 transition-colors">
                      <div>
                        <p className="text-white font-medium">F750</p>
                      </div>
                      <div>
                        <p className="text-teal-400 font-bold">+750</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Governance Voting Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white">Governance Voting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Proposal #12</h3>
                      <p className="text-slate-400">Protocol Upgrade</p>
                    </div>
                    <span className="text-2xl font-bold text-teal-400">63%</span>
                  </div>
                  <Progress
                    value={63}
                    className="w-full h-3 bg-white/20 rounded-full [&>*]:bg-teal-500 [&>*]:rounded-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">Validators</h3>
                    <h3 className="text-lg font-semibold text-white">Votes</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Shinhan Bank", vote: "Yes", color: "text-teal-400" },
                      { name: "Hana Bank", vote: "No", color: "text-red-400" },
                      { name: "KB Bank", vote: "Yes", color: "text-teal-400" },
                      { name: "IBK Bank", vote: "Abstain", color: "text-yellow-400" },
                    ].map((validator, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-white/10 p-3 rounded-xl hover:bg-white/15 transition-colors"
                      >
                        <span className="text-white font-medium">{validator.name}</span>
                        <span className={`font-bold ${validator.color}`}>{validator.vote}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reserve Ratio Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white">Reserve Ratio</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="text-6xl font-bold text-teal-400">418%</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-teal-400 mr-3"></span>
                      <span className="text-slate-300">Shinhan Bank</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                      <span className="text-slate-300">Hana Bank</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
                      <span className="text-slate-300">KB Kookmin Bank</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <DonutChart
                    data={[
                      { name: "Shinhan Bank", value: 45, color: "#14b8a6" },
                      { name: "Hana Bank", value: 30, color: "#3b82f6" },
                      { name: "KB Kookmin Bank", value: 25, color: "#10b981" },
                    ]}
                    centerText="MI%"
                    size={120}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Voting Ratio Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white">Voting Ratio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-slate-300">Votes</span>
                  <span className="text-lg text-slate-300">Voting Power</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl hover:bg-white/15 transition-colors">
                    <span className="text-2xl font-bold text-teal-400">Yes</span>
                    <span className="text-2xl font-bold text-white">38%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl hover:bg-white/15 transition-colors">
                    <span className="text-2xl font-bold text-red-400">No</span>
                    <span className="text-2xl font-bold text-white">33%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Delta Neutral Simulator - Full Width */}
          <div className="col-span-full mt-8">
            <DeltaNeutralSimulator />
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  )
}
