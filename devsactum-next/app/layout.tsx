import type { Metadata } from "next"
import "./globals.css"
import { NavProvider } from "@/context/NavContext"
 
export const metadata: Metadata = {
  title: "Devsanctum",
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="m-0 p-0 w-full min-h-screen">
      <body className="m-0 p-0 w-full min-h-screen bg-bg text-text flex font-sans">
        <NavProvider>
          {children}
        </NavProvider>
      </body>
    </html>
  )
}