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

type NavbarMobileProps = {
	links: NavbarLink[];
	isAuthenticated: boolean;
	user?: UserType;
};

const NavbarMobile = ({ links, isAuthenticated, user }: NavbarMobileProps) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleCloseMenu = () => setIsVisible(false);

	return (
		<nav className='relative min-w-[320px] max-w-[640px] mx-auto px-4'>
			<div className={isAuthenticated ? 'flex flex-row justify-between items-center h-16' : 'flex flex-row-reverse justify-between items-center h-16'}>
				{/* Toggle button */}
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

				{isAuthenticated && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<div className='w-10 h-10 rounded-full overflow-hidden border-none cursor-pointer'>
								<Image
									src={user?.avatar || '/default-avatar.png'}
									alt={user?.name || 'User Avatar'}
									width={40}
									height={40}
									className='rounded-full border object-cover aspect-square w-10 h-10'
								/>
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='start' className='bg-white border-none'>
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

			{/* Mobile menu */}
			{isVisible && (
				<div className='absolute left-0 right-0 top-16 bg-white z-10 px-4 py-4 flex flex-col items-start gap-4 shadow-md'>
					<NavigationMenu className='w-full'>
						<NavigationMenuList className='w-full flex flex-col gap-2 items-start'>
							{links.map((link) => (
								<NavigationMenuItem
									key={link.name}
									className='w-full'
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

					<div className='flex flex-col gap-2 w-full'>
						<Button
							variant='default'
							className='w-full'>
							Faire un don
						</Button>
						<Button
							variant='outline'
							className='w-full'>
							Se connecter
						</Button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default NavbarMobile;
