import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import Fireflies from "../components/effects/fireflies"
import ScrollFadeEffect from "../components/effects/scroll-fade"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} min-h-dvh text-white bg-gradient-to-tr from-slate-950 to-slate-800`}
      >
        <Fireflies density={28} color="hsl(182 72% 60%)" maxRadius={2.2} />
        <ScrollFadeEffect range={220} />
        <Suspense fallback={null}>
          <div className="relative z-10">{children}</div>
        </Suspense>

        <Analytics />
      </body>
    </html>
  )
}
