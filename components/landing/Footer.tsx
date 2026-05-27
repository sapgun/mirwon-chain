"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Linkedin, Mail, Shield, TrendingUp, Users, Zap } from "lucide-react"

const footerLinks = {
  platform: [
    { name: "밸리데이터 콘솔", href: "/validator-console" },
    { name: "스테이킹 대시보드", href: "/staking-dashboard" },
    { name: "유동성 관리", href: "/liquidity-dashboard" },
    { name: "델타중립전략", href: "/delta-neutral-strategy" },
  ],
  developers: [
    { name: "API 문서", href: "/developer-portal/docs" },
    { name: "SDK 다운로드", href: "/developer-portal" },
    { name: "테스트넷", href: "/developer-portal" },
    { name: "트랜잭션 탐색기", href: "/developer-portal/explorer" },
  ],
  community: [
    { name: "포럼", href: "/community/forum" },
    { name: "이벤트", href: "/community/events" },
    { name: "거버넌스", href: "/community" },
    { name: "지원", href: "/community" },
  ],
  resources: [
    { name: "백서", href: "#" },
    { name: "보안 감사", href: "#" },
    { name: "브랜드 키트", href: "#" },
    { name: "도움말", href: "#" },
  ],
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:contact@mirwon.io" },
]

const stats = [
  { icon: TrendingUp, label: "연평균 수익률", value: "12.4%" },
  { icon: Shield, label: "델타 중립도", value: "99.8%" },
  { icon: Users, label: "참여 밸리데이터", value: "47개" },
  { icon: Zap, label: "AI 예측 정확도", value: "94.7%" },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">MirWon 뉴스레터 구독</h3>
              <p className="text-slate-300 text-lg">델타중립전략 업데이트와 플랫폼 소식을 가장 먼저 받아보세요</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-teal-500"
              />
              <Button className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-8">구독하기</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto bg-teal-500/20 rounded-full flex items-center justify-center mb-3">
                  <stat.icon className="h-6 w-6 text-teal-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image src="/images/mirwon-logo.png" alt="MirWon Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-2xl font-bold text-white">MirWon</span>
            </Link>

            <p className="text-slate-300 mb-6 leading-relaxed">
              델타중립전략 기반 합성 원화 스테이블코인으로 안전하고 수익성 높은 DeFi 생태계를 구축합니다.
            </p>

            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-slate-400 group-hover:text-slate-900" />
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30">기관급 보안</Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">AI 기반</Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">실시간 헤징</Badge>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">플랫폼</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">개발자</h4>
            <ul className="space-y-3">
              {footerLinks.developers.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">커뮤니티</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">리소스</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-slate-400 text-sm">© 2024 MirWon. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                  개인정보처리방침
                </Link>
                <Link href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                  이용약관
                </Link>
                <Link href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                  쿠키 정책
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-400 text-sm">네트워크 정상 운영</span>
              </div>
              <Badge className="bg-slate-800 text-slate-300 border-slate-700">v1.9.0</Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
