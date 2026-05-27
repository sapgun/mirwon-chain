"use client"

import type { ReactNode } from "react"
import Header from "../landing/Header"

interface DashboardLayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function DashboardLayout({ children, title, description }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 text-white">
      <Header />

      {/* Page Header */}
      {title && (
        <div className="px-8 py-8 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
            {description && <p className="text-slate-300 text-lg">{description}</p>}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="px-8 py-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  )
}
