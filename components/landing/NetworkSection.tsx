"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Coins, TrendingUp, Users, Globe, Shield } from "lucide-react"
import Image from "next/image"

const validators = [
  { name: "Shinhan Bank", logo: "/placeholder.svg?height=60&width=60&text=신한", stake: "1.2M MRW", apy: "12.8%" },
  { name: "KB Kookmin Bank", logo: "/placeholder.svg?height=60&width=60&text=KB", stake: "980K MRW", apy: "12.4%" },
  { name: "Hana Bank", logo: "/placeholder.svg?height=60&width=60&text=하나", stake: "850K MRW", apy: "12.1%" },
  { name: "Woori Bank", logo: "/placeholder.svg?height=60&width=60&text=우리", stake: "720K MRW", apy: "11.9%" },
  { name: "NongHyup Bank", logo: "/placeholder.svg?height=60&width=60&text=농협", stake: "650K MRW", apy: "11.7%" },
  { name: "IBK Bank", logo: "/placeholder.svg?height=60&width=60&text=IBK", stake: "580K MRW", apy: "11.5%" },
]

const networkStats = [
  { icon: Building2, label: "참여 기관", value: "47", unit: "개", color: "text-teal-400" },
  { icon: Coins, label: "총 스테이킹", value: "74.2", unit: "M USD", color: "text-green-400" },
  { icon: TrendingUp, label: "평균 APY", value: "12.4", unit: "%", color: "text-blue-400" },
  { icon: Users, label: "활성 밸리데이터", value: "67", unit: "개", color: "text-purple-400" },
]

export default function NetworkSection() {
  return (
    <section className="px-8 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2 mb-6">검증자 네트워크</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              기관급 밸리데이터 생태계
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            주요 금융기관들이 참여하는 검증자 네트워크를 통해 안전하고 투명한 델타중립전략을 운영합니다
          </p>
        </div>

        {/* Network Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {networkStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 text-white shadow-2xl rounded-2xl hover:bg-white/10 transition-all"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                  <span className="text-lg text-slate-400 ml-1">{stat.unit}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Validator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {validators.map((validator, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 text-white shadow-2xl rounded-2xl hover:bg-white/10 transition-all group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={validator.logo || "/placeholder.svg"}
                    alt={validator.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full bg-white p-2 mr-4 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{validator.name}</h3>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">Active</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">스테이킹</span>
                    <span className="text-teal-400 font-bold">{validator.stake}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">예상 APY</span>
                    <span className="text-green-400 font-bold">{validator.apy}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Network Security Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">네트워크 보안 및 거버넌스</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-4 w-4 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">기관급 검증자</h4>
                  <p className="text-slate-300">
                    주요 금융기관들이 직접 참여하여 네트워크의 신뢰성과 안정성을 보장합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">투명한 거버넌스</h4>
                  <p className="text-slate-300">
                    모든 전략 변경과 수익 분배는 밸리데이터 투표를 통해 민주적으로 결정됩니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">성과 기반 보상</h4>
                  <p className="text-slate-300">
                    스테이킹 비중, 업타임, 거버넌스 참여도에 따라 공정하게 보상을 분배합니다.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-900 font-bold px-8 py-3">
              밸리데이터 참여하기
            </Button>
          </div>

          <div className="relative">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white shadow-2xl rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6 text-center">실시간 네트워크 현황</h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">네트워크 상태</span>
                  <Badge className="bg-green-500 text-white">정상 운영</Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">블록 높이</span>
                  <span className="text-white font-mono">6,801,192</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">참여율</span>
                  <span className="text-teal-400 font-bold">73.96%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">평균 블록 시간</span>
                  <span className="text-white">6.2초</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">델타 중립도</span>
                  <span className="text-green-400 font-bold">99.8%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">일일 수익률</span>
                  <span className="text-blue-400 font-bold">+0.34%</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-800/50 rounded-xl">
                <p className="text-sm text-slate-300 text-center">🔒 모든 거래는 기관급 보안으로 보호됩니다</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
