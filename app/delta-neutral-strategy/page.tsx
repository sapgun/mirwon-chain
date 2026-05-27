import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Zap,
  Brain,
  DollarSign,
  Users,
  Target,
  AlertTriangle,
  Lock,
  Vote,
  TrendingDown,
  Coins,
  BarChart3,
} from "lucide-react"
import DashboardLayout from "../../components/layout/DashboardLayout"
import PageTransition from "../../components/layout/PageTransition"
import { MiniChart } from "../../components/mini-chart"

export default function DeltaNeutralStrategyPage() {
  return (
    <DashboardLayout
      title="델타중립전략"
      description="AI 기반 델타중립전략으로 안정적인 수익 창출 및 밸리데이터 보상 시스템"
    >
      <PageTransition>
        {/* Strategy Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Target className="h-8 w-8 text-teal-400" />
                <Badge className="bg-green-500 text-white">Active</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">델타 중립도</h3>
              <p className="text-3xl font-bold text-teal-400">99.8%</p>
              <p className="text-sm text-slate-400 mt-2">목표: 99.5% 이상</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="h-8 w-8 text-green-400" />
                <Badge className="bg-teal-500 text-slate-900">24H</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">일일 수익률</h3>
              <p className="text-3xl font-bold text-green-400">+0.34%</p>
              <p className="text-sm text-slate-400 mt-2">연환산: 12.4% APY</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <Badge className="bg-blue-500 text-white">Low</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">리스크 레벨</h3>
              <p className="text-3xl font-bold text-blue-400">2.1%</p>
              <p className="text-sm text-slate-400 mt-2">VaR (95% 신뢰구간)</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-8 w-8 text-purple-400" />
                <Badge className="bg-purple-500 text-white">Active</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">참여 밸리데이터</h3>
              <p className="text-3xl font-bold text-purple-400">47</p>
              <p className="text-sm text-slate-400 mt-2">총 67개 중</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="strategy" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 rounded-xl">
            <TabsTrigger
              value="strategy"
              className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
            >
              AI 전략
            </TabsTrigger>
            <TabsTrigger
              value="positions"
              className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
            >
              포지션 관리
            </TabsTrigger>
            <TabsTrigger value="rewards" className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900">
              수익 분배
            </TabsTrigger>
            <TabsTrigger
              value="performance"
              className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
            >
              성과 분석
            </TabsTrigger>
            <TabsTrigger value="emergency" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
              비상 안정성
            </TabsTrigger>
          </TabsList>

          {/* AI Strategy Tab */}
          <TabsContent value="strategy" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-teal-400">
                    <Brain className="h-6 w-6" />
                    AI 오케스트레이션 엔진
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">머신러닝 모델</span>
                      <Badge className="bg-green-500 text-white">LSTM + Transformer</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">예측 정확도</span>
                      <span className="text-green-400 font-bold">94.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">리밸런싱 빈도</span>
                      <span className="text-teal-400 font-bold">매 15분</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">시장 데이터 소스</span>
                      <span className="text-blue-400 font-bold">12개 거래소</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">핵심 알고리즘</h4>
                    <div className="space-y-2">
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-teal-400 font-semibold">Dynamic Hedging:</span>
                        <span className="text-slate-300 ml-2">실시간 델타 계산 및 자동 헤징</span>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-blue-400 font-semibold">Risk Parity:</span>
                        <span className="text-slate-300 ml-2">포트폴리오 리스크 균등 분배</span>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-purple-400 font-semibold">Momentum Capture:</span>
                        <span className="text-slate-300 ml-2">시장 모멘텀 기반 수익 창출</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-teal-400">
                    <Zap className="h-6 w-6" />
                    실시간 모니터링
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">델타 노출도</span>
                        <span className="text-teal-400 font-bold">-0.02</span>
                      </div>
                      <Progress value={2} className="h-2 bg-slate-700 [&>*]:bg-teal-500" />
                      <p className="text-xs text-slate-400 mt-1">목표: -0.05 ~ +0.05</p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">감마 노출도</span>
                        <span className="text-green-400 font-bold">0.01</span>
                      </div>
                      <Progress value={10} className="h-2 bg-slate-700 [&>*]:bg-green-500" />
                      <p className="text-xs text-slate-400 mt-1">목표: 0 ~ +0.03</p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">베가 노출도</span>
                        <span className="text-blue-400 font-bold">-0.15</span>
                      </div>
                      <Progress value={15} className="h-2 bg-slate-700 [&>*]:bg-blue-500" />
                      <p className="text-xs text-slate-400 mt-1">목표: -0.2 ~ +0.1</p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">세타 수익</span>
                        <span className="text-yellow-400 font-bold">+0.08</span>
                      </div>
                      <Progress value={80} className="h-2 bg-slate-700 [&>*]:bg-yellow-500" />
                      <p className="text-xs text-slate-400 mt-1">일일 목표: +0.1</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">최근 조정 내역</h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      <div className="text-sm bg-slate-800/50 p-2 rounded">
                        <span className="text-teal-400">14:23</span> - ETH 롱 포지션 +2.5% 조정
                      </div>
                      <div className="text-sm bg-slate-800/50 p-2 rounded">
                        <span className="text-teal-400">14:08</span> - BTC 숏 포지션 -1.8% 조정
                      </div>
                      <div className="text-sm bg-slate-800/50 p-2 rounded">
                        <span className="text-teal-400">13:45</span> - 옵션 델타 헤지 실행
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Positions Tab */}
          <TabsContent value="positions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-teal-400">현재 포지션 구성</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-800/50 p-4 rounded-xl">
                        <h4 className="text-lg font-semibold text-green-400 mb-2">롱 포지션</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>ETH Perpetual</span>
                            <span className="text-green-400">$2.4M</span>
                          </div>
                          <div className="flex justify-between">
                            <span>BTC Futures</span>
                            <span className="text-green-400">$1.8M</span>
                          </div>
                          <div className="flex justify-between">
                            <span>SOL Options</span>
                            <span className="text-green-400">$0.9M</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-800/50 p-4 rounded-xl">
                        <h4 className="text-lg font-semibold text-red-400 mb-2">숏 포지션</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>ETH Perpetual</span>
                            <span className="text-red-400">-$2.3M</span>
                          </div>
                          <div className="flex justify-between">
                            <span>BTC Futures</span>
                            <span className="text-red-400">-$1.9M</span>
                          </div>
                          <div className="flex justify-between">
                            <span>AVAX Options</span>
                            <span className="text-red-400">-$0.8M</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3 text-slate-200">포지션 성과</h4>
                      <div className="h-32 bg-slate-800/50 rounded-xl p-4">
                        <MiniChart height={96} color="#14b8a6" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-teal-400">리스크 메트릭</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">총 노출도</span>
                      <span className="text-white font-bold">$5.1M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">순 노출도</span>
                      <span className="text-teal-400 font-bold">$0.1M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">레버리지</span>
                      <span className="text-yellow-400 font-bold">2.3x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">샤프 비율</span>
                      <span className="text-green-400 font-bold">1.84</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">자동 조정 규칙</h4>
                    <div className="space-y-2">
                      <div className="bg-slate-800/50 p-2 rounded text-sm">델타 &gt; ±0.05 시 즉시 리밸런싱</div>
                      <div className="bg-slate-800/50 p-2 rounded text-sm">VaR &gt; 3% 시 포지션 축소</div>
                      <div className="bg-slate-800/50 p-2 rounded text-sm">변동성 &gt; 80% 시 헤지 강화</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Rewards Tab */}
          <TabsContent value="rewards" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-teal-400">수익 분배 시스템</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">분배 구조</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">밸리데이터 보상</span>
                        <span className="text-teal-400 font-bold">60%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">프로토콜 수수료</span>
                        <span className="text-blue-400 font-bold">25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">개발 기금</span>
                        <span className="text-purple-400 font-bold">10%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">리스크 준비금</span>
                        <span className="text-yellow-400 font-bold">5%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">밸리데이터 보상 기준</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">스테이킹 비중</span>
                        <span className="text-teal-400">40%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">업타임 성과</span>
                        <span className="text-green-400">30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">거버넌스 참여</span>
                        <span className="text-blue-400">20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">네트워크 기여도</span>
                        <span className="text-purple-400">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-teal-400">실시간 수익 현황</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                      <p className="text-slate-400 text-sm">오늘 총 수익</p>
                      <p className="text-2xl font-bold text-green-400">$18,420</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                      <p className="text-slate-400 text-sm">밸리데이터 분배</p>
                      <p className="text-2xl font-bold text-teal-400">$11,052</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-slate-200">상위 밸리데이터 보상</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg">
                        <div>
                          <span className="text-white font-medium">Shinhan Bank</span>
                          <p className="text-xs text-slate-400">스테이킹: 1.2M MRW</p>
                        </div>
                        <span className="text-teal-400 font-bold">$1,847</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg">
                        <div>
                          <span className="text-white font-medium">KB Kookmin Bank</span>
                          <p className="text-xs text-slate-400">스테이킹: 980K MRW</p>
                        </div>
                        <span className="text-teal-400 font-bold">$1,523</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg">
                        <div>
                          <span className="text-white font-medium">Hana Bank</span>
                          <p className="text-xs text-slate-400">스테이킹: 850K MRW</p>
                        </div>
                        <span className="text-teal-400 font-bold">$1,324</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold">
                    상세 보상 내역 보기
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-teal-400">성과 분석</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                        <p className="text-slate-400 text-sm">누적 수익률</p>
                        <p className="text-2xl font-bold text-green-400">+47.3%</p>
                        <p className="text-xs text-slate-400 mt-1">지난 12개월</p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                        <p className="text-slate-400 text-sm">최대 낙폭</p>
                        <p className="text-2xl font-bold text-red-400">-2.1%</p>
                        <p className="text-xs text-slate-400 mt-1">역대 최대</p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                        <p className="text-slate-400 text-sm">승률</p>
                        <p className="text-2xl font-bold text-blue-400">87.4%</p>
                        <p className="text-xs text-slate-400 mt-1">일일 기준</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-slate-200">월별 성과</h4>
                      <div className="h-48 bg-slate-800/50 rounded-xl p-4">
                        <MiniChart height={176} color="#14b8a6" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-teal-400">벤치마크 비교</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">MirWon 전략</span>
                      <span className="text-teal-400 font-bold">+12.4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">BTC 보유</span>
                      <span className="text-yellow-400 font-bold">+8.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">ETH 보유</span>
                      <span className="text-blue-400 font-bold">+15.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">USDC 예금</span>
                      <span className="text-gray-400 font-bold">+4.2%</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">리스크 조정 수익률</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">샤프 비율</span>
                        <span className="text-green-400 font-bold">1.84</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">소르티노 비율</span>
                        <span className="text-green-400 font-bold">2.31</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">칼마 비율</span>
                        <span className="text-green-400 font-bold">5.92</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">전략 안정성</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">변동성</span>
                        <span className="text-blue-400 font-bold">6.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">베타</span>
                        <span className="text-teal-400 font-bold">0.12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">상관계수</span>
                        <span className="text-purple-400 font-bold">0.08</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Emergency Stability Tab */}
          <TabsContent value="emergency" className="space-y-6">
            {/* Emergency Alert Banner */}
            <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30 text-white shadow-2xl rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">비상 안정성 레이어</h3>
                    <p className="text-slate-300">최악의 시장 시나리오에 대비한 탈중앙화된 보험 장치</p>
                  </div>
                  <Badge className="bg-green-500 text-white ml-auto">활성화</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Stabilization Fund */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-teal-400">
                    <Shield className="h-6 w-6" />
                    탈중앙화 안정화 기금
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">기금 현황</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">총 기금 규모</span>
                        <span className="text-teal-400 font-bold">$47.2M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">사용 가능 자금</span>
                        <span className="text-green-400 font-bold">$42.8M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">비상 준비금</span>
                        <span className="text-yellow-400 font-bold">$4.4M</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">기금 조성 방식</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">프로토콜 수수료</span>
                        <span className="text-teal-400">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">헤징 수익</span>
                        <span className="text-green-400">30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">스테이킹 수익</span>
                        <span className="text-blue-400">15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">POL 수익</span>
                        <span className="text-purple-400">10%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">자산 구성</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">스테이블코인</span>
                        <span className="text-teal-400">60%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">토큰화 국채</span>
                        <span className="text-green-400">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">ETH/BTC</span>
                        <span className="text-blue-400">10%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">기타 자산</span>
                        <span className="text-purple-400">5%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-400">
                    <Lock className="h-6 w-6" />
                    담보 보증 시스템
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">초과 담보 현황</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">담보 비율</span>
                        <span className="text-green-400 font-bold">167%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">청산 임계치</span>
                        <span className="text-yellow-400 font-bold">130%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">안전 마진</span>
                        <span className="text-teal-400 font-bold">37%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">안정성 풀</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">예치된 MRW</span>
                        <span className="text-teal-400">8.4M MRW</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">참여자 수</span>
                        <span className="text-green-400">1,247명</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">평균 APY</span>
                        <span className="text-blue-400">18.7%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">자동 청산 시스템</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-slate-700/50 p-2 rounded">✅ 24/7 모니터링 활성화</div>
                      <div className="bg-slate-700/50 p-2 rounded">⚡ 평균 청산 시간: 2.3분</div>
                      <div className="bg-slate-700/50 p-2 rounded">🎯 청산 성공률: 99.8%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Governance and Risk Management */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-400">
                    <Vote className="h-6 w-6" />
                    DAO 거버넌스
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">WHT 홀더</span>
                      <span className="text-purple-400 font-bold">3,847명</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">활성 제안</span>
                      <span className="text-green-400 font-bold">7개</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">투표 참여율</span>
                      <span className="text-teal-400 font-bold">73.2%</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2 text-slate-200">최근 가결 제안</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-slate-800/50 p-2 rounded">담보 비율 165% → 167% 상향</div>
                      <div className="bg-slate-800/50 p-2 rounded">안정화 기금 운용 정책 개정</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-400">
                    <TrendingDown className="h-6 w-6" />
                    비상 시나리오
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                      <h4 className="text-red-400 font-semibold text-sm mb-1">극단적 시장 충격</h4>
                      <p className="text-xs text-slate-300">암호화폐 50% 급락 시나리오</p>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-slate-400">대응 시간</span>
                        <span className="text-red-400 text-xs font-bold">&lt; 5분</span>
                      </div>
                    </div>

                    <div className="bg-orange-500/10 border border-orange-500/30 p-3 rounded-lg">
                      <h4 className="text-orange-400 font-semibold text-sm mb-1">대량 상환 요청</h4>
                      <p className="text-xs text-slate-300">24시간 내 30% 상환 시나리오</p>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-slate-400">유동성 확보</span>
                        <span className="text-orange-400 text-xs font-bold">충분</span>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg">
                      <h4 className="text-yellow-400 font-semibold text-sm mb-1">오라클 장애</h4>
                      <p className="text-xs text-slate-300">가격 피드 중단 시나리오</p>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-slate-400">백업 시스템</span>
                        <span className="text-yellow-400 text-xs font-bold">3중화</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <BarChart3 className="h-6 w-6" />
                    실시간 모니터링
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300 text-sm">페그 안정성</span>
                        <span className="text-green-400 font-bold text-sm">99.97%</span>
                      </div>
                      <Progress value={99.97} className="h-2 bg-slate-700 [&>*]:bg-green-500" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300 text-sm">담보 건전성</span>
                        <span className="text-teal-400 font-bold text-sm">167%</span>
                      </div>
                      <Progress value={67} className="h-2 bg-slate-700 [&>*]:bg-teal-500" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300 text-sm">유동성 충분도</span>
                        <span className="text-blue-400 font-bold text-sm">94.3%</span>
                      </div>
                      <Progress value={94.3} className="h-2 bg-slate-700 [&>*]:bg-blue-500" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300 text-sm">시스템 안정성</span>
                        <span className="text-purple-400 font-bold text-sm">98.1%</span>
                      </div>
                      <Progress value={98.1} className="h-2 bg-slate-700 [&>*]:bg-purple-500" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2 text-slate-200">알림 현황</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-green-500/10 border border-green-500/30 p-2 rounded text-green-400">
                        ✅ 모든 시스템 정상 작동
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/30 p-2 rounded text-blue-400">
                        ℹ️ 정기 리밸런싱 완료
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Action Panel */}
            <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600 text-white shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Coins className="h-6 w-6" />
                  비상 대응 체계
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-400">1단계: 자동 대응</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-teal-400 font-semibold">스마트 컨트랙트 실행</span>
                        <p className="text-slate-300 mt-1">페그 이탈 시 자동 매입/매도</p>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-green-400 font-semibold">담보 자동 추가</span>
                        <p className="text-slate-300 mt-1">안정화 기금에서 자동 투입</p>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-blue-400 font-semibold">청산 시스템 가동</span>
                        <p className="text-slate-300 mt-1">위험 포지션 자동 청산</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-orange-400">2단계: 거버넌스 개입</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-orange-400 font-semibold">긴급 제안 발의</span>
                        <p className="text-slate-300 mt-1">WHT 홀더 긴급 투표</p>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-yellow-400 font-semibold">파라미터 조정</span>
                        <p className="text-slate-300 mt-1">담보 비율, 수수료 등 조정</p>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-purple-400 font-semibold">추가 기금 조성</span>
                        <p className="text-slate-300 mt-1">WHT 발행을 통한 자금 확보</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-red-400">3단계: 비상 조치</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-red-400 font-semibold">서킷 브레이커</span>
                        <p className="text-slate-300 mt-1">일시적 거래 중단</p>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-pink-400 font-semibold">밸리데이터 개입</span>
                        <p className="text-slate-300 mt-1">은행 밸리데이터 직접 지원</p>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <span className="text-rose-400 font-semibold">점진적 탈중앙화</span>
                        <p className="text-slate-300 mt-1">하이브리드 모델로 전환</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/30 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-teal-400 mb-2">시스템 상태: 안전</h4>
                      <p className="text-slate-300">모든 비상 시스템이 정상 작동 중입니다. 페그 안정성 99.97% 유지.</p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                      >
                        상세 보고서
                      </Button>
                      <Button className="bg-teal-500 hover:bg-teal-400 text-slate-900">실시간 모니터링</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </PageTransition>
    </DashboardLayout>
  )
}
