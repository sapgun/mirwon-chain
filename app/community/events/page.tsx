"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DashboardLayout from "@/components/layout/DashboardLayout"
import PageTransition from "@/components/layout/PageTransition"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  Search,
  Filter,
  Star,
  Gift,
  Trophy,
  Zap,
  Globe,
  Video,
  Coffee,
} from "lucide-react"

const featuredEvent = {
  id: 1,
  title: "MirWon 메인넷 출시 기념 글로벌 해커톤",
  description: "실물자산 토큰화와 DeFi 혁신을 주제로 한 대규모 해커톤 이벤트",
  date: "2024년 3월 15일 - 17일",
  time: "09:00 KST",
  location: "서울 코엑스 + 온라인",
  type: "하이브리드",
  participants: 1247,
  maxParticipants: 2000,
  prize: "100,000 USD",
  status: "등록 진행중",
  image: "/placeholder.jpg",
  organizer: "MirWon Foundation",
  tags: ["해커톤", "메인넷", "RWA", "DeFi"],
  highlights: ["총 상금 $100,000", "글로벌 개발자 참여", "실시간 멘토링", "네트워킹 세션"],
}

const upcomingEvents = [
  {
    id: 2,
    title: "RWA 기술 워크샵",
    description: "실물자산 토큰화 기술에 대한 심화 워크샵",
    date: "2024년 2월 20일",
    time: "14:00 KST",
    location: "온라인",
    type: "온라인",
    participants: 234,
    maxParticipants: 500,
    status: "등록 가능",
    organizer: "MirWon Tech Team",
    tags: ["워크샵", "RWA", "기술"],
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "개발자 밋업 - 서울",
    description: "서울 지역 MirWon 개발자들의 오프라인 모임",
    date: "2024년 2월 25일",
    time: "19:00 KST",
    location: "서울 강남구 테헤란로",
    type: "오프라인",
    participants: 45,
    maxParticipants: 80,
    status: "등록 가능",
    organizer: "Korean Blockchain Dev",
    tags: ["밋업", "네트워킹", "서울"],
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "스테이킹 전략 웨비나",
    description: "효율적인 스테이킹 전략과 리워드 최적화 방법",
    date: "2024년 3월 5일",
    time: "20:00 KST",
    location: "온라인",
    type: "온라인",
    participants: 567,
    maxParticipants: 1000,
    status: "등록 가능",
    organizer: "Staking Alliance",
    tags: ["웨비나", "스테이킹", "전략"],
    icon: <Video className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "DeFi 보안 컨퍼런스",
    description: "DeFi 프로토콜 보안과 감사에 대한 전문가 컨퍼런스",
    date: "2024년 3월 12일",
    time: "10:00 KST",
    location: "부산 벡스코",
    type: "오프라인",
    participants: 189,
    maxParticipants: 300,
    status: "등록 가능",
    organizer: "Security Research Lab",
    tags: ["컨퍼런스", "보안", "DeFi"],
    icon: <Globe className="w-5 h-5" />,
  },
]

const pastEvents = [
  {
    id: 6,
    title: "MirWon 테스트넷 론칭 이벤트",
    date: "2024년 1월 15일",
    participants: 892,
    status: "완료",
    rating: 4.8,
    highlights: ["성공적인 테스트넷 출시", "커뮤니티 참여 활발", "기술적 안정성 확인"],
  },
  {
    id: 7,
    title: "블록체인 교육 프로그램",
    date: "2024년 1월 8일",
    participants: 456,
    status: "완료",
    rating: 4.6,
    highlights: ["초보자 친화적 교육", "실습 중심 커리큘럼", "높은 만족도"],
  },
]

const eventCalendar = [
  {
    date: "2024-02-15",
    events: [{ title: "개발자 Q&A 세션", time: "14:00", type: "온라인" }],
  },
  {
    date: "2024-02-20",
    events: [{ title: "RWA 기술 워크샵", time: "14:00", type: "온라인" }],
  },
  {
    date: "2024-02-25",
    events: [{ title: "개발자 밋업 - 서울", time: "19:00", type: "오프라인" }],
  },
  {
    date: "2024-03-05",
    events: [{ title: "스테이킹 전략 웨비나", time: "20:00", type: "온라인" }],
  },
  {
    date: "2024-03-12",
    events: [{ title: "DeFi 보안 컨퍼런스", time: "10:00", type: "오프라인" }],
  },
  {
    date: "2024-03-15",
    events: [{ title: "글로벌 해커톤 시작", time: "09:00", type: "하이브리드" }],
  },
]

