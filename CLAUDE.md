# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 주요 명령어

```bash
npm run dev      # 개발 서버 실행 (Next.js + Turbopack)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사 (flat config, Next.js 권장 설정)
```

shadcn/UI 컴포넌트 추가:
```bash
npx shadcn@latest add <컴포넌트명>
```

## 일반 규칙

- 모든 사용자 대면 텍스트와 커뮤니케이션은 **한국어**로 작성한다.

## 아키텍처

**Next.js 16 App Router** 기반, React 19, TypeScript (strict 모드), Tailwind CSS 4, shadcn/UI (New York 스타일) 사용.

### 라우팅 및 레이아웃

**라우트 그룹**을 활용하여 레이아웃 영역을 분리:

- `app/(marketing)/` — 공개 페이지. `SiteHeader` + `SiteFooter` 레이아웃 적용.
- `app/(dashboard)/dashboard/` — 대시보드 영역. 접이식 `SidebarProvider` 레이아웃 적용.

루트 레이아웃(`app/layout.tsx`)은 `ThemeProvider`(next-themes, class 기반 다크 모드)와 `Toaster`(sonner)로 전체를 감싼다.

### 컴포넌트 구조

- `components/ui/` — shadcn/UI 프리미티브 (33개). shadcn CLI로 관리하므로 직접 수정 금지.
- `components/dashboard/` — 대시보드 전용 컴포넌트 (사이드바, 헤더, 통계 카드, 데이터 테이블).
- `components/` (루트) — 공통 레이아웃 컴포넌트 (site-header, site-footer, theme-provider, theme-toggle).

### 핵심 패턴

- **Server Components가 기본**, `"use client"`는 인터랙티브 컴포넌트(폼, 토글, 테이블)에만 사용.
- **`cn()` 유틸리티** (`lib/utils.ts`) — `clsx` + `tailwind-merge`를 결합한 className 조합 함수.
- **CVA** (class-variance-authority)로 shadcn/UI 컴포넌트의 변형(variant) 관리.
- **경로 별칭**: `@/`가 프로젝트 루트에 매핑 (예: `@/components/ui/button`).
- **폼 처리**: react-hook-form + zod 유효성 검사.
- **데이터 테이블**: `@tanstack/react-table`과 제네릭 `DataTable<TData, TValue>` 래퍼 사용.

### 스타일링

Tailwind 4의 CSS 기반 설정 사용 (`tailwind.config.js` 없음). 테마 색상은 `app/globals.css`에서 OKLCH 색공간의 CSS 커스텀 프로퍼티로 정의. 다크 모드는 `@custom-variant dark (&:is(.dark *))` 방식.
