"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface DonutChartProps {
  data: Array<{
    name: string
    value: number
    color: string
  }>
  centerText?: string
  size?: number
}

export function DonutChart({ data, centerText = "MI%", size = 120 }: DonutChartProps) {
  const total = data.reduce((sum, entry) => sum + entry.value, 0)

  return (
    <div className="relative flex flex-col items-center">
      <ResponsiveContainer width={size} height={size}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={size * 0.3}
            outerRadius={size * 0.45}
            paddingAngle={2}
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
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-lg">{centerText}</span>
      </div>
    </div>
  )
}
