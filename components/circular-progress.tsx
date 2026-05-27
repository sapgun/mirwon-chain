"use client"

import type React from "react"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface CircularProgressProps {
  value: number
  max: number
  size?: number
  strokeWidth?: number
  centerContent?: React.ReactNode
}

export function CircularProgress({ value, max, size = 120, strokeWidth = 8, centerContent }: CircularProgressProps) {
  const percentage = (value / max) * 100
  const data = [
    { name: "completed", value: percentage, color: "#00e6e6" },
    { name: "remaining", value: 100 - percentage, color: "#2A3B4D" },
  ]

  return (
    <div className="relative flex flex-col items-center">
      <ResponsiveContainer width={size} height={size}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={size * 0.35}
            outerRadius={size * 0.45}
            paddingAngle={0}
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">{centerContent}</div>
    </div>
  )
}
