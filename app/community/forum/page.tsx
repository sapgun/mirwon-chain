"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DashboardLayout from "@/components/layout/DashboardLayout"
import PageTransition from "@/components/layout/PageTransition"
import { MessageSquare, Search, Filter, Pin, Eye, Heart, Reply, MoreHorizontal, Plus } from "lucide-react"

const categories = [
  { name: "전체", count: 1247, color: "bg-slate-600" },
  { name: "일반 토론", count: 342, color: "bg-blue-600" },
  { name: "기술 개발", count: 189, color: "bg-green-600" },
  { name: "거버넌스", count: 156, color: "bg-purple-600" },
  { name: "스테이킹", count: 234, color: "bg-teal-600" },
  { name: "DeFi", count: 198, color: "bg-orange-600" },
  { name: "보안", count: 128, color: "bg-red-600" },
]

const pinnedPosts = [
  {
    id: 1,
    title: "📢 MirWon 메인넷 출시 공식 발표",
    author: "MirWon Team",
    category: "공지사항",
    replies: 89,
    views: 2341,
    time: "2024-01-15",
    isPinned: true,
  },
  {
    id: 2,
    title: "📋 커뮤니티 가이드라인 및 행동 규칙",
    author: "Community Manager",
    category: "공지사항",
    replies: 23,
    views: 1567,
    time: "2024-01-10",
    isPinned: true,
  },
]

const forumPosts = [
  {
    id: 3,
    title: "RWA 토큰화 프로세스 최적화 방안",
    author: "김개발자",
    avatar: "/placeholder-user.jpg",
    category: "기술 개발",
    replies: 34,
    views: 567,
    likes: 45,
    time: "2시간 전",
    status: "🔥 HOT",
    tags: ["RWA", "토큰화", "최적화"],
    lastReply: {
      author: "박블록체인",
      time: "30분 전",
    },
  },
  {
    id: 4,
    title: "스테이킹 리워드 계산 알고리즘 개선 제안",
    author: "이스테이커",
    avatar: "/placeholder-user.jpg",
    category: "스테이킹",
    replies: 28,
    views: 423,
    likes: 38,
    time: "4시간 전",
    status: "📈 TRENDING",
    tags: ["스테이킹", "리워드", "알고리즘"],
    lastReply: {
      author: "최검증자",
      time: "1시간 전",
    },
  },
  {
    id: 5,
    title: "거버넌스 투표: 네트워크 수수료 구조 개편",
    author: "최거버넌스",
    avatar: "/placeholder-user.jpg",
    category: "거버넌스",
    replies: 67,
    views: 891,
    likes: 72,
    time: "6시간 전",
    status: "⭐ POPULAR",
    tags: ["거버넌스", "투표", "수수료"],
    lastReply: {
      author: "정투표자",
      time: "2시간 전",
    },
  },
  {
    id: 6,
    title: "DeFi 프로토콜 보안 감사 결과 공유",
    author: "보안전문가",
    avatar: "/placeholder-user.jpg",
    category: "보안",
    replies: 19,
    views: 345,
    likes: 29,
    time: "8시간 전",
    status: "✨ NEW",
    tags: ["보안", "감사", "DeFi"],
    lastReply: {
      author: "개발자A",
      time: "3시간 전",
    },
  },
  {
    id: 7,
    title: "크로스체인 브릿지 성능 최적화 경험 공유",
    author: "브릿지개발자",
    avatar: "/placeholder-user.jpg",
    category: "기술 개발",
    replies: 15,
    views: 278,
    likes: 22,
    time: "12시간 전",
    status: "",
    tags: ["크로스체인", "브릿지", "성능"],
    lastReply: {
      author: "네트워크엔지니어",
      time: "4시간 전",
    },
  },
  {
    id: 8,
    title: "유동성 풀 운영 전략 및 수익률 분석",
    author: "DeFi트레이더",
    avatar: "/placeholder-user.jpg",
    category: "DeFi",
    replies: 42,
    views: 634,
    likes: 51,
    time: "1일 전",
    status: "",
    tags: ["유동성", "수익률", "분석"],
    lastReply: {
      author: "수익률분석가",
      time: "5시간 전",
    },
  },
]

