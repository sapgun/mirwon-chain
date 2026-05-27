import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import { MiniChart } from "./mini-chart"

export function LiquidityDashboard() {
  return (
    <div className="text-white font-sans">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-1 flex flex-col gap-6">
          <nav className="space-y-4">
            <a href="#" className="block text-[#00e6e6] font-semibold">
              Liquidity Pools
            </a>
            <a href="#" className="block text-white hover:text-[#00e6e6]">
              Deposit
            </a>
            <a href="#" className="block text-white hover:text-[#00e6e6]">
              Swap
            </a>
            <a href="#" className="block text-white hover:text-[#00e6e6]">
              Platforms
            </a>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Total Liquidity Card */}
          <Card className="bg-[#1E2A3A] text-white border-none shadow-2xl col-span-1 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-300">Total Liquidity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-4xl font-bold">$74,205,188</p>
              </div>
              <div className="flex items-center mb-4">
                <Badge className="bg-[#1E2A3A] text-[#00e6e6] px-3 py-1 rounded-full border border-[#00e6e6]">
                  APY
                </Badge>
                <div className="ml-2 w-16 h-6">
                  {/* Placeholder for small chart */}
                  <div className="w-full h-full bg-[#2A3B4D] rounded-md relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-[#00e6e6] to-transparent"></div>
                  </div>
                </div>
              </div>
              {/* Placeholder for APY chart */}
              <div className="h-24 bg-[#2A3B4D] rounded-md p-2">
                <MiniChart height={80} />
              </div>
            </CardContent>
          </Card>

          {/* MRW / USDC Pool Card */}
          <Card className="bg-[#1E2A3A] text-white border-none shadow-2xl col-span-1 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-300">MRW / USDC Pool</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-4xl font-bold">$27,493,012</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-[#1E2A3A] text-[#00e6e6] px-3 py-1 rounded-full border border-[#00e6e6]">
                  APY+
                </Badge>
                <span className="text-2xl font-bold">45.83%</span>
              </div>
              {/* Placeholder for APY chart */}
              <div className="h-24 bg-[#2A3B4D] rounded-md p-2">
                <MiniChart height={80} />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="col-span-2 flex gap-4">
            <Button className="flex-1 bg-gradient-to-r from-[#00e6e6] to-[#00a0a0] text-gray-900 hover:opacity-90 font-semibold py-6 text-lg">
              Deposit
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 bg-transparent py-6 text-lg"
            >
              Swap
            </Button>
          </div>

          {/* Platform Logos */}
          <div className="col-span-2 flex flex-wrap gap-4 items-center">
            <Badge className="bg-[#1E2A3A] text-white px-4 py-2 text-lg rounded-full">Bittrex</Badge>
            <Badge className="bg-[#1E2A3A] text-white px-4 py-2 text-lg rounded-full">bittrex</Badge>
            <Badge className="bg-[#1E2A3A] text-white px-4 py-2 text-lg rounded-full">bitstamp</Badge>
          </div>

          {/* Blockchain Platform Cards */}
          <Card className="bg-[#1E2A3A] text-white border-none shadow-2xl rounded-2xl">
            <CardContent className="flex items-center p-4">
              <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">O</span>
              </div>
              <div>
                <p className="text-xl font-bold">Osmosis</p>
                <p className="text-sm text-gray-400">(Cosmos)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1E2A3A] text-white border-none shadow-2xl rounded-2xl">
            <CardContent className="flex items-center p-4">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">E</span>
              </div>
              <div>
                <p className="text-xl font-bold">Evmos</p>
                <p className="text-sm text-gray-400">Cosmos</p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions Card */}
          <Card className="bg-[#1E2A3A] text-white border-none shadow-2xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-[#00e6e6]">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Swap</p>
                  <p className="text-sm text-gray-400">8m ago</p>
                </div>
                <span className="font-mono">$1,300.44</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Add Liquidity</p>
                  <p className="text-sm text-gray-400">15m ago</p>
                </div>
                <span className="font-mono">$754.33</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Swap</p>
                  <p className="text-sm text-gray-400">38m ago</p>
                </div>
                <span className="font-mono">$2,540.90</span>
              </div>
            </CardContent>
          </Card>

          {/* Liquidity Changes Card */}
          <Card className="bg-[#1E2A3A] text-white border-none shadow-2xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-[#00e6e6]">Liquidity Changes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span>MRW / USDC</span>
                <span className="text-green-500">+0.14%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>ETH → MRW</span>
                <span className="text-green-500">+0.06%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>MRW → ATOM</span>
                <span>10.12%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>ETH → MRW</span>
                <span>1.354</span>
              </div>
              <div className="flex justify-between items-center">
                <span>ETH → MRW</span>
                <span>2.134</span>
              </div>
            </CardContent>
          </Card>

          {/* Incentives Card */}
          <Card className="bg-[#1E2A3A] text-white border-none shadow-2xl col-span-2 md:col-span-1 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-[#00e6e6]">Incentives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-gray-400">Estimated Rewards</p>
                <p className="text-4xl font-bold">$371.08</p>
              </div>
              <div>
                <p className="text-gray-400">Pending MIR won</p>
                <div className="flex items-center">
                  <p className="text-2xl font-bold">218.2</p>
                  <Button size="sm" variant="ghost" className="ml-2 p-1 rounded-full">
                    <Play className="h-4 w-4 text-[#00e6e6]" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incentitives Card (duplicate with chart) */}
          <Card className="bg-[#1E2A3A] text-white border-none shadow-2xl col-span-2 md:col-span-1 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-[#00e6e6]">Incentitives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">ASSAI-ing POM</p>
                <p className="text-4xl font-bold">$371.08</p>
              </div>
              {/* Placeholder for chart */}
              <div className="h-16 bg-[#2A3B4D] rounded-md relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-full">
                  <div className="absolute bottom-5 left-0 w-full">
                    <svg height="30" width="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path
                        d="M0,10 Q10,5 20,12 T40,8 T60,15 T80,5 T100,10"
                        fill="none"
                        stroke="#00e6e6"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
