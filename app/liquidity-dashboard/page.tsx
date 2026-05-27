"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Droplets,
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpDown,
  Plus,
  Wallet,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react"
import DashboardLayout from "../../components/layout/DashboardLayout"
import PageTransition from "../../components/layout/PageTransition"
import { MiniChart } from "../../components/mini-chart"
import DepositModal from "../../components/modals/DepositModal"
import SwapModal from "../../components/modals/SwapModal"

export default function LiquidityDashboard() {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false)
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false)

  return (
    <DashboardLayout title="유동성 대시보드" description="MirWon 생태계의 유동성 풀 관리 및 수익률 최적화">
      <PageTransition>
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Droplets className="h-8 w-8 text-teal-400" />
                <Badge className="bg-teal-500 text-slate-900">Active</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">총 유동성</h3>
              <p className="text-3xl font-bold text-teal-400">$47.2M</p>
              <p className="text-sm text-slate-400 mt-2">+12.4% (24h)</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-green-400" />
                <Badge className="bg-green-500 text-white">High</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">평균 APY</h3>
              <p className="text-3xl font-bold text-green-400">24.7%</p>
              <p className="text-sm text-slate-400 mt-2">최고: 45.2%</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-8 w-8 text-blue-400" />
                <Badge className="bg-blue-500 text-white">Growing</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">활성 사용자</h3>
              <p className="text-3xl font-bold text-blue-400">1,247</p>
              <p className="text-sm text-slate-400 mt-2">+8.3% (7d)</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl hover:bg-white/15 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="h-8 w-8 text-purple-400" />
                <Badge className="bg-purple-500 text-white">24H</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">거래량</h3>
              <p className="text-3xl font-bold text-purple-400">$8.9M</p>
              <p className="text-sm text-slate-400 mt-2">+15.7% (24h)</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-teal-500/20 text-white shadow-2xl rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-teal-400 mb-2">유동성 공급</h3>
                  <p className="text-slate-300 mb-4">토큰 페어에 유동성을 공급하고 수수료 수익을 얻으세요</p>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span>• 24.7% 평균 APY</span>
                    <span>• 즉시 출금 가능</span>
                  </div>
                </div>
                <Button
                  onClick={() => setIsDepositModalOpen(true)}
                  className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-8 py-3"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Deposit
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 text-white shadow-2xl rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">토큰 교환</h3>
                  <p className="text-slate-300 mb-4">다양한 토큰을 최적의 환율로 즉시 교환하세요</p>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span>• 0.3% 수수료</span>
                    <span>• 즉시 실행</span>
                  </div>
                </div>
                <Button
                  onClick={() => setIsSwapModalOpen(true)}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3"
                >
                  <ArrowUpDown className="mr-2 h-5 w-5" />
                  Swap
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="pools" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 rounded-xl">
            <TabsTrigger value="pools" className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900">
              유동성 풀
            </TabsTrigger>
            <TabsTrigger
              value="positions"
              className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
            >
              내 포지션
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
            >
              분석
            </TabsTrigger>
            <TabsTrigger value="rewards" className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900">
              보상
            </TabsTrigger>
          </TabsList>

          {/* Pools Tab */}
          <TabsContent value="pools" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-teal-400">활성 유동성 풀</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { pair: "MRW/USDC", tvl: "$12.4M", apy: "24.7%", volume: "$2.1M", status: "active" },
                      { pair: "MRW/USDT", tvl: "$8.9M", apy: "22.3%", volume: "$1.8M", status: "active" },
                      { pair: "MRW/DAI", tvl: "$6.2M", apy: "26.1%", volume: "$1.2M", status: "active" },
                      { pair: "USDC/USDT", tvl: "$4.8M", apy: "8.4%", volume: "$3.4M", status: "active" },
                      { pair: "MRW/PAXG", tvl: "$2.1M", apy: "45.2%", volume: "$0.6M", status: "new" },
                    ].map((pool, index) => (
                      <div
                        key={index}
                        className="bg-slate-800/50 p-4 rounded-xl hover:bg-slate-800/70 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-semibold">{pool.pair}</span>
                              <Badge
                                className={pool.status === "new" ? "bg-green-500 text-white" : "bg-blue-500 text-white"}
                              >
                                {pool.status === "new" ? "NEW" : "ACTIVE"}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="text-center">
                              <p className="text-slate-400">TVL</p>
                              <p className="font-semibold">{pool.tvl}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-slate-400">APY</p>
                              <p className="font-semibold text-green-400">{pool.apy}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-slate-400">24h Volume</p>
                              <p className="font-semibold">{pool.volume}</p>
                            </div>
                            <Button size="sm" className="bg-teal-500 hover:bg-teal-400 text-slate-900">
                              참여
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-teal-400">풀 성과</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">최고 수익률</span>
                      <span className="text-green-400 font-bold">45.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">평균 수익률</span>
                      <span className="text-teal-400 font-bold">24.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">총 수수료 수익</span>
                      <span className="text-blue-400 font-bold">$847K</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">수익률 추이</h4>
                    <div className="h-32 bg-slate-800/50 rounded-xl p-4">
                      <MiniChart height={96} color="#14b8a6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Positions Tab */}
          <TabsContent value="positions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-teal-400">
                    <Wallet className="h-6 w-6" />내 유동성 포지션
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                      <p className="text-slate-400 text-sm">총 예치 가치</p>
                      <p className="text-2xl font-bold text-teal-400">$24,750</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                      <p className="text-slate-400 text-sm">누적 수익</p>
                      <p className="text-2xl font-bold text-green-400">$3,247</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { pair: "MRW/USDC", amount: "$12,400", share: "0.52%", earned: "$1,847" },
                      { pair: "MRW/USDT", amount: "$8,900", share: "0.38%", earned: "$1,124" },
                      { pair: "MRW/PAXG", amount: "$3,450", share: "1.64%", earned: "$276" },
                    ].map((position, index) => (
                      <div key={index} className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">{position.pair}</span>
                          <Badge className="bg-green-500 text-white">Active</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <p className="text-slate-400">예치액</p>
                            <p className="font-semibold">{position.amount}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">풀 점유율</p>
                            <p className="font-semibold text-teal-400">{position.share}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">수익</p>
                            <p className="font-semibold text-green-400">{position.earned}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-400">
                    <BarChart3 className="h-6 w-6" />
                    포지션 분석
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">MRW/USDC</span>
                        <span className="text-teal-400">50.1%</span>
                      </div>
                      <Progress value={50.1} className="h-2 bg-slate-700 [&>*]:bg-teal-500" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">MRW/USDT</span>
                        <span className="text-blue-400">36.0%</span>
                      </div>
                      <Progress value={36.0} className="h-2 bg-slate-700 [&>*]:bg-blue-500" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">MRW/PAXG</span>
                        <span className="text-yellow-400">13.9%</span>
                      </div>
                      <Progress value={13.9} className="h-2 bg-slate-700 [&>*]:bg-yellow-500" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">수익 성과</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">일일 수익률</span>
                        <span className="text-green-400 font-bold">+0.67%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">월간 수익률</span>
                        <span className="text-green-400 font-bold">+18.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">연간 수익률</span>
                        <span className="text-green-400 font-bold">+247.3%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-teal-400">유동성 분석</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                        <p className="text-slate-400 text-sm">총 거래량</p>
                        <p className="text-2xl font-bold text-blue-400">$8.9M</p>
                        <p className="text-xs text-slate-400 mt-1">24시간</p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                        <p className="text-slate-400 text-sm">수수료 수익</p>
                        <p className="text-2xl font-bold text-green-400">$26.7K</p>
                        <p className="text-xs text-slate-400 mt-1">24시간</p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                        <p className="text-slate-400 text-sm">활성 거래자</p>
                        <p className="text-2xl font-bold text-purple-400">847</p>
                        <p className="text-xs text-slate-400 mt-1">24시간</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-slate-200">거래량 추이</h4>
                      <div className="h-48 bg-slate-800/50 rounded-xl p-4">
                        <MiniChart height={176} color="#3b82f6" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-orange-400">시장 지표</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">MRW 가격</span>
                      <span className="text-teal-400 font-bold">$1.0234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">24h 변동률</span>
                      <span className="text-green-400 font-bold">+0.23%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">시가총액</span>
                      <span className="text-blue-400 font-bold">$124.7M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">순환 공급량</span>
                      <span className="text-purple-400 font-bold">121.9M</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">풀별 TVL</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">MRW/USDC</span>
                        <span className="text-teal-400">26.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">MRW/USDT</span>
                        <span className="text-blue-400">18.9%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">MRW/DAI</span>
                        <span className="text-green-400">13.1%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">기타</span>
                        <span className="text-purple-400">41.7%</span>
                      </div>
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
                  <CardTitle className="flex items-center gap-2 text-green-400">
                    <Zap className="h-6 w-6" />
                    수익 현황
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                      <p className="text-slate-400 text-sm">클레임 가능</p>
                      <p className="text-2xl font-bold text-green-400">$1,247</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                      <p className="text-slate-400 text-sm">누적 수익</p>
                      <p className="text-2xl font-bold text-teal-400">$8,934</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-slate-200">수익 내역</h4>
                    {[
                      { pool: "MRW/USDC", amount: "$847.23", type: "수수료" },
                      { pool: "MRW/USDT", amount: "$234.56", type: "수수료" },
                      { pool: "MRW/PAXG", amount: "$165.78", type: "수수료" },
                    ].map((reward, index) => (
                      <div key={index} className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg">
                        <div>
                          <span className="text-white font-medium">{reward.pool}</span>
                          <p className="text-xs text-slate-400">{reward.type} 수익</p>
                        </div>
                        <span className="text-green-400 font-bold">{reward.amount}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-400 text-slate-900 font-semibold">
                    모든 수익 클레임
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <Shield className="h-6 w-6" />
                    인센티브 프로그램
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 p-4 rounded-xl">
                      <h4 className="text-teal-400 font-semibold mb-2">신규 풀 보너스</h4>
                      <p className="text-slate-300 text-sm mb-3">MRW/PAXG 풀 참여 시 추가 보상</p>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">보너스 APY</span>
                        <span className="text-teal-400 font-bold">+20%</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 p-4 rounded-xl">
                      <h4 className="text-purple-400 font-semibold mb-2">장기 보유 보너스</h4>
                      <p className="text-slate-300 text-sm mb-3">30일 이상 유동성 유지 시</p>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">보너스 배율</span>
                        <span className="text-purple-400 font-bold">1.5x</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 p-4 rounded-xl">
                      <h4 className="text-yellow-400 font-semibold mb-2">거래량 인센티브</h4>
                      <p className="text-slate-300 text-sm mb-3">높은 거래량 풀 참여 보상</p>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">추가 수익</span>
                        <span className="text-yellow-400 font-bold">+5%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">다음 보상까지</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">장기 보유 보너스</span>
                        <span className="text-teal-400">12일 남음</span>
                      </div>
                      <Progress value={60} className="h-2 bg-slate-700 [&>*]:bg-teal-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </PageTransition>

      {/* Modals */}
      <DepositModal isOpen={isDepositModalOpen} onClose={() => setIsDepositModalOpen(false)} />
      <SwapModal isOpen={isSwapModalOpen} onClose={() => setIsSwapModalOpen(false)} />
    </DashboardLayout>
  )
}
