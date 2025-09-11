'use client';

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { NavbarLink } from '@/types/navbar';
import Image from 'next/image';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { UserType } from '@/types/user';

type NavbarDesktopProps = {
	links: NavbarLink[];
	isAuthenticated: boolean;
	user?: UserType;
};

function NavbarDesktop({ links, isAuthenticated, user }: NavbarDesktopProps) {
	return (
		<nav className='w-full bg-white shadow'>
			<div className='max-w-[1222px] mx-auto flex items-center justify-between h-20 px-6'>
				<div className='flex-shrink-0'>
					<Image
						src={'/logo.svg'}
						alt='Logo Capacity'
						width={100}
						height={100}
					/>
				</div>

				<NavigationMenu>
					<NavigationMenuList className='flex gap-x-1 justify-center items-center'>
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

				<div className='flex gap-4 items-center'>
					<Button variant="default">Faire un don</Button>
					{isAuthenticated ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<button className='flex items-center gap-2 rounded-full focus:outline-none'>
									<Image
										src={user?.avatar || '/default-avatar.png'}
										alt={user?.name || 'User Avatar'}
										width={32}
										height={32}
										className='rounded-full border object-cover aspect-square w-10 h-10'
									/>
								</button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								<DropdownMenuLabel>
									{user?.name || 'Utilisateur'}
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Profil</DropdownMenuItem>
								<DropdownMenuItem>Paramètres</DropdownMenuItem>
								<DropdownMenuItem className='text-red-600'>
									Se déconnecter
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Button variant='outline'>Se connecter</Button>
					)}
				</div>
			</div>
		</nav>
	);
}

export default NavbarDesktop;
