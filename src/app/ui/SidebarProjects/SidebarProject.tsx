'use client'

import { GripVertical } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useSidebar } from '../Sidebar/sidebar-provider'

const PROJECTS = [
	{ id: 1, title: 'Product Launch 2026', logo: '/green-project-logo.png' },
	{ id: 2, title: 'Marketing Campaign', logo: '/green-project-logo.png' },
	{ id: 3, title: 'App Redesign', logo: '/green-project-logo.png' },
]


interface SidebarProjectProps {
	title: string
	logo: string
	isSelected: boolean
	onClick: () => void
}



const SidebarProject = ({ title, logo, isSelected, onClick }: SidebarProjectProps) => {

	return (
		<div
			onClick={onClick}
			className={`
        flex items-center gap-1.5 p-2 rounded-2xl cursor-pointer transition-colors duration-150
        ${isSelected ? 'bg-[#0083ff]/15' : 'hover:bg-gray-100 text-[#020411]'}
      `}
		>
			<GripVertical
				size={18}
				color={isSelected ? '#0083ff' : '#667085'}
				className='shrink-0'
			/>
			<Image
				src={logo}
				alt='project-logo'
				width={20}
				height={20}
				className='shrink-0 object-contain'
			/>
			<p className='leading-none select-none'>{title}</p>
		</div>
	)
}

export default function SidebarProjectsList() {
	const [selectedId, setSelectedId] = useState<number | null>(1)

	const { setContent } = useSidebar()

	return (
		<div className='flex flex-col gap-1'>
			{PROJECTS.map((project) => (
				<SidebarProject
					key={project.id}
					title={project.title}
					logo={project.logo}
					isSelected={selectedId === project.id}
					onClick={() => {
						setSelectedId(project.id)
						setContent(<div className='p-4'>Selected Project: {project.title}</div>)
					}}
				/>
			))}
		</div>
	)
}