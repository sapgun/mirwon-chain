import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MirWon - 델타중립전략 기반 합성 원화 스테이블코인",
  description:
    "델타중립전략을 통한 합성 원화 스테이블코인과 혁신적인 DeFi 생태계. AI 오케스트레이션으로 시장 위험을 실시간 관리하는 차세대 디지털 금융 플랫폼입니다.",
  keywords: [
    "MirWon",
    "델타중립",
    "합성자산",
    "스테이블코인",
    "DeFi",
    "블록체인",
    "AI오케스트레이션",
    "원화연동",
    "디지털금융",
  ],
  authors: [{ name: "MirWon Team" }],
  creator: "MirWon",
  publisher: "MirWon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mirwon.io"),
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/ko",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "MirWon - 델타중립전략 기반 합성 원화 스테이블코인",
    description: "델타중립전략을 통한 합성 원화 스테이블코인과 혁신적인 DeFi 생태계",
    url: "https://mirwon.io",
    siteName: "MirWon",
    images: [
      {
        url: "/images/mirwon-logo.png",
        width: 1200,
        height: 630,
        alt: "MirWon - 델타중립전략 기반 합성 원화 스테이블코인",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MirWon - 델타중립전략 기반 합성 원화 스테이블코인",
    description: "델타중립전략을 통한 합성 원화 스테이블코인과 혁신적인 DeFi 생태계",
    site: "@MirWonOfficial",
    creator: "@MirWonOfficial",
    images: ["/images/mirwon-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-slate-950`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
