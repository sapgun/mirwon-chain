"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import DashboardLayout from "@/components/layout/DashboardLayout"
import PageTransition from "@/components/layout/PageTransition"
import Link from "next/link"
import {
  Users,
  MessageSquare,
  Calendar,
  TrendingUp,
  Star,
  ExternalLink,
  Github,
  Twitter,
  MessageCircle,
  Youtube,
  BookOpen,
  Award,
  Zap,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react"

const communityStats = [
  { label: "총 멤버", value: "24,847", icon: Users, color: "text-teal-400" },
  { label: "활성 토론", value: "1,247", icon: MessageSquare, color: "text-blue-400" },
  { label: "월간 이벤트", value: "18", icon: Calendar, color: "text-purple-400" },
  { label: "기여자", value: "892", icon: TrendingUp, color: "text-green-400" },
]

const socialChannels = [
  { name: "Discord", members: "12.5K", icon: MessageCircle, color: "bg-indigo-600", link: "#" },
  { name: "Telegram", members: "8.2K", icon: MessageSquare, color: "bg-blue-500", link: "#" },
  { name: "GitHub", members: "3.1K", icon: Github, color: "bg-gray-700", link: "#" },
  { name: "Twitter", members: "15.8K", icon: Twitter, color: "bg-sky-500", link: "#" },
  { name: "YouTube", members: "4.7K", icon: Youtube, color: "bg-red-600", link: "#" },
  { name: "Medium", members: "2.3K", icon: BookOpen, color: "bg-green-600", link: "#" },
]

const recentDiscussions = [
  {
    id: 1,
    title: "MirWon 메인넷 출시 준비 현황",
    author: "김개발자",
    avatar: "/placeholder-user.jpg",
    replies: 23,
    likes: 45,
    time: "2시간 전",
    category: "공지사항",
    status: "🔥 HOT",
    tags: ["메인넷", "출시", "로드맵"],
  },
  {
    id: 2,
    title: "RWA 토큰화 프로세스 개선 제안",
    author: "박블록체인",
    avatar: "/placeholder-user.jpg",
    replies: 18,
    likes: 32,
    time: "4시간 전",
    category: "기술 토론",
    status: "📈 TRENDING",
    tags: ["RWA", "토큰화", "개선"],
  },
  {
    id: 3,
    title: "스테이킹 리워드 최적화 전략",
    author: "이스테이커",
    avatar: "/placeholder-user.jpg",
    replies: 15,
    likes: 28,
    time: "6시간 전",
    category: "스테이킹",
    status: "✨ NEW",
    tags: ["스테이킹", "리워드", "최적화"],
  },
  {
    id: 4,
    title: "거버넌스 투표: 수수료 구조 개편",
    author: "최거버넌스",
    avatar: "/placeholder-user.jpg",
    replies: 42,
    likes: 67,
    time: "8시간 전",
    category: "거버넌스",
    status: "⭐ POPULAR",
    tags: ["거버넌스", "투표", "수수료"],
  },
]

const topContributors = [
  { name: "김개발자", contributions: 156, badge: "🥇", role: "Core Developer" },
  { name: "박블록체인", contributions: 142, badge: "🥈", role: "Community Manager" },
  { name: "이스테이커", contributions: 128, badge: "🥉", role: "Validator" },
  { name: "최거버넌스", contributions: 98, badge: "🏅", role: "Governance Lead" },
]

const upcomingEvents = [
  {
    title: "MirWon 개발자 밋업",
    date: "2024년 2월 15일",
    time: "19:00 KST",
    location: "서울 강남구",
    type: "오프라인",
    participants: 45,
  },
  {
    title: "RWA 기술 웨비나",
    date: "2024년 2월 20일",
    time: "14:00 KST",
    location: "온라인",
    type: "온라인",
    participants: 234,
  },
]

export default function CommunityPage() {
  return (
    <DashboardLayout>
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">
                MirWon <span className="text-teal-400">커뮤니티</span>
              </h1>
              <p className="text-xl text-slate-300">
                대한민국 디지털 금융 혁신을 함께 만들어가는 개발자, 투자자, 사용자들의 공간
              </p>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {communityStats.map((stat) => (
                <Card key={stat.label} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Social Channels */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-teal-400">소셜 채널</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {socialChannels.map((channel) => (
                        <Link
                          key={channel.name}
                          href={channel.link}
                          className="flex items-center gap-3 p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors group"
                        >
                          <div className={`p-2 rounded-lg ${channel.color}`}>
                            <channel.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium group-hover:text-teal-400 transition-colors">{channel.name}</p>
                            <p className="text-sm text-slate-400">{channel.members}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Discussions */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-xl text-teal-400">최근 토론</CardTitle>
                    <Link href="/community/forum">
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 bg-transparent">
                        전체 보기
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentDiscussions.map((discussion) => (
                        <div
                          key={discussion.id}
                          className="p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors border border-slate-600/50"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={discussion.avatar || "/placeholder.svg"} />
                                <AvatarFallback>{discussion.author[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-white hover:text-teal-400 cursor-pointer">
                                  {discussion.title}
                                </h3>
                                <p className="text-sm text-slate-400">
                                  {discussion.author} • {discussion.time}
                                </p>
                              </div>
                            </div>
                            <Badge variant="secondary" className="bg-slate-600 text-slate-200">
                              {discussion.status}
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {discussion.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <Heart className="w-4 h-4" />
                                {discussion.likes}
                              </span>
                              <Badge variant="outline" className="border-slate-600 text-slate-300">
                                {discussion.category}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-teal-400">
                                <Share2 className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-teal-400">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-3">
                            {discussion.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-teal-500/10 text-teal-400 border-teal-500/20"
                              >
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Top Contributors */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-teal-400 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      이달의 기여자
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topContributors.map((contributor, index) => (
                        <div key={contributor.name} className="flex items-center gap-3">
                          <span className="text-2xl">{contributor.badge}</span>
                          <Avatar className="w-10 h-10">
                            <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium text-white">{contributor.name}</p>
                            <p className="text-sm text-slate-400">{contributor.role}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-teal-400">{contributor.contributions}</p>
                            <p className="text-xs text-slate-500">기여</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-xl text-teal-400 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      다가오는 이벤트
                    </CardTitle>
                    <Link href="/community/events">
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 bg-transparent">
                        전체 보기
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/50">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-white">{event.title}</h3>
                            <Badge
                              variant="secondary"
                              className={
                                event.type === "온라인"
                                  ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                  : "bg-green-500/10 text-green-400 border-green-500/20"
                              }
                            >
                              {event.type}
                            </Badge>
                          </div>
                          <div className="space-y-1 text-sm text-slate-400">
                            <p>📅 {event.date}</p>
                            <p>🕐 {event.time}</p>
                            <p>📍 {event.location}</p>
                            <p className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {event.participants}명 참가 예정
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Community Guidelines */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-teal-400 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      커뮤니티 가이드라인
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm text-slate-300">
                      <div className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                        <p>존중과 예의를 바탕으로 한 건설적인 토론</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                        <p>기술적 정확성과 검증된 정보 공유</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                        <p>오픈소스 정신과 협업 문화 지향</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                        <p>스팸, 광고, 부적절한 콘텐츠 금지</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-teal-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-teal-400">뉴스레터 구독</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300 mb-4">MirWon의 최신 소식과 기술 업데이트를 받아보세요.</p>
                    <div className="space-y-3">
                      <Input placeholder="이메일 주소" className="bg-slate-800/50 border-slate-600 text-white" />
                      <Button className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold">
                        구독하기
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  )
}
