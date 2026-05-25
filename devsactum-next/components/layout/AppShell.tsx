"use client"

import Navbar from "@/components/layout/Navbar"
import Topbar from "@/components/layout/Topbar"
import PageRenderer from "@/components/layout/PageRenderer"
import RightPanel from "@/components/panel/Panel"
import Login from "@/components/layout/Login"
import { useNav } from "@/context/NavContext"
import { ToastProvider } from "@/components/ui/Toast"

const PAGES_WITH_PANEL = ["Feed"]

export default function AppShell() {
  const { activePage } = useNav()

  if (activePage === "Login") {
    return (
      <ToastProvider>
        <div className="min-h-screen w-full flex items-center justify-center bg-bg">
          <Login />
        </div>
      </ToastProvider>
    )
  }

  const showPanel = PAGES_WITH_PANEL.includes(activePage)

  return (
    <ToastProvider>
      <div className="flex min-h-screen bg-bg">
        <Navbar />
        <div className="flex flex-col flex-1 min-h-screen min-w-0">
          <Topbar />
          <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto animate-fade-in">
              <PageRenderer />
            </main>
            {showPanel && <RightPanel />}
          </div>
        </div>
      </div>
    </ToastProvider>
  )
}