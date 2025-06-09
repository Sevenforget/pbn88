import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FitJourney | 당신의 피트니스 여정을 함께합니다",
  description: "운동 루틴, 식단 관리, 피트니스 팁을 제공하는 종합 피트니스 블로그",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  )
}
