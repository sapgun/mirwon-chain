"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", active: pathname === "/" },
    { href: "/validator-console", label: "Dashboard", active: pathname === "/validator-console" },
    { href: "/staking-dashboard", label: "Simulation", active: pathname === "/staking-dashboard" },
    { href: "/liquidity-dashboard", label: "Governance", active: pathname === "/liquidity-dashboard" },
  ]

  return (
    <header className="flex items-center justify-between py-6 px-8">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <h1 className="text-4xl font-bold text-white">MirWon</h1>
        </Link>
      </div>
      <nav className="flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-lg font-medium transition-colors ${
              item.active ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Button className="bg-[#00e6e6] text-gray-900 hover:bg-[#00c2c2] font-semibold px-6 py-2 rounded-lg">
          Get Started
        </Button>
      </nav>
    </header>
  )
}
