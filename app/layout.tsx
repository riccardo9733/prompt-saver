import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "CLI-UI | Terminal-Inspired Interface",
  description: "Modern web application with CLI-inspired UI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} font-mono`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  )
}
