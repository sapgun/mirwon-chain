import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { CircularProgress } from "./circular-progress"
import { StrategyChart } from "./strategy-chart"

export function DeltaNeutralSimulator() {
  return (
    <Card className="bg-[#1E2A3A] text-white border-none shadow-2xl col-span-full rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl text-[#00e6e6]">Delta-Neutral Strategy Simulator</CardTitle>
        <Image
          src="/placeholder.svg?height=30&width=30&text=MirWon+Logo"
          alt="MirWon Logo"
          width={30}
          height={30}
          className="mr-3"
        />
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Parameters Section */}
        <div className="col-span-1 space-y-6 p-4 bg-[#2A3B4D] rounded-2xl">
          <h3 className="text-lg font-semibold text-gray-300">Parameters</h3>
          <div>
            <label htmlFor="asset-price" className="block text-sm font-medium text-gray-400 mb-2">
              Asset Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <Input
                id="asset-price"
                type="text"
                defaultValue="230.50"
                className="pl-8 bg-[#1E2A3A] border-none text-white focus-visible:ring-[#00e6e6] rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="collateral" className="block text-sm font-medium text-gray-400 mb-2">
              Collateral
            </label>
            <Slider
              id="collateral"
              defaultValue={[85000]}
              max={100000}
              step={1000}
              className="[&>span:first-child]:bg-[#00e6e6]"
            />
            <div className="text-right text-sm text-gray-400">$85,000</div>
          </div>
          <div>
            <label htmlFor="leverage" className="block text-sm font-medium text-gray-400 mb-2">
              Leverage
            </label>
            <Slider
              id="leverage"
              defaultValue={[2.5]}
              max={5}
              step={0.1}
              className="[&>span:first-child]:bg-[#00e6e6]"
            />
            <div className="text-right text-sm text-gray-400">2.5x</div>
          </div>
          <div>
            <label htmlFor="scenario" className="block text-sm font-medium text-gray-400 mb-2">
              Scenario
            </label>
            <Select defaultValue="stress-test">
              <SelectTrigger id="scenario" className="w-full bg-[#1E2A3A] border-none text-white rounded-md">
                <SelectValue placeholder="Select scenario" />
              </SelectTrigger>
              <SelectContent className="bg-[#2A3B4D] text-white border-none">
                <SelectItem value="stress-test">Stress Test</SelectItem>
                <SelectItem value="normal">Normal Market</SelectItem>
                <SelectItem value="volatile">Volatile Market</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full bg-[#00e6e6] text-gray-900 hover:bg-[#00c2c2] font-semibold rounded-md">
            Start Simulation
          </Button>
          <div className="space-y-4 pt-4 border-t border-gray-700">
            <h3 className="text-lg font-semibold text-gray-300">Parameters</h3>
            <div>
              <label htmlFor="scenario-2" className="block text-sm font-medium text-gray-400 mb-2">
                Scenario
              </label>
              <Select defaultValue="stress-test-2">
                <SelectTrigger id="scenario-2" className="w-full bg-[#1E2A3A] border-none text-white rounded-md">
                  <SelectValue placeholder="Select scenario" />
                </SelectTrigger>
                <SelectContent className="bg-[#2A3B4D] text-white border-none">
                  <SelectItem value="stress-test-2">Stress Test</SelectItem>
                  <SelectItem value="normal-2">Normal Market</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Real-Time Portfolio Value Section */}
        <div className="col-span-1 space-y-6 p-4 bg-[#2A3B4D] rounded-2xl">
          <h3 className="text-lg font-semibold text-gray-300">Real-Time Portfolio Value</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-gray-400 text-sm">Collateral</p>
              <p className="text-xl font-bold">161.24%</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">P&L</p>
              <p className="text-xl font-bold text-red-500">-$471.25</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Delta</p>
              <p className="text-xl font-bold text-[#00e6e6]">$1.81k</p>
            </div>
          </div>
          <div className="flex items-center justify-center mb-4">
            <Badge className="bg-[#00e6e6] text-gray-900 px-3 py-1 rounded-full">Active</Badge>
          </div>
          <div className="flex flex-col items-center justify-center">
            <CircularProgress
              value={128430}
              max={180000}
              size={140}
              centerContent={
                <div className="text-center">
                  <div className="text-xl font-bold text-white">$128,430</div>
                  <div className="text-xs text-gray-400 mt-1">Real-Time</div>
                  <div className="text-xs text-gray-400">Portfolio Value</div>
                </div>
              }
            />
            <span className="text-sm text-gray-400 mt-2">180k</span>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Strategy Outcomes</h3>
            <p className="text-gray-400 text-sm mb-2">Line Chart</p>
            <StrategyChart />
            <div className="flex justify-around text-sm mt-2">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#00e6e6] mr-1"></span>
                Portfolio
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                Hedge
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                Collateral
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Log Section */}
        <div className="col-span-1 space-y-6 p-4 bg-[#2A3B4D] rounded-2xl">
          <h3 className="text-lg font-semibold text-gray-300">Strategy Log</h3>
          <div className="space-y-3 text-sm max-h-64 overflow-y-auto pr-2">
            {[
              "13:12:19 Hedge, adjusted, delta neutral maintained",
              "13:08:45 Collateral ratio reached airruss test inreahoid",
              "13:00:43 Addabsv value tirost to new",
              "13:08:41 Hedge termilinated asset pitt",
              "13:00:43 Microneations hadge asset order wiater",
              "13:02:45 Collateral ratio excited stress test inreahoid",
              "13:00:43 Frotheid radio delta, delta neutral maintaine!",
              "13:02:45 Collateral ratio excited stress test inreahoid",
            ].map((log, index) => (
              <p key={index} className="text-gray-400">
                {log}
              </p>
            ))}
          </div>
          <div className="space-y-4 pt-4 border-t border-gray-700">
            <h3 className="text-lg font-semibold text-gray-300">Strategy Outcomes</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Final Portfolio Value</span>
                <span className="font-bold">$125,248</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Max Drawdown</span>
                <span className="font-bold text-red-500">-$3,364</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Avg Collateral Ratio</span>
                <span className="font-bold">155.76%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
