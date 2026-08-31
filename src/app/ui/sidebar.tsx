import React from 'react'
import SidebarHeader from './Sidebar/sidebar-header'

type SidebarContent = React.ReactNode

interface SidebarContextValue {
	content: SidebarContent
	setContent: React.Dispatch<React.SetStateAction<SidebarContent>>
	close: () => void
}

const Sidebar = () => {
	return (
		<aside className='w-[15.5%] bg-sidebar-bg h-screen py-2 px-3'>
			<section className='logo -mx-3 px-3 box-border border-b border-[#dbd8d8] pb-2'>
				<SidebarHeader />
			</section>
			<p className='text-[#667085]'>General</p>
		</aside>
	)
}

export default Sidebar