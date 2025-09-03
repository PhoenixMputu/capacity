'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { NavbarLink } from '@/types/navbar';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from '@/components/ui/navigation-menu';

type NavbarTabletProps = {
	links: NavbarLink[];
};

const NavbarMobile = ({ links }: NavbarTabletProps) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<nav className='relative min-w-[320px] max-w-[640px] mx-auto px-4'>
			<div className='flex flex-row-reverse justify-between items-center h-16'>
				<button
					onClick={() => setIsVisible((v) => !v)}
					aria-label='Ouvrir le menu'
					className='p-2 rounded hover:cursor-pointer transition'>
					{isVisible ? <X size={28} /> : <Menu size={28} />}
				</button>
				<div className='flex-shrink-0'>
					<Image
						alt='Logo Capacity'
						src={'/logo.svg'}
						width={100}
						height={100}
					/>
				</div>
			</div>
			{isVisible && (
				<div className='absolute left-0 right-0 top-12 bg-white z-10 px-4 py-2 flex flex-col items-start gap-4'>
					<NavigationMenu className='w-full'>
						<NavigationMenuList className='w-full flex flex-col gap-2 items-start'>
							{links.map((link) => (
								<NavigationMenuItem className='w-full' key={link.name}>
									<NavigationMenuLink
										href={link.href}
										className='font-medium hover:text-orange-600 transition'>
										{link.name}
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					<Button variant='default'>Faire un don</Button>
					<Button variant='outline'>Se connecter</Button>
				</div>
			)}
		</nav>
	);
};

export default NavbarMobile;