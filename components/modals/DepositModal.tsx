"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, ChevronDown } from "lucide-react"
import TokenSelector from "./TokenSelector"

interface Token {
  symbol: string
  name: string
  icon: string
  price: number
  balance: number
  category: "stablecoin" | "commodity" | "crypto"
}

interface DepositModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DepositModal({ isOpen, onClose }: DepositModalProps) {
  const [tokenA, setTokenA] = useState<Token>({
    symbol: "MRW",
    name: "MirWon",
    icon: "🪙",
    price: 1.0234,
    balance: 1250.5,
    category: "stablecoin",
  })

  const [tokenB, setTokenB] = useState<Token>({
    symbol: "USDC",
    name: "USD Coin",
    icon: "💵",
    price: 1.0,
    balance: 2840.75,
    category: "stablecoin",
  })

  const [amountA, setAmountA] = useState("")
  const [amountB, setAmountB] = useState("")
  const [isTokenSelectorOpen, setIsTokenSelectorOpen] = useState(false)
  const [selectingToken, setSelectingToken] = useState<"A" | "B">("A")
  const [isLoading, setIsLoading] = useState(false)

  const poolShare = 0.0234 // 2.34%
  const currentAPY = 24.7
  const lpTokens = Number.parseFloat(amountA || "0") + Number.parseFloat(amountB || "0")

  const handleTokenSelect = (token: Token) => {
    if (selectingToken === "A") {
      setTokenA(token)
    } else {
      setTokenB(token)
    }
  }

  const handleAmountAChange = (value: string) => {
    setAmountA(value)
    if (value && !isNaN(Number.parseFloat(value))) {
      const equivalentB = ((Number.parseFloat(value) * tokenA.price) / tokenB.price).toFixed(6)
      setAmountB(equivalentB)
    } else {
      setAmountB("")
    }
  }

  const handleAmountBChange = (value: string) => {
    setAmountB(value)
    if (value && !isNaN(Number.parseFloat(value))) {
      const equivalentA = ((Number.parseFloat(value) * tokenB.price) / tokenA.price).toFixed(6)
      setAmountA(equivalentA)
    } else {
      setAmountA("")
    }
  }

  const handleMaxA = () => {
    const maxAmount = tokenA.balance.toString()
    handleAmountAChange(maxAmount)
  }

  const handleMaxB = () => {
    const maxAmount = tokenB.balance.toString()
    handleAmountBChange(maxAmount)
  }

  const handleDeposit = async () => {
    setIsLoading(true)
    // Simulate transaction
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    onClose()
    // Show success notification
  }

  const isValidDeposit =
    Number.parseFloat(amountA || "0") > 0 &&
    Number.parseFloat(amountB || "0") > 0 &&
    Number.parseFloat(amountA || "0") <= tokenA.balance &&
    Number.parseFloat(amountB || "0") <= tokenB.balance

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-teal-400">
              <Plus className="h-5 w-5" />
              유동성 공급
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Pool Info */}
            <div className="bg-slate-800/50 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-200">풀 정보</h3>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">활성화</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400">현재 APY</p>
                  <p className="text-green-400 font-bold">{currentAPY}%</p>
                </div>
                <div>
                  <p className="text-slate-400">풀 점유율</p>
                  <p className="text-teal-400 font-bold">{(poolShare * 100).toFixed(3)}%</p>
                </div>
              </div>
            </div>

            {/* Token A Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm text-slate-400">첫 번째 토큰</label>
                <span className="text-xs text-slate-500">
                  잔액: {tokenA.balance.toLocaleString()} {tokenA.symbol}
                </span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => {
                      setSelectingToken("A")
                      setIsTokenSelectorOpen(true)
                    }}
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-lg transition-colors"
                  >
                    <span className="text-xl">{tokenA.icon}</span>
                    <span className="font-semibold">{tokenA.symbol}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="0.0"
                      value={amountA}
                      onChange={(e) => handleAmountAChange(e.target.value)}
                      className="bg-transparent border-none text-right text-xl font-bold p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">
                    ${(Number.parseFloat(amountA || "0") * tokenA.price).toFixed(2)}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleMaxA}
                    className="text-teal-400 hover:text-teal-300 h-auto p-1"
                  >
                    MAX
                  </Button>
                </div>
              </div>
            </div>

            {/* Plus Icon */}
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                <Plus className="h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* Token B Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm text-slate-400">두 번째 토큰</label>
                <span className="text-xs text-slate-500">
                  잔액: {tokenB.balance.toLocaleString()} {tokenB.symbol}
                </span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => {
                      setSelectingToken("B")
                      setIsTokenSelectorOpen(true)
                    }}
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-lg transition-colors"
                  >
                    <span className="text-xl">{tokenB.icon}</span>
                    <span className="font-semibold">{tokenB.symbol}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="0.0"
                      value={amountB}
                      onChange={(e) => handleAmountBChange(e.target.value)}
                      className="bg-transparent border-none text-right text-xl font-bold p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">
                    ${(Number.parseFloat(amountB || "0") * tokenB.price).toFixed(2)}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleMaxB}
                    className="text-teal-400 hover:text-teal-300 h-auto p-1"
                  >
                    MAX
                  </Button>
                </div>
              </div>
            </div>

            {/* Transaction Summary */}
            {lpTokens > 0 && (
              <div className="bg-slate-800/50 p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-slate-200">거래 요약</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">LP 토큰 수량</span>
                    <span className="text-white font-semibold">{lpTokens.toFixed(6)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">풀 점유율</span>
                    <span className="text-teal-400 font-semibold">+{(poolShare * 100).toFixed(4)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">예상 연수익률</span>
                    <span className="text-green-400 font-semibold">{currentAPY}%</span>
                  </div>
                </div>
              </div>
            )}

            {/* Deposit Button */}
            <Button
              onClick={handleDeposit}
              disabled={!isValidDeposit || isLoading}
              className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  처리 중...
                </div>
              ) : (
                "유동성 공급"
              )}
            </Button>

            {/* Warning */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg">
              <p className="text-yellow-400 text-sm">
                ⚠️ 유동성 공급 시 비영구적 손실(Impermanent Loss) 위험이 있습니다.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <TokenSelector
        isOpen={isTokenSelectorOpen}
        onClose={() => setIsTokenSelectorOpen(false)}
        onSelect={handleTokenSelect}
        excludeToken={selectingToken === "A" ? tokenB.symbol : tokenA.symbol}
        title={selectingToken === "A" ? "첫 번째 토큰 선택" : "두 번째 토큰 선택"}
      />
    </>
  )
}
