"use client"

import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return <div className="animate-in fade-in-0 duration-500 slide-in-from-bottom-4">{children}</div>
}
