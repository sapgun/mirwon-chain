"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const platformItems = [
    { href: "/validator-console", label: "밸리데이터 콘솔", description: "검증자 노드 관리 및 모니터링" },
    { href: "/staking-dashboard", label: "스테이킹", description: "MRW 토큰 스테이킹 및 보상" },
    { href: "/liquidity-dashboard", label: "유동성", description: "유동성 공급 및 스왑 거래" },
    { href: "/delta-neutral-strategy", label: "델타중립전략", description: "리스크 헤징 및 안정성 관리" },
  ]

  const navItems = [
    { href: "/about", label: "About Us" },
    { href: "/mirwon-labs", label: "MirWon Labs", highlight: true },
    { href: "/developer-portal", label: "개발자" },
    { href: "/community", label: "커뮤니티" },
  ]

  const closeMenu = () => setIsOpen(false)

  const isPlatformActive = platformItems.some((item) => pathname === item.href)

  return (
    <header className="sticky top-0 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/mirwon-logo.png" alt="MirWon Dragon" width={40} height={40} className="w-10 h-10" />
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-teal-400">MirWon</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          {/* Platform Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 hover:text-teal-400 transition-colors font-medium text-sm ${
                isPlatformActive ? "text-teal-400" : "text-slate-300"
              }`}
            >
              플랫폼
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-slate-900 border-slate-700 p-2">
              {platformItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild className="p-0">
                  <Link
                    href={item.href}
                    className={`flex flex-col items-start gap-1 p-3 rounded-lg hover:bg-slate-800 transition-colors ${
                      pathname === item.href ? "bg-teal-500/10 text-teal-400" : "text-slate-300"
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs text-slate-400">{item.description}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Nav Items */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-teal-400 transition-colors font-medium text-sm ${
                pathname === item.href ? "text-teal-400" : ""
              } ${
                item.highlight
                  ? "bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent font-bold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-teal-400 after:animate-pulse"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex gap-3">
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-teal-400 transition-colors bg-transparent"
          >
            Whitepaper
          </Button>
          <Button className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold transition-colors">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-teal-400">
              <Menu className="h-6 w-6" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-slate-950 border-slate-800">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
                  <Image src="/images/mirwon-logo.png" alt="MirWon Dragon" width={32} height={32} className="w-8 h-8" />
                  <span className="font-extrabold text-xl tracking-tight text-teal-400">MirWon</span>
                </Link>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-1 py-6 flex-1">
                {/* Platform Section */}
                <div className="px-4 py-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">플랫폼</span>
                </div>
                {platformItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex flex-col px-6 py-3 rounded-lg text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-teal-500/10 text-teal-400 border-l-4 border-teal-400"
                        : "text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-slate-400 mt-1">{item.description}</span>
                  </Link>
                ))}

                {/* Other Nav Items */}
                <div className="px-4 py-2 mt-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">서비스</span>
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-teal-500/10 text-teal-400 border-l-4 border-teal-400"
                        : "text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
                    } ${
                      item.highlight && pathname !== item.href
                        ? "bg-gradient-to-r from-purple-500/10 to-teal-400/10 border-l-4 border-purple-500"
                        : ""
                    }`}
                  >
                    <span
                      className={
                        item.highlight
                          ? "bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent font-bold"
                          : ""
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-3 pt-6 border-t border-slate-800">
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-teal-400 transition-colors bg-transparent"
                  onClick={closeMenu}
                >
                  Whitepaper
                </Button>
                <Button
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold transition-colors"
                  onClick={closeMenu}
                >
                  Get Started
                </Button>
              </div>

              {/* Mobile Footer */}
              <div className="pt-6 border-t border-slate-800 mt-auto">
                <p className="text-xs text-slate-500 text-center">© 2024 MirWon. All rights reserved.</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
