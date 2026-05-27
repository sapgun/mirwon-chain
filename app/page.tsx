import Header from "../components/landing/Header"
import HeroSection from "../components/landing/HeroSection"
import FeaturesSection from "../components/landing/FeaturesSection"
import NetworkSection from "../components/landing/NetworkSection"
import UseCasesSection from "../components/landing/UseCasesSection"
import Footer from "../components/landing/Footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { TrendingUp, Shield, Coins, Brain } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-800 min-h-screen text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <NetworkSection />
        <UseCasesSection />

        {/* Features Section */}
        <section className="px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* MRW Feature */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-[#00e6e6] rounded-full flex items-center justify-center">
                  <Coins className="h-10 w-10 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold">MRW</h3>
                <p className="text-lg text-gray-300">
                  합성 원화
                  <br />
                  스테이블코인
                </p>
              </div>

              {/* Delta Neutral */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-[#00e6e6] rounded-full flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold">델타중립전략</h3>
                <p className="text-lg text-gray-300">
                  시장 위험
                  <br />
                  최소화
                </p>
              </div>

              {/* Risk Management */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-[#00e6e6] rounded-full flex items-center justify-center">
                  <Shield className="h-10 w-10 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold">리스크 관리</h3>
                <p className="text-lg text-gray-300">
                  실시간 모니터링
                  <br />
                  자동 리밸런싱
                </p>
              </div>

              {/* AI */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-[#00e6e6] rounded-full flex items-center justify-center">
                  <Brain className="h-10 w-10 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold">AI 오케스트레이션</h3>
                <p className="text-lg text-gray-300">지능형 전략 관리</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Links Section */}
        <section className="px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">플랫폼 대시보드</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/validator-console">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-[#00e6e6] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-gray-900">V</span>
                    </div>
                    <h3 className="text-2xl font-bold">밸리데이터 콘솔</h3>
                    <p className="text-gray-300">검증자 네트워크 관리</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/staking-dashboard">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-[#00e6e6] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-gray-900">S</span>
                    </div>
                    <h3 className="text-2xl font-bold">스테이킹</h3>
                    <p className="text-gray-300">스테이킹 및 위임 관리</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/liquidity-dashboard">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-[#00e6e6] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-gray-900">L</span>
                    </div>
                    <h3 className="text-2xl font-bold">유동성</h3>
                    <p className="text-gray-300">유동성 풀 관리</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/delta-neutral-strategy">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-[#00e6e6] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-8 w-8 text-gray-900" />
                    </div>
                    <h3 className="text-2xl font-bold">델타중립전략</h3>
                    <p className="text-gray-300">AI 기반 수익 창출</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
