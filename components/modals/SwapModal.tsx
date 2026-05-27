"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpDown, ChevronDown, Settings, Zap } from "lucide-react"
import TokenSelector from "./TokenSelector"

interface Token {
  symbol: string
  name: string
  icon: string
  price: number
  balance: number
  category: "stablecoin" | "commodity" | "crypto"
}

interface SwapModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SwapModal({ isOpen, onClose }: SwapModalProps) {
  const [fromToken, setFromToken] = useState<Token>({
    symbol: "MRW",
    name: "MirWon",
    icon: "🪙",
    price: 1.0234,
    balance: 1250.5,
    category: "stablecoin",
  })

  const [toToken, setToToken] = useState<Token>({
    symbol: "USDC",
    name: "USD Coin",
    icon: "💵",
    price: 1.0,
    balance: 2840.75,
    category: "stablecoin",
  })

  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [isTokenSelectorOpen, setIsTokenSelectorOpen] = useState(false)
  const [selectingToken, setSelectingToken] = useState<"from" | "to">("from")
  const [slippage, setSlippage] = useState(0.5)
  const [isLoading, setIsLoading] = useState(false)

  const exchangeRate = fromToken.price / toToken.price
  const priceImpact = Number.parseFloat(fromAmount || "0") > 1000 ? 0.12 : 0.05
  const networkFee = 0.003 // ETH
  const protocolFee = Number.parseFloat(fromAmount || "0") * 0.003

  const handleTokenSelect = (token: Token) => {
    if (selectingToken === "from") {
      setFromToken(token)
    } else {
      setToToken(token)
    }
  }

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    if (value && !isNaN(Number.parseFloat(value))) {
      const result = Number.parseFloat(value) * exchangeRate * (1 - priceImpact / 100)
      setToAmount(result.toFixed(6))
    } else {
      setToAmount("")
    }
  }

  const handleToAmountChange = (value: string) => {
    setToAmount(value)
    if (value && !isNaN(Number.parseFloat(value))) {
      const result = Number.parseFloat(value) / exchangeRate / (1 - priceImpact / 100)
      setFromAmount(result.toFixed(6))
    } else {
      setFromAmount("")
    }
  }

  const handleMaxFrom = () => {
    const maxAmount = fromToken.balance.toString()
    handleFromAmountChange(maxAmount)
  }

  const handleSwapTokens = () => {
    const tempToken = fromToken
    setFromToken(toToken)
    setToToken(tempToken)

    const tempAmount = fromAmount
    setFromAmount(toAmount)
    setToAmount(tempAmount)
  }

  const handleSwap = async () => {
    setIsLoading(true)
    // Simulate transaction
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    onClose()
    // Show success notification
  }

  const isValidSwap =
    Number.parseFloat(fromAmount || "0") > 0 && Number.parseFloat(fromAmount || "0") <= fromToken.balance

  const getFeeColor = (category: string) => {
    switch (category) {
      case "commodity":
        return "text-yellow-400"
      case "crypto":
        return "text-blue-400"
      default:
        return "text-green-400"
    }
  }

  const getAdditionalFee = () => {
    if (fromToken.category === "commodity" || toToken.category === "commodity") {
      return 0.002 // Additional 0.2% for commodity tokens
    }
    return 0
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-teal-400">
                <ArrowUpDown className="h-5 w-5" />
                토큰 교환
              </div>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-300">
                <Settings className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* From Token */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm text-slate-400">보내는 토큰</label>
                <span className="text-xs text-slate-500">
                  잔액: {fromToken.balance.toLocaleString()} {fromToken.symbol}
                </span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => {
                      setSelectingToken("from")
                      setIsTokenSelectorOpen(true)
                    }}
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-lg transition-colors"
                  >
                    <span className="text-xl">{fromToken.icon}</span>
                    <span className="font-semibold">{fromToken.symbol}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="0.0"
                      value={fromAmount}
                      onChange={(e) => handleFromAmountChange(e.target.value)}
                      className="bg-transparent border-none text-right text-xl font-bold p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">
                    ${(Number.parseFloat(fromAmount || "0") * fromToken.price).toFixed(2)}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleMaxFrom}
                    className="text-teal-400 hover:text-teal-300 h-auto p-1"
                  >
                    MAX
                  </Button>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSwapTokens}
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 p-0"
              >
                <ArrowUpDown className="h-4 w-4 text-slate-400" />
              </Button>
            </div>

            {/* To Token */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm text-slate-400">받는 토큰</label>
                <span className="text-xs text-slate-500">
                  잔액: {toToken.balance.toLocaleString()} {toToken.symbol}
                </span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => {
                      setSelectingToken("to")
                      setIsTokenSelectorOpen(true)
                    }}
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-lg transition-colors"
                  >
                    <span className="text-xl">{toToken.icon}</span>
                    <span className="font-semibold">{toToken.symbol}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="0.0"
                      value={toAmount}
                      onChange={(e) => handleToAmountChange(e.target.value)}
                      className="bg-transparent border-none text-right text-xl font-bold p-0 h-auto focus-visible:ring-0"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">
                    ${(Number.parseFloat(toAmount || "0") * toToken.price).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Exchange Rate */}
            {Number.parseFloat(fromAmount || "0") > 0 && (
              <div className="bg-slate-800/50 p-3 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">환율</span>
                  <span className="text-white">
                    1 {fromToken.symbol} = {exchangeRate.toFixed(6)} {toToken.symbol}
                  </span>
                </div>
              </div>
            )}

            {/* Transaction Details */}
            {Number.parseFloat(fromAmount || "0") > 0 && (
              <div className="bg-slate-800/50 p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-slate-200">거래 상세</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">가격 영향도</span>
                    <span className={priceImpact > 0.1 ? "text-red-400" : "text-green-400"}>
                      {priceImpact.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">슬리피지 허용</span>
                    <span className="text-yellow-400">{slippage}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">프로토콜 수수료</span>
                    <span className={getFeeColor(fromToken.category)}>
                      {(protocolFee + getAdditionalFee() * Number.parseFloat(fromAmount || "0")).toFixed(4)}{" "}
                      {fromToken.symbol}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">네트워크 수수료</span>
                    <span className="text-blue-400">~{networkFee} ETH</span>
                  </div>
                </div>
              </div>
            )}

            {/* Swap Button */}
            <Button
              onClick={handleSwap}
              disabled={!isValidSwap || isLoading}
              className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  교환 중...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  교환하기
                </div>
              )}
            </Button>

            {/* Additional Fee Warning for Commodity Tokens */}
            {(fromToken.category === "commodity" || toToken.category === "commodity") && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg">
                <p className="text-yellow-400 text-sm">🥇 상품 담보 토큰 거래 시 추가 수수료 0.2%가 적용됩니다.</p>
              </div>
            )}

            {/* High Impact Warning */}
            {priceImpact > 0.1 && (
              <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                <p className="text-red-400 text-sm">⚠️ 높은 가격 영향도로 인해 예상보다 적은 토큰을 받을 수 있습니다.</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <TokenSelector
        isOpen={isTokenSelectorOpen}
        onClose={() => setIsTokenSelectorOpen(false)}
        onSelect={handleTokenSelect}
        excludeToken={selectingToken === "from" ? toToken.symbol : fromToken.symbol}
        title={selectingToken === "from" ? "보내는 토큰 선택" : "받는 토큰 선택"}
      />
    </>
  )
}
