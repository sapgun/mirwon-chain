"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"

export default function HeroSection() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Only render particles after window size is determined
  if (windowSize.width === 0) {
    return <div className="min-h-screen" /> // Placeholder during SSR
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 animate-pulse" />
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 px-4 py-2 text-sm font-medium">
                🚀 델타중립전략 기반 합성 원화 스테이블코인
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  차세대 DeFi
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">MirWon</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                AI 오케스트레이션으로 시장 위험을 최소화하면서 안정적인 수익을 창출하는 혁신적인 합성 원화 스테이블코인
                플랫폼
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-teal-400 mr-2" />
                </div>
                <p className="text-2xl font-bold text-white">99.8%</p>
                <p className="text-sm text-slate-400">델타 중립도</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-green-400 mr-2" />
                </div>
                <p className="text-2xl font-bold text-white">12.4%</p>
                <p className="text-sm text-slate-400">연평균 수익률</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-blue-400 mr-2" />
                </div>
                <p className="text-2xl font-bold text-white">2.1%</p>
                <p className="text-sm text-slate-400">최대 리스크</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-900 font-bold px-8 py-4 text-lg transition-all hover:scale-105"
              >
                플랫폼 시작하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-teal-400 px-8 py-4 text-lg transition-all hover:scale-105 bg-transparent"
              >
                델타중립전략 보기
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <p className="text-sm text-slate-400">참여 밸리데이터</p>
                <p className="text-lg font-bold text-white">47개 기관</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-slate-400">총 예치 자산</p>
                <p className="text-lg font-bold text-white">$74.2M</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-slate-400">AI 예측 정확도</p>
                <p className="text-lg font-bold text-white">94.7%</p>
              </div>
            </div>
          </div>

          {/* Right Content - Dragon Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />

              {/* Dragon Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/dragon-hero.png"
                  alt="MirWon Dragon - 델타중립전략 상징"
                  width={500}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 animate-bounce">
                <div className="bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-lg p-3">
                  <p className="text-teal-400 font-bold text-sm">실시간 헤징</p>
                  <p className="text-white text-xs">매 15분 자동 조정</p>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 animate-bounce" style={{ animationDelay: "1s" }}>
                <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3">
                  <p className="text-blue-400 font-bold text-sm">AI 분석</p>
                  <p className="text-white text-xs">12개 거래소 데이터</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent" />
    </section>
  )
}
