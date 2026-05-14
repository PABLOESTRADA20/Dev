"use client"

import Navbar from "@/components/layout/Navbar"
import Topbar from "@/components/layout/Topbar"
import PageRenderer from "@/components/layout/PageRenderer"
import Login from "@/components/layout/Login"
import { useNav } from "@/context/NavContext"

export default function AppShell() {
  const { activePage } = useNav()

  if (activePage === "Login") {
    return (
      <div className="login-fullscreen">
        <Login />
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Topbar />
        <PageRenderer />
      </div>
    </>
  )
}