'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/logo.svg';
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

export const NavbarTablet = ({ links }: NavbarTabletProps) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<nav className='relative min-w-[640px] max-w-[1024px] mx-auto px-4 py-2'>
			<div className='flex flex-row justify-between items-center h-16'>
				<button
					onClick={() => setIsVisible((v) => !v)}
					aria-label='Ouvrir le menu'
					className='p-2 rounded hover:cursor-pointer transition'>
					{isVisible ? <X size={28} /> : <Menu size={28} />}
				</button>
				<div className='flex-shrink-0'>
					<Image
						alt='Logo Capacity'
						src={Logo}
						width={100}
						height={100}
					/>
				</div>
				<Button
					variant='default'
					className='px-4 py-2 text-sm rounded-md'>
					Faire un don
				</Button>
			</div>
			{isVisible && (
				<div className='absolute left-0 right-0 top-20 bg-white z-10 px-4 py-6 flex flex-col items-start gap-4'>
					<NavigationMenu>
						<NavigationMenuList className='flex flex-col gap-2 items-start'>
							{links.map((link) => (
								<NavigationMenuItem key={link.name}>
									<NavigationMenuLink
										href={link.href}
										className='font-medium hover:text-orange-600 transition'>
										{link.name}
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					<Button variant='outline'>Se connecter</Button>
				</div>
			)}
		</nav>
	);
};
