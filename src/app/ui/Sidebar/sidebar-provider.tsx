'use client'
import { createContext, useContext, useState, type ReactNode } from "react"

interface SidebarContextValue {
	content: ReactNode | null
	setContent: (content: ReactNode | null) => void
}

const SidebarContext = createContext<SidebarContextValue | null>(null)

export function SidebarProvider({ children }: { children: ReactNode }) {
	const [content, setContent] = useState<ReactNode | null>(null)

	return (
		<SidebarContext.Provider value={{ content, setContent }}>
			{children}
		</SidebarContext.Provider>
	)
}

export function useSidebar() {
	const context = useContext(SidebarContext)

	if (!context) {
		throw new Error("useSidebar must be used inside SidebarProvider")
	}

	return context
}