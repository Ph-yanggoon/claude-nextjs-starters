import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Next.js 스타터킷",
    template: "%s | Next.js 스타터킷",
  },
  description: "Next.js, TypeScript, Tailwind CSS, shadcn/UI 기반 프로덕션 레디 스타터킷",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "Next.js 스타터킷",
    description: "Next.js, TypeScript, Tailwind CSS, shadcn/UI 기반 프로덕션 레디 스타터킷",
    siteName: "Next.js 스타터킷",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js 스타터킷",
    description: "Next.js, TypeScript, Tailwind CSS, shadcn/UI 기반 프로덕션 레디 스타터킷",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
