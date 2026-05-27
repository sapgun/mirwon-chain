"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, Shield, Zap, BarChart3, Users, Globe, Lock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI 오케스트레이션",
    description: "LSTM + Transformer 모델로 시장을 예측하고 실시간 포지션을 최적화합니다.",
    badge: "94.7% 정확도",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: TrendingUp,
    title: "델타중립전략",
    description: "시장 방향성 위험을 제거하면서 변동성과 시간 가치로 수익을 창출합니다.",
    badge: "99.8% 중립도",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
  },
  {
    icon: Shield,
    title: "리스크 관리",
    description: "VaR 모델과 실시간 모니터링으로 포트폴리오 리스크를 엄격히 통제합니다.",
    badge: "2.1% VaR",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: Zap,
    title: "실시간 리밸런싱",
    description: "매 15분마다 포지션을 자동 조정하여 델타 중립성을 유지합니다.",
    badge: "15분 주기",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    icon: BarChart3,
    title: "수익 최적화",
    description: "감마 스캘핑과 세타 수집을 통해 안정적인 수익을 창출합니다.",
    badge: "12.4% APY",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Users,
    title: "밸리데이터 보상",
    description: "수익의 60%를 스테이킹 비중과 성과에 따라 밸리데이터에게 분배합니다.",
    badge: "60% 분배",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
  },
  {
    icon: Globe,
    title: "다중 거래소 연동",
    description: "12개 주요 거래소의 데이터를 실시간으로 분석하여 최적의 거래를 실행합니다.",
    badge: "12개 거래소",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    icon: Lock,
    title: "투명한 거버넌스",
    description: "모든 전략 변경과 수익 분배는 밸리데이터 투표를 통해 결정됩니다.",
    badge: "완전 투명",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
  },
]

export default function FeaturesSection() {
  return (
    <section className="px-8 py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 px-4 py-2 mb-6">핵심 기술</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              혁신적인 델타중립전략
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            AI 기반 오케스트레이션으로 시장 위험을 최소화하면서 안정적인 수익을 창출하는 차세대 금융 기술
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.bgColor} backdrop-blur-sm ${feature.borderColor} border shadow-2xl rounded-2xl hover:scale-105 transition-all duration-300 group`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge className={`${feature.bgColor} ${feature.color} border-none text-xs`}>{feature.badge}</Badge>
                </div>

                <div>
                  <h3 className={`text-lg font-bold ${feature.color} mb-2`}>{feature.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strategy Performance Metrics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white shadow-2xl rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-teal-500/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">안정적 수익</h3>
              <p className="text-4xl font-bold text-teal-400 mb-2">12.4%</p>
              <p className="text-slate-400">연평균 수익률 (APY)</p>
              <p className="text-sm text-slate-500 mt-2">최대 낙폭: -2.1%</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white shadow-2xl rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">리스크 통제</h3>
              <p className="text-4xl font-bold text-green-400 mb-2">99.8%</p>
              <p className="text-slate-400">델타 중립 유지율</p>
              <p className="text-sm text-slate-500 mt-2">샤프 비율: 1.84</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white shadow-2xl rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">AI 정확도</h3>
              <p className="text-4xl font-bold text-purple-400 mb-2">94.7%</p>
              <p className="text-slate-400">예측 정확도</p>
              <p className="text-sm text-slate-500 mt-2">LSTM + Transformer</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
