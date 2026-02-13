import Link from "next/link"
import {
  Zap,
  Shield,
  Palette,
  Layers,
  Code,
  Rocket,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "빠른 성능",
    description:
      "Next.js 기반의 최적화된 성능을 기본으로 제공합니다. Server Components와 Streaming으로 즉각적인 페이지 로딩을 경험하세요.",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description:
      "TypeScript strict 모드를 완벽 지원합니다. 런타임이 아닌 빌드 시점에 오류를 잡아냅니다.",
  },
  {
    icon: Palette,
    title: "세련된 UI",
    description:
      "다크 모드를 지원하는 shadcn/UI 컴포넌트가 미리 구성되어 있습니다. 일관된 디자인 시스템을 자유롭게 커스터마이징하세요.",
  },
  {
    icon: Layers,
    title: "컴포넌트 라이브러리",
    description:
      "명확한 계층 구조로 정리된 33개 이상의 shadcn/UI 컴포넌트가 설치되어 있어 바로 사용할 수 있습니다.",
  },
  {
    icon: Code,
    title: "개발자 경험",
    description:
      "ESLint, TypeScript strict 모드, 경로 별칭이 미리 설정되어 있습니다. 설정이 아닌 개발에 집중하세요.",
  },
  {
    icon: Rocket,
    title: "프로덕션 준비 완료",
    description:
      "react-hook-form + zod 폼 검증, TanStack Table 데이터 테이블, 토스트 알림이 모두 갖춰져 있습니다.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-24 text-center md:px-6 md:py-32">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          모던 웹 앱을{" "}
          <span className="text-muted-foreground">빠르게 구축하세요</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Next.js, TypeScript, Tailwind CSS, shadcn/UI가 포함된 프로덕션 레디
          스타터킷. 빠르게 시작하는 데 필요한 모든 것이 준비되어 있습니다.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/dashboard">시작하기</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#features">더 알아보기</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t bg-muted/40 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              필요한 모든 것을 갖추고 있습니다
            </h2>
            <p className="mt-4 text-muted-foreground">
              모던 웹 개발을 위한 최고의 도구와 라이브러리가 미리 구성되어
              있습니다.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border bg-background">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            탄탄한 기반 위에서 다음 프로젝트를 시작하세요. 별도의 설정이
            필요하지 않습니다.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/dashboard">대시보드로 이동</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
