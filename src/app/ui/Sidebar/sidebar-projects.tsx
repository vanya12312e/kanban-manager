import { Plus } from 'lucide-react'
import SidebarProjectsList from '../SidebarProjects/SidebarProject'

const SidebarProjects = () => {
	return (
		<>
			<div className='w-full flex wrapper justify-between items-center mt-7 '>
				<p className='text-[#667085]'>Projects</p>
				<Plus color='#454848' size={20} className='cursor-pointer' />
			</div>
			<SidebarProjectsList />
		</>
	)
}

export default SidebarProjects