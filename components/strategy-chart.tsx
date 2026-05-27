"use client"

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

interface StrategyChartProps {
  data?: Array<{
    time: string
    portfolio: number
    hedge: number
    collateral: number
  }>
}

const defaultData = [
  { time: "12:40", portfolio: 130000, hedge: 125000, collateral: 120000 },
  { time: "13:00", portfolio: 128000, hedge: 123000, collateral: 119000 },
  { time: "14:00", portfolio: 132000, hedge: 127000, collateral: 121000 },
  { time: "15:00", portfolio: 129000, hedge: 124000, collateral: 118000 },
  { time: "16:00", portfolio: 131000, hedge: 126000, collateral: 120000 },
  { time: "17:00", portfolio: 128000, hedge: 122000, collateral: 117000 },
  { time: "18:00", portfolio: 130000, hedge: 125000, collateral: 119000 },
]

export function StrategyChart({ data = defaultData }: StrategyChartProps) {
  return (
    <div className="h-40 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
          <YAxis hide />
          <Line type="monotone" dataKey="portfolio" stroke="#00e6e6" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="hedge" stroke="#3b82f6" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="collateral" stroke="#10b981" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