export default function EventsPage() {
  return (
    <DashboardLayout>
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">
                커뮤니티 <span className="text-teal-400">이벤트</span>
              </h1>
              <p className="text-xl text-slate-300">MirWon 생태계의 다양한 이벤트와 활동에 참여하세요</p>
            </div>

            {/* Search and Filter */}
            <Card className="bg-slate-800/50 border-slate-700 mb-8">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input placeholder="이벤트 검색..." className="pl-10 bg-slate-700/50 border-slate-600 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-32 bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="all">전체</SelectItem>
                        <SelectItem value="online">온라인</SelectItem>
                        <SelectItem value="offline">오프라인</SelectItem>
                        <SelectItem value="hybrid">하이브리드</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="upcoming">
                      <SelectTrigger className="w-32 bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="upcoming">예정</SelectItem>
                        <SelectItem value="ongoing">진행중</SelectItem>
                        <SelectItem value="past">완료</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 bg-transparent">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Event */}
            <Card className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border-teal-500/20 mb-8">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">특별 이벤트</span>
                </div>
                <CardTitle className="text-2xl text-white">{featuredEvent.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-slate-300 text-lg mb-6">{featuredEvent.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-sm text-slate-400">날짜</p>
                          <p className="font-medium">{featuredEvent.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-sm text-slate-400">시간</p>
                          <p className="font-medium">{featuredEvent.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-sm text-slate-400">장소</p>
                          <p className="font-medium">{featuredEvent.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-teal-400" />
                        <div>
                          <p className="text-sm text-slate-400">참가자</p>
                          <p className="font-medium">
                            {featuredEvent.participants}/{featuredEvent.maxParticipants}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredEvent.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-teal-500/10 text-teal-400 border-teal-500/20"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold">
                        지금 등록하기
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                        자세히 보기
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-slate-800/50 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Trophy className="w-5 h-5 text-yellow-400" />
                        <h3 className="font-semibold text-yellow-400">상금 정보</h3>
                      </div>
                      <p className="text-2xl font-bold text-white mb-2">{featuredEvent.prize}</p>
                      <p className="text-sm text-slate-400">총 상금 규모</p>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-6">
                      <h3 className="font-semibold text-white mb-4">주요 특징</h3>
                      <div className="space-y-2">
                        {featuredEvent.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Gift className="w-4 h-4 text-teal-400" />
                            <span className="text-sm text-slate-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-6">
                      <h3 className="font-semibold text-white mb-4">주최자</h3>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>MF</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-white">{featuredEvent.organizer}</p>
                          <p className="text-sm text-slate-400">공식 주최</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Upcoming Events */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">다가오는 이벤트</h2>
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <Card
                      key={event.id}
                      className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-teal-500/10 rounded-lg">{event.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{event.title}</h3>
                                <p className="text-slate-300 mb-3">{event.description}</p>
                              </div>
                              <Badge
                                variant="secondary"
                                className={
                                  event.type === "온라인"
                                    ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                    : event.type === "오프라인"
                                      ? "bg-green-500/10 text-green-400 border-green-500/20"
                                      : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                }
                              >
                                {event.type}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                              <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Clock className="w-4 h-4" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Users className="w-4 h-4" />
                                {event.participants}/{event.maxParticipants}
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {event.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="bg-slate-600/50 text-slate-300">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-slate-600 text-slate-300 bg-transparent"
                                >
                                  자세히
                                </Button>
                                <Button size="sm" className="bg-teal-500 hover:bg-teal-400 text-slate-900">
                                  등록
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Event Calendar */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-teal-400 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      이벤트 캘린더
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {eventCalendar.map((day, index) => (
                        <div key={index} className="border-l-2 border-teal-500 pl-4">
                          <p className="text-sm font-medium text-slate-300 mb-2">{day.date}</p>
                          {day.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="mb-2">
                              <p className="text-sm text-white font-medium">{event.title}</p>
                              <div className="flex items-center gap-2 text-xs text-slate-400">
                                <Clock className="w-3 h-3" />
                                {event.time}
                                <Badge
                                  variant="secondary"
                                  className={
                                    event.type === "온라인"
                                      ? "bg-blue-500/10 text-blue-400"
                                      : event.type === "오프라인"
                                        ? "bg-green-500/10 text-green-400"
                                        : "bg-purple-500/10 text-purple-400"
                                  }
                                >
                                  {event.type}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Past Events */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-teal-400">지난 이벤트</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pastEvents.map((event) => (
                        <div key={event.id} className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/50">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-white text-sm">{event.title}</h3>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span className="text-sm text-yellow-400">{event.rating}</span>
                            </div>
                          </div>
                          <div className="text-xs text-slate-400 mb-3">
                            {event.date} • {event.participants}명 참가
                          </div>
                          <div className="space-y-1">
                            {event.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                                <span className="text-xs text-slate-400">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Event Stats */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-teal-400">이벤트 통계</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">총 이벤트</span>
                        <span className="font-semibold">47</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">이번 달</span>
                        <span className="font-semibold text-teal-400">8</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">총 참가자</span>
                        <span className="font-semibold">12,456</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">평균 만족도</span>
                        <span className="font-semibold text-yellow-400">4.7★</span>
                      </div>
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
