import type React from "react"
import { Suspense } from "react"
import "./global.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio - Computer Science Student</title>
        <meta name="description" content="Personal portfolio of a Computer Science student at BINUS University" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
