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
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserType } from '@/types/user';

type NavbarTabletProps = {
	links: NavbarLink[];
	isAuthenticated: boolean;
	user?: UserType;
};

const NavbarTablet = ({ links, isAuthenticated, user }: NavbarTabletProps) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleCloseMenu = () => setIsVisible(false);

	return (
		<nav className='relative min-w-[640px] max-w-[1024px] mx-auto px-4'>
			<div className='flex flex-row justify-between items-center h-16'>
				{/* Toggle menu button */}
				<button
					onClick={() => setIsVisible((v) => !v)}
					aria-label={isVisible ? 'Fermer le menu' : 'Ouvrir le menu'}
					className='p-2 rounded hover:cursor-pointer transition'>
					{isVisible ? <X size={28} /> : <Menu size={28} />}
				</button>

				{/* Logo */}
				<div className='flex-shrink-0'>
					<Image
						alt='Logo Capacity'
						src='/logo.svg'
						width={100}
						height={100}
					/>
				</div>

				<div className='flex flex-row justify-end items-center gap-4'>
					<Button variant='default'>Faire un don</Button>
					{isAuthenticated && (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div className='w-10 h-10 rounded-full overflow-hidden border cursor-pointer'>
									<Image
										src={user?.avatar || '/default-avatar.png'}
										alt={user?.name || 'User Avatar'}
										width={40}
										height={40}
										className='object-cover'
									/>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end' className='bg-white border-none'>
								<DropdownMenuLabel>
									{user?.name || 'Utilisateur'}
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={handleCloseMenu}>
									Profil
								</DropdownMenuItem>
								<DropdownMenuItem onClick={handleCloseMenu}>
									Paramètres
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={handleCloseMenu}
									className='text-red-600'>
									Se déconnecter
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</div>
			</div>

			{/* Tablet menu */}
			{isVisible && (
				<div className='absolute left-0 right-0 top-16 bg-white z-10 px-4 py-6 flex flex-col items-start gap-4 shadow-md'>
					<NavigationMenu>
						<NavigationMenuList className='flex flex-col gap-2 items-start'>
							{links.map((link) => (
								<NavigationMenuItem
									key={link.name}
									onClick={handleCloseMenu}>
									<NavigationMenuLink
										href={link.href}
										className='font-medium hover:text-orange-600 transition'>
										{link.name}
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>

					{/* Actions si non connecté */}
					{!isAuthenticated && (
						<Button
							variant='outline'
							size={'lg'}>
							Se connecter
						</Button>
					)}
				</div>
			)}
		</nav>
	);
};

export default NavbarTablet;
