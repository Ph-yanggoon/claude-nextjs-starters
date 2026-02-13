import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
} from "lucide-react"

import { StatsCard } from "@/components/dashboard/stats-card"
import { DataTable } from "@/components/dashboard/data-table"
import { columns, samplePayments } from "@/components/dashboard/columns"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const stats = [
  {
    title: "총 매출",
    value: "$45,231.89",
    description: "지난달 대비 +20.1%",
    icon: DollarSign,
  },
  {
    title: "구독자",
    value: "+2,350",
    description: "지난달 대비 +180.1%",
    icon: Users,
  },
  {
    title: "판매",
    value: "+12,234",
    description: "지난달 대비 +19%",
    icon: CreditCard,
  },
  {
    title: "현재 활성",
    value: "+573",
    description: "지난 1시간 이후 +201",
    icon: Activity,
  },
]

const recentActivity = [
  { name: "김민지", action: "구매를 완료했습니다", time: "2분 전", initials: "민" },
  { name: "박준호", action: "뉴스레터에 가입했습니다", time: "15분 전", initials: "준" },
  { name: "이서연", action: "프로필 설정을 변경했습니다", time: "1시간 전", initials: "서" },
  { name: "최유진", action: "지원 티켓을 제출했습니다", time: "3시간 전", initials: "유" },
  { name: "정하은", action: "Pro 플랜으로 업그레이드했습니다", time: "5시간 전", initials: "하" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">
          애플리케이션 지표 및 최근 활동 개요입니다.
        </p>
      </div>

      {/* 통계 그리드 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* 콘텐츠 그리드 */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* 데이터 테이블 */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>최근 결제</CardTitle>
            <CardDescription>
              최근 결제 내역 목록입니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={samplePayments} />
          </CardContent>
        </Card>

        {/* 최근 활동 */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
            <CardDescription>최근 사용자 활동 내역입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <Avatar className="size-9">
                    <AvatarFallback>{item.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {item.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.action}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
