"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Beaker,
  Brain,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Lock,
  Coins,
  ChevronRight,
  Sparkles,
  Atom,
  Network,
  Database,
  Cpu,
} from "lucide-react"
import DashboardLayout from "@/components/layout/DashboardLayout"

export default function MirWonLabsPage() {
  const products = [
    {
      id: "rwa-bonds",
      title: "토큰화된 한국 국채 & 회사채",
      subtitle: "RWA-KRW Bond Tokens",
      description: "대한민국 정부 국채와 초우량 기업 회사채를 미르원 체인에서 디지털 토큰으로 발행하고 유통하는 플랫폼",
      icon: Coins,
      status: "개발 중",
      progress: 65,
      features: ["실물 자산 1:1 온체인화", "자동화된 이자/배당 지급", "소액 투자 접근성 확대", "기관 파트너 연동"],
      impact: "국채 시장 유동성 혁신 및 개인 투자자 접근성 확대",
    },
    {
      id: "ai-quant",
      title: "AI 기반 퀀트 헤징 엔진",
      subtitle: "AI-Powered Quant Engine",
      description: "머신러닝과 고도화된 퀀트 알고리즘으로 담보 포트폴리오 운용 및 리스크 헤징을 자동화하는 AI 엔진",
      icon: Brain,
      status: "베타 테스트",
      progress: 80,
      features: ["시장 예측 AI 모델", "자동화된 포지션 관리", "실시간 리스크 분석", "감마/볼 변동성 트레이딩"],
      impact: "미르원 안정성 강화 및 지속 가능한 수익 모델 제공",
    },
    {
      id: "credit-protocol",
      title: "온체인 기관 신용 대출",
      subtitle: "Institutional Credit Protocol",
      description: "전통 금융기관의 신용 평가를 블록체인과 결합한 기관 대상 무담보/저담보 대출 프로토콜",
      icon: Shield,
      status: "설계 단계",
      progress: 35,
      features: ["기관 신용 온체인화", "영지식 증명 프라이버시", "차등화된 대출 조건", "자동화된 상환 관리"],
      impact: "DeFi 초과담보 한계 해결 및 실제 신용 창출 기능 구현",
    },
    {
      id: "synthetic-assets",
      title: "크로스체인 글로벌 자산 합성",
      subtitle: "Cross-Chain Synthetic Assets",
      description: "미르원 체인에서 글로벌 주식, 원자재, 외환 등 실물 자산을 추종하는 합성 자산 토큰 발행",
      icon: Globe,
      status: "연구 단계",
      progress: 20,
      features: ["탈중앙화 오라클 연동", "다양한 합성 자산 발행", "글로벌 투자 접근성", "실시간 가격 페그"],
      impact: "미르원의 글로벌 자산 허브 역할 및 한국 금융 시장 연결성 강화",
    },
    {
      id: "quantum-security",
      title: "양자 내성 암호 보안",
      subtitle: "Quantum-Resistant Security",
      description: "양자 컴퓨팅 위협에 대비한 미르원 체인의 차세대 보안 솔루션 연구 및 개발",
      icon: Lock,
      status: "연구 단계",
      progress: 15,
      features: ["NIST 표준 PQC 알고리즘", "합의 메커니즘 보안 강화", "정기적인 보안 감사", "미래 기술 대응"],
      impact: "장기적 보안 안정성 확보 및 한국 금융 기술 리더십 확립",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "베타 테스트":
        return "bg-green-500"
      case "개발 중":
        return "bg-blue-500"
      case "설계 단계":
        return "bg-yellow-500"
      case "연구 단계":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-teal-500/10 to-blue-500/10" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Beaker className="w-12 h-12 text-purple-400" />
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                  MirWon Labs
                </h1>
                <Sparkles className="w-8 h-8 text-teal-400 animate-pulse" />
              </div>

              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                미래 금융을 탐구하고 혁신적인 디지털 금융 상품을 개발하는 선행 연구 및 사업 개발 조직
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge variant="outline" className="px-4 py-2 text-purple-400 border-purple-400/50 bg-purple-500/10">
                  <Atom className="w-4 h-4 mr-2" />
                  실험과 혁신
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-teal-400 border-teal-400/50 bg-teal-500/10">
                  <Shield className="w-4 h-4 mr-2" />
                  신뢰 기반 혁신
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-blue-400 border-blue-400/50 bg-blue-500/10">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  가치 창출 엔진
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-green-400 border-green-400/50 bg-green-500/10">
                  <Network className="w-4 h-4 mr-2" />
                  지식의 허브
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-purple-400">미래 금융의 청사진</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm text-center">
                  전통 금융의 안정성과 블록체인의 혁신을 융합하여 미래 금융의 가능성을 현실화
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-teal-400" />
                </div>
                <CardTitle className="text-teal-400">신뢰 기반의 혁신</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm text-center">
                  기관의 엄격한 기준과 규제 준수를 바탕으로 안전하고 검증된 방식의 혁신 추진
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-blue-400">가치 창출의 엔진</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm text-center">
                  새로운 수익 모델과 활용처를 발굴하여 대한민국 경제에 기여하는 가치 창출
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-green-400">지식의 허브</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm text-center">
                  다양한 분야 전문가들이 모여 지식을 공유하고 협력하는 연구 개발의 중심지
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Products Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">혁신적인 프로덕트 포트폴리오</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                미르원 프로토콜의 안정성을 기반으로 실험적이고 혁신적인 금융 상품들을 개발합니다
              </p>
            </div>

            <Tabs defaultValue="rwa-bonds" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 mb-8">
                {products.map((product) => (
                  <TabsTrigger
                    key={product.id}
                    value={product.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-teal-500/20"
                  >
                    <product.icon className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">{product.title.split(" ")[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {products.map((product) => (
                <TabsContent key={product.id} value={product.id}>
                  <Card className="bg-slate-900/50 border-slate-700/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                            <product.icon className="w-8 h-8 text-teal-400" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-white mb-2">{product.title}</CardTitle>
                            <CardDescription className="text-purple-400 font-medium">
                              {product.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={`${getStatusColor(product.status)} text-white mb-2`}>
                            {product.status}
                          </Badge>
                          <div className="text-sm text-slate-400">진행률: {product.progress}%</div>
                          <Progress value={product.progress} className="w-24 mt-1" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-6 leading-relaxed">{product.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-teal-400" />
                            주요 기능
                          </h4>
                          <ul className="space-y-2">
                            {product.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-slate-300">
                                <ChevronRight className="w-4 h-4 text-purple-400" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Database className="w-4 h-4 text-teal-400" />
                            기대 효과
                          </h4>
                          <p className="text-slate-300 leading-relaxed">{product.impact}</p>

                          <div className="mt-4">
                            <Button className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white">
                              자세히 보기
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Research Areas */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">연구 분야</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                최첨단 기술과 금융 공학의 융합을 통한 혁신적 솔루션 연구
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    AI & 머신러닝
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li>• 시장 예측 모델 개발</li>
                    <li>• 리스크 관리 알고리즘</li>
                    <li>• 자동화된 포트폴리오 최적화</li>
                    <li>• 이상 거래 탐지 시스템</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-teal-900/20 to-teal-800/20 border-teal-500/30">
                <CardHeader>
                  <CardTitle className="text-teal-400 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    블록체인 보안
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li>• 양자 내성 암호 기술</li>
                    <li>• 영지식 증명 시스템</li>
                    <li>• 멀티시그 보안 강화</li>
                    <li>• 스마트 컨트랙트 감사</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    크로스체인 기술
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li>• 인터체인 프로토콜</li>
                    <li>• 브릿지 보안 강화</li>
                    <li>• 멀티체인 자산 관리</li>
                    <li>• 유동성 통합 솔루션</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-900/30 via-slate-900/50 to-teal-900/30 border-purple-500/30">
              <CardContent className="py-12">
                <h3 className="text-2xl font-bold text-white mb-4">미래 금융의 혁신에 함께하세요</h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                  MirWon Labs는 전통 금융과 블록체인 기술의 융합을 통해 새로운 가능성을 탐구합니다. 혁신적인 프로젝트에
                  참여하고 미래 금융을 함께 만들어가세요.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
                  >
                    연구 참여하기
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    백서 다운로드
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