export default function ForumPage() {
  return (
    <DashboardLayout>
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  커뮤니티 <span className="text-teal-400">포럼</span>
                </h1>
                <p className="text-slate-300">MirWon 생태계에 대한 모든 토론과 아이디어를 나누는 공간</p>
              </div>
              <Button className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold">
                <Plus className="w-4 h-4 mr-2" />새 글 작성
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="bg-slate-800/50 border-slate-700 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-teal-400">카테고리</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${category.color}`} />
                            <span className="text-white">{category.name}</span>
                          </div>
                          <Badge variant="secondary" className="bg-slate-600 text-slate-200">
                            {category.count}
                          </Badge>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-teal-400">포럼 통계</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">총 게시물</span>
                        <span className="font-semibold">1,247</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">활성 사용자</span>
                        <span className="font-semibold">892</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">오늘 새 글</span>
                        <span className="font-semibold text-teal-400">23</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">답글</span>
                        <span className="font-semibold">3,456</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Search and Filter */}
                <Card className="bg-slate-800/50 border-slate-700 mb-6">
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <Input
                          placeholder="포럼에서 검색..."
                          className="pl-10 bg-slate-700/50 border-slate-600 text-white"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Select defaultValue="latest">
                          <SelectTrigger className="w-32 bg-slate-700/50 border-slate-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            <SelectItem value="latest">최신순</SelectItem>
                            <SelectItem value="popular">인기순</SelectItem>
                            <SelectItem value="replies">답글순</SelectItem>
                            <SelectItem value="views">조회순</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-slate-600 text-slate-300 bg-transparent"
                        >
                          <Filter className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pinned Posts */}
                {pinnedPosts.length > 0 && (
                  <Card className="bg-slate-800/50 border-slate-700 mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg text-teal-400 flex items-center gap-2">
                        <Pin className="w-5 h-5" />
                        고정 게시물
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {pinnedPosts.map((post) => (
                          <div
                            key={post.id}
                            className="flex items-center justify-between p-4 rounded-lg bg-teal-500/5 border border-teal-500/20"
                          >
                            <div className="flex items-center gap-4">
                              <Pin className="w-4 h-4 text-teal-400" />
                              <div>
                                <h3 className="font-semibold text-white hover:text-teal-400 cursor-pointer">
                                  {post.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
                                  <span>{post.author}</span>
                                  <span>•</span>
                                  <span>{post.time}</span>
                                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                                    {post.category}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {post.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {post.views}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Forum Posts */}
                <div className="space-y-4">
                  {forumPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={post.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="text-lg font-semibold text-white hover:text-teal-400 cursor-pointer">
                                    {post.title}
                                  </h3>
                                  {post.status && (
                                    <Badge variant="secondary" className="bg-slate-600 text-slate-200">
                                      {post.status}
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-slate-400">
                                  <span className="font-medium text-slate-300">{post.author}</span>
                                  <span>•</span>
                                  <span>{post.time}</span>
                                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                                    {post.category}
                                  </Badge>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="bg-teal-500/10 text-teal-400 border-teal-500/20"
                                >
                                  #{tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-6 text-sm text-slate-400">
                                <span className="flex items-center gap-1">
                                  <MessageSquare className="w-4 h-4" />
                                  {post.replies} 답글
                                </span>
                                <span className="flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  {post.views} 조회
                                </span>
                                <span className="flex items-center gap-1">
                                  <Heart className="w-4 h-4" />
                                  {post.likes} 좋아요
                                </span>
                              </div>

                              {post.lastReply && (
                                <div className="text-sm text-slate-400">
                                  <span className="flex items-center gap-1">
                                    <Reply className="w-4 h-4" />
                                    {post.lastReply.author} • {post.lastReply.time}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="flex justify-center mt-8">
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    더 많은 게시물 보기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  )
}
