import DashboardLayout from "../../../components/layout/DashboardLayout"
import PageTransition from "../../../components/layout/PageTransition"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Copy, ExternalLink, ChevronRight, Play, Download } from "lucide-react"

export default function DeveloperDocs() {
  return (
    <DashboardLayout title="API 문서" description="MirWon API 완전 가이드 및 참조 문서">
      <PageTransition>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg text-teal-400">Documentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <nav className="space-y-1">
                  {[
                    { title: "Getting Started", active: true },
                    { title: "Authentication" },
                    { title: "Accounts" },
                    { title: "Transactions" },
                    { title: "Staking" },
                    { title: "Governance" },
                    { title: "WebSocket API" },
                    { title: "Error Codes" },
                    { title: "Rate Limits" },
                    { title: "SDKs" },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                        item.active
                          ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                          : "hover:bg-white/10 text-slate-300"
                      }`}
                    >
                      <span className="text-sm">{item.title}</span>
                      <ChevronRight className="h-3 w-3" />
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Getting Started */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-teal-400" />
                  Getting Started
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed">
                    MirWon API를 사용하여 블록체인 애플리케이션을 구축하세요. REST API와 WebSocket을 통해 실시간
                    데이터에 접근할 수 있습니다.
                  </p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-400">Base URL</span>
                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <code className="text-teal-400">https://api.mirwon.io/v1</code>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-slate-700">
                    <h4 className="font-semibold text-white mb-2">Mainnet</h4>
                    <code className="text-sm text-slate-300">https://api.mirwon.io/v1</code>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-slate-700">
                    <h4 className="font-semibold text-white mb-2">Testnet</h4>
                    <code className="text-sm text-slate-300">https://testnet-api.mirwon.io/v1</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Authentication */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">Authentication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  모든 API 요청에는 API 키가 필요합니다. HTTP 헤더에 API 키를 포함하세요.
                </p>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Request Header</span>
                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <pre className="text-sm text-slate-300">
                    <code>{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}</code>
                  </pre>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
                  <p className="text-yellow-400 text-sm">
                    <strong>보안 주의사항:</strong> API 키를 클라이언트 사이드 코드에 노출하지 마세요.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* API Endpoints */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">주요 API Endpoints</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Account Balance */}
                <div className="border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-green-500 text-white px-2 py-1 text-xs">GET</Badge>
                      <code className="text-slate-300">/accounts/{"{address}"}/balance</code>
                    </div>
                    <Button size="sm" className="bg-teal-500 text-slate-900 hover:bg-teal-400">
                      <Play className="h-3 w-3 mr-1" />
                      Try it
                    </Button>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">계정의 잔액 정보를 조회합니다.</p>

                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium text-white mb-2">Parameters</h5>
                      <div className="bg-slate-900 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-sm">
                          <code className="text-teal-400">address</code>
                          <Badge className="bg-slate-700 text-slate-300 px-1 py-0.5 text-xs">string</Badge>
                          <span className="text-slate-400">계정 주소</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-white mb-2">Response</h5>
                      <div className="bg-slate-900 p-3 rounded-lg">
                        <pre className="text-xs text-slate-300 overflow-x-auto">
                          <code>{`{
  "address": "mrw1abc123...",
  "balance": {
    "amount": "1000000",
    "denom": "umrw"
  },
  "sequence": "42"
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Send Transaction */}
                <div className="border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-blue-500 text-white px-2 py-1 text-xs">POST</Badge>
                      <code className="text-slate-300">/transactions/send</code>
                    </div>
                    <Button size="sm" className="bg-teal-500 text-slate-900 hover:bg-teal-400">
                      <Play className="h-3 w-3 mr-1" />
                      Try it
                    </Button>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">토큰 전송 트랜잭션을 생성합니다.</p>

                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium text-white mb-2">Request Body</h5>
                      <div className="bg-slate-900 p-3 rounded-lg">
                        <pre className="text-xs text-slate-300 overflow-x-auto">
                          <code>{`{
  "from_address": "mrw1abc123...",
  "to_address": "mrw1def456...",
  "amount": "1000000",
  "denom": "umrw",
  "memo": "Payment for services"
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Staking Delegation */}
                <div className="border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-blue-500 text-white px-2 py-1 text-xs">POST</Badge>
                      <code className="text-slate-300">/staking/delegate</code>
                    </div>
                    <Button size="sm" className="bg-teal-500 text-slate-900 hover:bg-teal-400">
                      <Play className="h-3 w-3 mr-1" />
                      Try it
                    </Button>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">밸리데이터에게 토큰을 위임합니다.</p>
                </div>
              </CardContent>
            </Card>

            {/* SDK Examples */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-teal-400">SDK Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-teal-400" />
                      <span className="font-medium">JavaScript</span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg">
                      <pre className="text-xs text-slate-300 overflow-x-auto">
                        <code>{`npm install @mirwon/sdk

import { MirWonSDK } from '@mirwon/sdk';

const client = new MirWonSDK({
  apiKey: 'your-api-key'
});`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-teal-400" />
                      <span className="font-medium">Python</span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg">
                      <pre className="text-xs text-slate-300 overflow-x-auto">
                        <code>{`pip install mirwon-sdk

from mirwon_sdk import MirWonClient

client = MirWonClient(
    api_key="your-api-key"
)`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-teal-500 text-slate-900 hover:bg-teal-400">
                    <Download className="h-4 w-4 mr-2" />
                    Download SDK
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  )
}
