import DashboardLayout from "../../components/layout/DashboardLayout"
import PageTransition from "../../components/layout/PageTransition"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Key, Globe, BookOpen, Search, Activity, Download, ExternalLink, Copy, Eye, Settings } from "lucide-react"
import Link from "next/link"

export default function DeveloperPortal() {
  return (
    <DashboardLayout title="개발자 포털" description="MirWon API, SDK, 테스트넷 및 개발 도구에 대한 통합 접근">
      <PageTransition>
        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all group cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-teal-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Key className="h-6 w-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">API Keys</h3>
              <p className="text-slate-400 text-sm">API 키 발급 및 관리</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all group cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">SDK</h3>
              <p className="text-slate-400 text-sm">개발 도구 및 라이브러리</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all group cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Testnet</h3>
              <p className="text-slate-400 text-sm">테스트 네트워크 접근</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all group cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Docs</h3>
              <p className="text-slate-400 text-sm">개발 문서 및 가이드</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - API Management */}
          <div className="lg:col-span-2 space-y-6">
            {/* API Keys Management */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl text-teal-400">API Keys Management</CardTitle>
                <Button className="bg-teal-500 text-slate-900 hover:bg-teal-400">
                  <Key className="h-4 w-4 mr-2" />
                  New API Key
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "Production API Key",
                    key: "mrw_prod_1a2b3c4d5e6f...",
                    status: "Active",
                    requests: "1,247",
                    limit: "10,000",
                  },
                  {
                    name: "Development API Key",
                    key: "mrw_dev_9z8y7x6w5v4u...",
                    status: "Active",
                    requests: "342",
                    limit: "1,000",
                  },
                  {
                    name: "Testing API Key",
                    key: "mrw_test_m9n8b7v6c5x4...",
                    status: "Inactive",
                    requests: "0",
                    limit: "500",
                  },
                ].map((apiKey, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-xl border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold text-white">{apiKey.name}</h4>
                        <Badge
                          className={`${
                            apiKey.status === "Active" ? "bg-green-500 text-white" : "bg-slate-600 text-slate-300"
                          } px-2 py-0.5 rounded-full text-xs`}
                        >
                          {apiKey.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                      <span className="font-mono">{apiKey.key}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">
                        Requests: <span className="text-white">{apiKey.requests}</span> / {apiKey.limit}
                      </span>
                      <span className="text-slate-400">
                        Rate Limit: <span className="text-teal-400">100 req/min</span>
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* SDK Downloads */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">SDK & Libraries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "JavaScript SDK",
                      version: "v2.1.0",
                      description: "Node.js 및 브라우저용 JavaScript SDK",
                      downloads: "12.5k",
                      language: "JavaScript",
                    },
                    {
                      name: "Python SDK",
                      version: "v1.8.2",
                      description: "Python 애플리케이션용 SDK",
                      downloads: "8.2k",
                      language: "Python",
                    },
                    {
                      name: "Go SDK",
                      version: "v1.5.1",
                      description: "Go 언어용 고성능 SDK",
                      downloads: "5.1k",
                      language: "Go",
                    },
                    {
                      name: "Rust SDK",
                      version: "v0.9.0",
                      description: "Rust 생태계용 SDK (베타)",
                      downloads: "1.8k",
                      language: "Rust",
                    },
                  ].map((sdk, index) => (
                    <div
                      key={index}
                      className="bg-white/5 p-4 rounded-xl border border-slate-700 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{sdk.name}</h4>
                        <Badge className="bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full text-xs">
                          {sdk.version}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">{sdk.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">{sdk.downloads} downloads</span>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:text-white bg-transparent"
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                          <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Code Examples */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">Quick Start Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">JavaScript - Get Balance</span>
                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <pre className="text-sm text-slate-300 overflow-x-auto">
                    <code>{`import { MirWonSDK } from '@mirwon/sdk';

const client = new MirWonSDK({
  apiKey: 'your-api-key',
  network: 'testnet'
});

const balance = await client.getBalance('mrw1abc...');
console.log(balance);`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Python - Send Transaction</span>
                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <pre className="text-sm text-slate-300 overflow-x-auto">
                    <code>{`from mirwon_sdk import MirWonClient

client = MirWonClient(
    api_key="your-api-key",
    network="testnet"
)

tx_hash = client.send_transaction(
    from_address="mrw1abc...",
    to_address="mrw1def...",
    amount="100.0"
)
print(f"Transaction: {tx_hash}")`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Resources & Tools */}
          <div className="space-y-6">
            {/* Testnet Status */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">Testnet Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Network</span>
                  <Badge className="bg-green-500 text-white px-2 py-1 rounded-full">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Block Height</span>
                  <span className="font-mono text-white">2,847,392</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Chain ID</span>
                  <span className="font-mono text-white">mirwon-testnet-1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">RPC Endpoint</span>
                  <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
                <div className="bg-slate-900 p-3 rounded-lg">
                  <code className="text-xs text-slate-300">https://testnet-rpc.mirwon.io</code>
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-400 text-white">
                  <Globe className="h-4 w-4 mr-2" />
                  Get Testnet Tokens
                </Button>
              </CardContent>
            </Card>

            {/* Documentation Links */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">Documentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "API Reference", desc: "완전한 REST API 문서", icon: BookOpen },
                  { title: "SDK Guides", desc: "언어별 SDK 사용 가이드", icon: Code },
                  { title: "Tutorials", desc: "단계별 개발 튜토리얼", icon: Activity },
                  { title: "Examples", desc: "실제 사용 예제 모음", icon: Search },
                ].map((doc, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                      <doc.icon className="h-4 w-4 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{doc.title}</h4>
                      <p className="text-xs text-slate-400">{doc.desc}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Rate Limits Dashboard */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">Rate Limits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">API Calls (Hourly)</span>
                      <span className="text-white">847 / 1,000</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: "84.7%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">WebSocket Connections</span>
                      <span className="text-white">3 / 10</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Data Transfer (Daily)</span>
                      <span className="text-white">2.1GB / 5GB</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:text-white bg-transparent"
                >
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>

            {/* Transaction Explorer Quick Access */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">Transaction Explorer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Search Transaction</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Tx hash, address, block..."
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none"
                    />
                    <Button className="bg-teal-500 hover:bg-teal-400 text-slate-900">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-300">Recent Transactions</h4>
                  {["0x1a2b3c4d...", "0x5e6f7g8h...", "0x9i0j1k2l..."].map((tx, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <span className="font-mono text-sm text-slate-300">{tx}</span>
                      <ExternalLink className="h-3 w-3 text-slate-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  )
}
