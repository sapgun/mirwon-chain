"use client"

import { LineChart, Line, ResponsiveContainer } from "recharts"

interface MiniChartProps {
  data?: Array<{ value: number }>
  color?: string
  height?: number
}

const defaultData = [
  { value: 20 },
  { value: 35 },
  { value: 25 },
  { value: 45 },
  { value: 55 },
  { value: 40 },
  { value: 60 },
]

export function MiniChart({ data = defaultData, color = "#00e6e6", height = 30 }: MiniChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
