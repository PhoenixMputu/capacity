import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { NavbarLink } from '@/types/navbar';
import Image from 'next/image';

type NavbarDesktopProps = {
	links: NavbarLink[];
};

function NavbarDesktop({ links }: NavbarDesktopProps) {
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
				<div className='flex gap-4'>
					<Button variant='default'>Faire un don</Button>
					<Button variant='outline'>Se connecter</Button>
				</div>
			</div>
		</nav>
	);
}

export default NavbarDesktop;
