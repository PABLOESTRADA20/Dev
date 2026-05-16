"use client"

import { useNav } from "@/context/NavContext"
import dynamic from "next/dynamic"

const Feed              = dynamic(() => import("@/components/feed/Feed"),                       { ssr: false })
const ExplorePage       = dynamic(() => import("@/components/explore/ExplorePage"),             { ssr: false })
const Chat              = dynamic(() => import("@/components/chat/Chat"),                       { ssr: false })
const Comunidades       = dynamic(() => import("@/components/communities/Comunidades"),         { ssr: false })
const Login             = dynamic(() => import("@/components/layout/Login"),                    { ssr: false })
const ProfilePage       = dynamic(() => import("@/components/profile/ProfilePage"),             { ssr: false })
const NotificationsPage = dynamic(() => import("@/components/notifications/NotificationsPage"), { ssr: false })
const SettingsPage      = dynamic(() => import("@/components/settings/Settingspage"),              { ssr: false })

const Placeholder = ({ name }: { name: string }) => (
  <div className="p-8 text-text-h text-[20px] font-bold">
    {name} — próximamente
  </div>
)

export default function PageRenderer() {
  const { activePage } = useNav()

  switch (activePage) {
    case "Feed":           return <Feed />
    case "Explorar":       return <ExplorePage />
    case "Comunidades":    return <Comunidades />
    case "Guardados":      return <Placeholder name="Guardados" />
    case "Chat":           return <Chat />
    case "Login":          return <Login />
    case "Perfil":         return <ProfilePage />
    case "Notificaciones": return <NotificationsPage />
    case "Configuración":  return <SettingsPage />
    default:               return <Feed />
  }
}