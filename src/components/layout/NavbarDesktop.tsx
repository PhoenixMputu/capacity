import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';

type NavbarLink = {
	name: string;
	href: string;
};

type NavbarDesktopProps = {
	links: NavbarLink[];
};

function NavbarDesktop({ links }: NavbarDesktopProps) {
	return (
		<nav className='w-full bg-white shadow'>
			<div className='max-w-[1222px] mx-auto flex items-center justify-between h-20 px-6'>
				{/* Logo */}
				<div className='flex-shrink-0'>
					<Image
						src={Logo}
						alt='Logo Capacity'
						width={100}
						height={100}
					/>
				</div>
				{/* Centered Links */}
				<NavigationMenu>
					<NavigationMenuList className='flex gap-8 justify-center items-center'>
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
				{/* Right Buttons */}
				<div className='flex gap-4'>
					<button className='px-4 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50 transition'>
						Login
					</button>
					<button className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition'>
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
}

export default NavbarDesktop;
