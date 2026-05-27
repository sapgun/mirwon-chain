import DashboardLayout from "../../../components/layout/DashboardLayout"
import PageTransition from "../../../components/layout/PageTransition"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink, Copy, Clock, Hash, User, Coins, Activity, TrendingUp } from "lucide-react"

export default function TransactionExplorer() {
  return (
    <DashboardLayout title="트랜잭션 탐색기" description="블록체인 트랜잭션, 블록, 계정 정보 실시간 조회">
      <PageTransition>
        {/* Search Section */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl mb-8">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="트랜잭션 해시, 블록 높이, 계정 주소 검색..."
                  className="bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 h-12 text-lg"
                />
              </div>
              <Button className="bg-teal-500 text-slate-900 hover:bg-teal-400 px-8 h-12">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-teal-500 rounded-full flex items-center justify-center mb-4">
                <Hash className="h-6 w-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">2,847,392</h3>
              <p className="text-slate-400 text-sm">Latest Block</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">1,247</h3>
              <p className="text-slate-400 text-sm">Transactions (24h)</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">18,492</h3>
              <p className="text-slate-400 text-sm">Active Accounts</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">$74.2M</h3>
              <p className="text-slate-400 text-sm">Total Value Locked</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Blocks */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-teal-400">Recent Blocks</CardTitle>
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  height: "2,847,392",
                  hash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z",
                  txs: 23,
                  time: "2 seconds ago",
                  proposer: "Shinhan Bank",
                },
                {
                  height: "2,847,391",
                  hash: "0x9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r",
                  txs: 18,
                  time: "8 seconds ago",
                  proposer: "KB Bank",
                },
                {
                  height: "2,847,390",
                  hash: "0x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x",
                  txs: 31,
                  time: "14 seconds ago",
                  proposer: "Hana Bank",
                },
                {
                  height: "2,847,389",
                  hash: "0x1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d",
                  txs: 12,
                  time: "20 seconds ago",
                  proposer: "Woori Bank",
                },
              ].map((block, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-4 rounded-xl border border-slate-700 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-teal-500 text-slate-900 px-2 py-1 text-xs font-mono">#{block.height}</Badge>
                      <span className="text-slate-400 text-sm flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {block.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-slate-700 text-slate-300 px-2 py-1 text-xs">{block.txs} txs</Badge>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mb-2">
                    {block.hash.slice(0, 20)}...{block.hash.slice(-20)}
                  </div>
                  <div className="text-sm text-slate-300">
                    Proposed by <span className="text-teal-400">{block.proposer}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-teal-400">Recent Transactions</CardTitle>
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  hash: "0xa1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6",
                  type: "Send",
                  amount: "1,250.00 MRW",
                  from: "mrw1abc123...",
                  to: "mrw1def456...",
                  time: "5 seconds ago",
                  status: "Success",
                },
                {
                  hash: "0xb2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1",
                  type: "Delegate",
                  amount: "5,000.00 MRW",
                  from: "mrw1ghi789...",
                  to: "Shinhan Bank",
                  time: "12 seconds ago",
                  status: "Success",
                },
                {
                  hash: "0xc3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2",
                  type: "Swap",
                  amount: "750.00 MRW",
                  from: "mrw1jkl012...",
                  to: "Pool #1",
                  time: "18 seconds ago",
                  status: "Success",
                },
                {
                  hash: "0xd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3",
                  type: "Send",
                  amount: "2,100.00 MRW",
                  from: "mrw1mno345...",
                  to: "mrw1pqr678...",
                  time: "25 seconds ago",
                  status: "Pending",
                },
              ].map((tx, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-4 rounded-xl border border-slate-700 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Badge
                        className={`px-2 py-1 text-xs ${
                          tx.type === "Send"
                            ? "bg-blue-500 text-white"
                            : tx.type === "Delegate"
                              ? "bg-purple-500 text-white"
                              : "bg-green-500 text-white"
                        }`}
                      >
                        {tx.type}
                      </Badge>
                      <span className="text-slate-400 text-sm flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {tx.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={`px-2 py-1 text-xs ${
                          tx.status === "Success"
                            ? "bg-green-500 text-white"
                            : tx.status === "Pending"
                              ? "bg-yellow-500 text-slate-900"
                              : "bg-red-500 text-white"
                        }`}
                      >
                        {tx.status}
                      </Badge>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mb-2">
                    {tx.hash.slice(0, 20)}...{tx.hash.slice(-20)}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-slate-300">
                      <span className="text-slate-400">From:</span> {tx.from}
                    </div>
                    <div className="text-teal-400 font-semibold flex items-center gap-1">
                      <Coins className="h-3 w-3" />
                      {tx.amount}
                    </div>
                  </div>
                  <div className="text-sm text-slate-300 mt-1">
                    <span className="text-slate-400">To:</span> {tx.to}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </PageTransition>
    </DashboardLayout>
  )
}
