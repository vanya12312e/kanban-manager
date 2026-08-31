'use client'
import { useSidebar } from './ui/Sidebar/sidebar-provider'

export default function Home() {
  const { content, setContent } = useSidebar()

  return (
    <main className="flex-1">
      {content}
    </main>
  )
}