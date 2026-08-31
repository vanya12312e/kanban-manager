import { ListChevronsUpDown } from 'lucide-react'
import Image from 'next/image'

const SidebarHeader = () => {
	return (
		<div className='flex justify-between w-full items-center'>
			{/* Logo */}
			<div className='flex gap-1.5'>
				<Image src={'/logo.png'} alt='logo' width={52} height={52} />
				<div className='py-1'>
					<h1 className='font-medium text-xl'>Oripio Desing</h1>
					<p className='text-text-secondary text-paragraph-secondary leading-3.5'>Team Plan</p>
				</div>
			</div>
			<ListChevronsUpDown className='cursor-pointer' color='#9f9f9f' />
		</div>
	)
}

export default SidebarHeader