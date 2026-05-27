"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wallet, TrendingUp, Shield, Zap, Building2, BarChart3, Users, ArrowRight, CheckCircle } from "lucide-react"

const useCases = [
  {
    icon: Wallet,
    title: "안정적인 가치 저장",
    description: "원화 페그를 유지하면서 인플레이션을 상회하는 수익률을 제공합니다.",
    features: ["99.98% 페그 정확도", "연 12.4% 수익률", "낮은 변동성"],
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
  },
  {
    icon: TrendingUp,
    title: "DeFi 수익 창출",
    description: "델타중립전략으로 시장 방향성과 무관하게 안정적인 수익을 창출합니다.",
    features: ["시장 중립적", "복리 효과", "자동 재투자"],
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: Building2,
    title: "기관 자산 관리",
    description: "대규모 자산을 안전하게 관리하면서 예측 가능한 수익을 제공합니다.",
    features: ["기관급 보안", "대용량 처리", "규제 준수"],
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Zap,
    title: "실시간 헤징",
    description: "AI 기반 자동 헤징으로 포트폴리오 리스크를 실시간으로 관리합니다.",
    features: ["15분 주기 조정", "AI 자동화", "리스크 최소화"],
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
]

const benefits = [
  "시장 방향성과 무관한 안정적 수익",
  "AI 기반 실시간 리스크 관리",
  "기관급 보안 및 투명성",
  "원화 페그 유지 (99.98% 정확도)",
  "복합 담보 구조로 안정성 확보",
  "밸리데이터 거버넌스 참여",
]

export default function UseCasesSection() {
  return (
    <section className="px-8 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 mb-6">활용 사례</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              다양한 금융 니즈 해결
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            개인부터 기관까지, MirWon의 델타중립전략으로 안전하고 수익성 높은 금융 서비스를 경험하세요
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className={`${useCase.bgColor} backdrop-blur-sm ${useCase.borderColor} border shadow-2xl rounded-2xl hover:scale-105 transition-all duration-300 group`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-full ${useCase.bgColor} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                  >
                    <useCase.icon className={`h-8 w-8 ${useCase.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${useCase.color}`}>{useCase.title}</h3>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-6">{useCase.description}</p>

                <div className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className={`h-5 w-5 ${useCase.color} mr-3 flex-shrink-0`} />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">MirWon의 핵심 장점</h3>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-teal-400" />
                  </div>
                  <span className="text-slate-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-900 font-bold px-8 py-3">
                지금 시작하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-teal-400 px-8 py-3 bg-transparent"
              >
                전략 상세보기
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Performance Card */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white shadow-2xl rounded-2xl">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-6 text-center">실시간 성과 지표</h4>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-teal-500/20 rounded-full flex items-center justify-center mb-3">
                      <TrendingUp className="h-6 w-6 text-teal-400" />
                    </div>
                    <p className="text-2xl font-bold text-teal-400">12.4%</p>
                    <p className="text-slate-400 text-sm">연평균 수익률</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                      <Shield className="h-6 w-6 text-green-400" />
                    </div>
                    <p className="text-2xl font-bold text-green-400">99.8%</p>
                    <p className="text-slate-400 text-sm">델타 중립도</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                      <BarChart3 className="h-6 w-6 text-blue-400" />
                    </div>
                    <p className="text-2xl font-bold text-blue-400">1.84</p>
                    <p className="text-slate-400 text-sm">샤프 비율</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                      <Users className="h-6 w-6 text-purple-400" />
                    </div>
                    <p className="text-2xl font-bold text-purple-400">47</p>
                    <p className="text-slate-400 text-sm">참여 밸리데이터</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Metrics Card */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white shadow-2xl rounded-2xl">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-6 text-center">리스크 관리 현황</h4>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">VaR (95% 신뢰구간)</span>
                    <span className="text-green-400 font-bold">2.1%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">최대 낙폭</span>
                    <span className="text-yellow-400 font-bold">-2.1%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">변동성</span>
                    <span className="text-blue-400 font-bold">6.7%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">승률</span>
                    <span className="text-teal-400 font-bold">87.4%</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-800/50 rounded-xl">
                  <p className="text-sm text-slate-300 text-center">🛡️ AI 기반 실시간 리스크 모니터링</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
