"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Users,
  TrendingUp,
  Coins,
  Brain,
  CreditCard,
  Smartphone,
  Globe,
  Building,
  Eye,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Home,
  AlertTriangle,
  Clock,
  Zap,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-slate-950" />
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation Bar */}
      <div className="sticky top-0 bg-slate-950/90 backdrop-blur-md z-40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Button variant="ghost" className="text-slate-300 hover:text-teal-400 hover:bg-slate-800/50" asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              홈으로 돌아가기
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section - 용의 꿈, 돈이 일하는 미래 */}
      <section className="relative py-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Image
                src="/images/mirwon-logo.png"
                alt="MirWon Dragon"
                width={120}
                height={120}
                className="w-30 h-30 animate-spin-slow"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full opacity-20 animate-ping" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              MirWon
            </span>
          </h1>

          <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-slate-200">용의 꿈, 돈이 일하는 미래</h2>

          <p className="text-xl sm:text-2xl mb-12 text-teal-400 font-semibold">"돈이 스스로 일하게 한다"</p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Badge variant="outline" className="px-6 py-2 text-lg border-teal-400 text-teal-400">
              기관 중심 안정성
            </Badge>
            <Badge variant="outline" className="px-6 py-2 text-lg border-blue-400 text-blue-400">
              웹3 매스 어돕션
            </Badge>
            <Badge variant="outline" className="px-6 py-2 text-lg border-purple-400 text-purple-400">
              델타 중립 전략
            </Badge>
          </div>
        </div>
      </section>

      {/* 왜 돈이 스스로 일해야 하는가? */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              왜 돈이 '스스로 일해야' 하는가?
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* 인플레이션의 위협 */}
            <Card className="bg-red-950/20 border-red-500/30 p-8 hover:scale-105 transition-transform">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-10 h-10 text-red-400" />
                  <h3 className="text-2xl font-bold text-red-400">'가만히 있는 돈'의 위험</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-slate-300">
                    <span className="font-semibold text-red-400">인플레이션</span>은 돈의 구매력을 꾸준히 갉아먹습니다.
                  </p>
                  <div className="bg-red-950/30 p-4 rounded-lg">
                    <p className="text-sm text-slate-300">
                      💡 <strong>예시:</strong> 10년 전 1만 원으로 살 수 있었던 물건의 양과 지금 1만 원으로 살 수 있는
                      양을 비교해보세요.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-400" />
                  <span className="text-slate-300 font-medium">미르원의 해결책: 델타 중립 전략으로 가치 보전</span>
                </div>
              </CardContent>
            </Card>

            {/* 비효율성과의 싸움 */}
            <Card className="bg-orange-950/20 border-orange-500/30 p-8 hover:scale-105 transition-transform">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-10 h-10 text-orange-400" />
                  <h3 className="text-2xl font-bold text-orange-400">'잠자는 돈'의 기회비용</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-slate-300">
                    기존 금융 시스템의 <span className="font-semibold text-orange-400">수수료, 지연, 복잡한 절차</span>
                    가 돈의 활용을 제한합니다.
                  </p>
                  <div className="bg-orange-950/30 p-4 rounded-lg">
                    <p className="text-sm text-slate-300">
                      💡 <strong>현실:</strong> 해외송금 수수료, 은행 대기시간, 복잡한 투자 절차 등
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <span className="text-slate-300 font-medium">미르원의 해결책: 가스리스 결제와 매끄러운 연동</span>
                </div>
              </CardContent>
            </Card>

            {/* 안전하게 일하는 돈 */}
            <Card className="bg-green-950/20 border-green-500/30 p-8 hover:scale-105 transition-transform">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-10 h-10 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-400">'안전하게 일하는 돈'</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-slate-300">
                    <span className="font-semibold text-green-400">기관 중심의 안정성</span>과 투명한 프로토콜로 낮은
                    위험, 높은 신뢰를 실현합니다.
                  </p>
                  <div className="bg-green-950/30 p-4 rounded-lg">
                    <p className="text-sm text-slate-300">
                      💡 <strong>차별점:</strong> 복잡한 금융 지식 없이도 안전하게 가치 보전
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300 font-medium">미르원의 해결책: 시중은행 참여와 실시간 투명성</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 기존 금융 vs 미르원 비교 */}
          <div className="bg-slate-800/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">기존 금융 vs 미르원</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-red-400 mb-4">기존 금융의 한계</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">인플레이션으로 인한 구매력 감소</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">높은 수수료와 복잡한 절차</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">불투명한 운영과 제한된 접근성</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">원금 손실 위험이 있는 투자</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-teal-400 mb-4">미르원의 혁신</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">델타 중립 전략으로 가치 보전</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">가스리스 결제와 즉시 처리</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">실시간 투명한 운영 공개</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">기관 참여로 안전성 보장</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 왜 지금, 미르원인가? */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              왜 지금, 미르원인가?
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 현재의 도전과제 */}
            <Card className="bg-red-950/20 border-red-500/30 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-red-400">현재의 도전과제</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">전통 금융 시장의 예측 불가능한 변동성</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">디지털 자산의 높은 복잡성과 신뢰 문제</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">달러 중심 스테이블코인 의존도 심화</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300">웹3 진입 장벽: 가스비, 복잡한 지갑 관리</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 미르원의 해답 */}
            <Card className="bg-blue-950/20 border-blue-500/30 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">미르원의 해답</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">기관 중심의 견고한 안정성 보장</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">원화 기반 디지털 주권 확립</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">가스리스 결제와 간편한 사용자 경험</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300">신뢰할 수 있는 디지털 금융 인프라</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              핵심 가치
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-teal-950/50 to-teal-900/30 border-teal-500/30 p-8 hover:scale-105 transition-transform">
              <CardContent className="p-0 text-center">
                <div className="mb-6">
                  <Shield className="w-16 h-16 text-teal-400 mx-auto hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-teal-400">기관 중심 안정성</h3>
                <p className="text-slate-300 mb-6">
                  시중은행과 금융기관의 직접 참여로 최고 수준의 보안과 신뢰성을 보장합니다.
                </p>
                <Badge className="bg-teal-500/20 text-teal-400 border-teal-400">99.9% 안정성</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 border-blue-500/30 p-8 hover:scale-105 transition-transform">
              <CardContent className="p-0 text-center">
                <div className="mb-6">
                  <Users className="w-16 h-16 text-blue-400 mx-auto hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">웹3 매스 어돕션</h3>
                <p className="text-slate-300 mb-6">
                  복잡한 블록체인 기술을 숨기고 누구나 쉽게 사용할 수 있는 금융 서비스를 제공합니다.
                </p>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-400">100만+ 사용자</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-950/50 to-purple-900/30 border-purple-500/30 p-8 hover:scale-105 transition-transform">
              <CardContent className="p-0 text-center">
                <div className="mb-6">
                  <TrendingUp className="w-16 h-16 text-purple-400 mx-auto hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">델타 중립 전략</h3>
                <p className="text-slate-300 mb-6">
                  정교한 헤징 전략으로 가격 변동 위험을 완벽하게 상쇄하여 안정성을 실현합니다.
                </p>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-400">0% 가격 변동성</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 돈이 스스로 일하는 방법 */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              돈이 스스로 일하는 방법
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">토큰화된 국채/회사채</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  대한민국 국채와 우량 기업 회사채를 디지털 토큰으로 발행하여 안정적인 수익을 창출합니다.
                </p>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>진행률</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                  개발 중
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold">AI 기반 퀀트 전략</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  최첨단 AI 알고리즘으로 담보 포트폴리오를 효율적으로 운용하고 추가 수익을 창출합니다.
                </p>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>진행률</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <Badge variant="outline" className="border-blue-400 text-blue-400">
                  베타 테스트
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold">온체인 신용 기반 대출</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  은행 신용 평가와 연동하여 신뢰할 수 있는 기관에 무담보/저담보 대출을 제공합니다.
                </p>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>진행률</span>
                    <span>35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <Badge variant="outline" className="border-green-400 text-green-400">
                  연구 중
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 미르원이 꿈꾸는 미래 */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              미르원이 꿈꾸는 미래
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-teal-950/30 to-teal-900/20 border-teal-500/30 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="w-10 h-10 text-teal-400" />
                  <h3 className="text-2xl font-bold text-teal-400">국민 모두를 위한 디지털 금융</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    <span className="text-slate-300">가스리스 결제 환경</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    <span className="text-slate-300">간편결제 시스템 통합</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    <span className="text-slate-300">사용자 친화적 UX</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 border-blue-500/30 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-10 h-10 text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">K-콘텐츠와 실물 경제의 글로벌 확장</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">K-콘텐츠 수익화</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">RWA 토큰화</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">글로벌 투자 기회</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-950/30 to-purple-900/20 border-purple-500/30 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-10 h-10 text-purple-400" />
                  <h3 className="text-2xl font-bold text-purple-400">한국 금융의 글로벌 리더십</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300">기관 밸리데이터 참여</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300">규제 준수 보장</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300">최고 수준 보안</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-950/30 to-green-900/20 border-green-500/30 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-10 h-10 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-400">투명하고 공정한 금융 생태계</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">투명한 거래 기록</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">실시간 공개 시스템</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">신뢰 기반 생태계</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - 번영을 위한 용의 비상 */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/mirwon-logo.png"
              alt="MirWon Dragon"
              width={80}
              height={80}
              className="w-20 h-20 mx-auto animate-bounce"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              번영을 위한 용의 비상
            </span>
          </h2>

          <div className="bg-slate-800/50 rounded-2xl p-8 mb-12">
            <p className="text-xl text-slate-300 mb-6">
              미르원은 한국 신화 속 <span className="text-teal-400 font-bold">용(미르)</span>처럼 강력한 힘과 지혜로
              돈을 '보호'하고 '성장'시킵니다.
            </p>
            <p className="text-lg text-slate-400">
              단순히 금고에 쌓아두는 '보물'이 아니라, 끊임없이 움직이며 대한민국 디지털 경제의 번영을 이끄는
              <span className="text-purple-400 font-semibold"> '살아있는 에너지'</span>로 만드는 것이 미르원이 그리는
              미래입니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white font-bold px-8 py-4 text-lg"
              asChild
            >
              <Link href="/mirwon-labs">
                <Sparkles className="w-5 h-5 mr-2" />
                미르원과 함께하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-teal-400 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <Link href="/staking-dashboard">더 알아보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
