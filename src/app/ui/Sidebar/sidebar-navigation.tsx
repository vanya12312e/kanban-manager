import { Calendar, Mail } from 'lucide-react'
import Link from 'next/link'
import { TbSmartHome } from 'react-icons/tb'

const ICON_SIZE = 24

const items = [{
	icon: <TbSmartHome size={ICON_SIZE} strokeWidth={0.8} color={'#454848'} />,
	text: 'Home'
}, {
	icon: <Mail size={ICON_SIZE} strokeWidth={0.8} color='#454848' />,
	text: 'Inbox'
}, {
	icon: <Calendar size={ICON_SIZE} strokeWidth={0.8} color='#454848' />,
	text: 'Calendar'
}]
const SidebarNavigation = () => {
	return (
		<nav>
			<ul>
				{items.map(item =>
					<li className='flex items-center gap-1 my-4' key={item.text}>
						{item.icon}
						<Link href={'/'} className='text-xl text-paragraph-secondary'>
							{item.text}
						</Link>
					</li>
				)}
			</ul>
		</nav>
	)
}

export default SidebarNavigation