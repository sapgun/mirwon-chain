"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search } from "lucide-react"

interface Token {
  symbol: string
  name: string
  icon: string
  price: number
  balance: number
  category: "stablecoin" | "commodity" | "crypto"
}

const tokens: Token[] = [
  // Stablecoins
  { symbol: "MRW", name: "MirWon", icon: "🪙", price: 1.0234, balance: 1250.5, category: "stablecoin" },
  { symbol: "USDC", name: "USD Coin", icon: "💵", price: 1.0, balance: 2840.75, category: "stablecoin" },
  { symbol: "USDT", name: "Tether USD", icon: "💰", price: 0.9998, balance: 1890.25, category: "stablecoin" },
  { symbol: "RLUSD", name: "Ripple USD", icon: "🌊", price: 1.0001, balance: 750.0, category: "stablecoin" },
  { symbol: "USD1", name: "USD1 Stablecoin", icon: "🔷", price: 1.0003, balance: 500.0, category: "stablecoin" },
  { symbol: "DAI", name: "Dai", icon: "🟡", price: 0.9999, balance: 1200.0, category: "stablecoin" },
  { symbol: "FRAX", name: "Frax", icon: "❄️", price: 1.0002, balance: 300.0, category: "stablecoin" },

  // Commodity tokens
  { symbol: "PAXG", name: "PAX Gold", icon: "🥇", price: 2034.5, balance: 0.5, category: "commodity" },
  { symbol: "XAUT", name: "Tether Gold", icon: "🏆", price: 2032.8, balance: 0.3, category: "commodity" },

  // Crypto
  { symbol: "ETH", name: "Ethereum", icon: "💎", price: 3245.67, balance: 2.45, category: "crypto" },
  { symbol: "BTC", name: "Bitcoin", icon: "₿", price: 67890.12, balance: 0.15, category: "crypto" },
  { symbol: "ATOM", name: "Cosmos", icon: "⚛️", price: 12.34, balance: 150.0, category: "crypto" },
]

const categoryColors = {
  stablecoin: "bg-green-500/20 text-green-400 border-green-500/30",
  commodity: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  crypto: "bg-blue-500/20 text-blue-400 border-blue-500/30",
}

const categoryLabels = {
  stablecoin: "스테이블코인",
  commodity: "상품",
  crypto: "암호화폐",
}

interface TokenSelectorProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (token: Token) => void
  excludeToken?: string
  title?: string
}

export default function TokenSelector({
  isOpen,
  onClose,
  onSelect,
  excludeToken,
  title = "토큰 선택",
}: TokenSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredTokens = tokens.filter((token) => {
    if (excludeToken && token.symbol === excludeToken) return false

    const matchesSearch =
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "all" || token.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const handleSelect = (token: Token) => {
    onSelect(token)
    onClose()
    setSearchTerm("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-teal-400">{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="토큰 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-600 text-white placeholder-slate-400"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            <Badge
              variant={selectedCategory === "all" ? "default" : "outline"}
              className={`cursor-pointer ${selectedCategory === "all" ? "bg-teal-500 text-slate-900" : "border-slate-600 text-slate-300 hover:bg-slate-800"}`}
              onClick={() => setSelectedCategory("all")}
            >
              전체
            </Badge>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <Badge
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                className={`cursor-pointer ${selectedCategory === key ? categoryColors[key as keyof typeof categoryColors] : "border-slate-600 text-slate-300 hover:bg-slate-800"}`}
                onClick={() => setSelectedCategory(key)}
              >
                {label}
              </Badge>
            ))}
          </div>

          {/* Token List */}
          <ScrollArea className="h-80">
            <div className="space-y-2">
              {filteredTokens.map((token) => (
                <div
                  key={token.symbol}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 cursor-pointer transition-colors"
                  onClick={() => handleSelect(token)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{token.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{token.symbol}</span>
                        <Badge className={`text-xs ${categoryColors[token.category]}`}>
                          {categoryLabels[token.category]}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400">{token.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${token.price.toFixed(4)}</p>
                    <p className="text-sm text-slate-400">
                      {token.balance.toLocaleString()} {token.symbol}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {filteredTokens.length === 0 && <div className="text-center py-8 text-slate-400">검색 결과가 없습니다.</div>}
        </div>
      </DialogContent>
    </Dialog>
  )
}
