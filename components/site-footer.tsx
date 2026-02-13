import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  "제품": [
    { href: "#features", label: "기능 소개" },
    { href: "/dashboard", label: "대시보드" },
  ],
  "회사": [
    { href: "#", label: "소개" },
    { href: "#", label: "블로그" },
  ],
  "법적 고지": [
    { href: "#", label: "개인정보처리방침" },
    { href: "#", label: "이용약관" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-bold">
              스타터킷
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              빠른 개발을 위한 모던 웹 스타터킷.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-3 text-sm font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 스타터킷. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
