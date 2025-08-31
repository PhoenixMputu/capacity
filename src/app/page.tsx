import NavbarDesktop from '@/components/layout/NavbarDesktop';

export default function Home() {
	return (
		<NavbarDesktop
			links={[
				{ name: 'Home', href: '/' },
				{ name: 'Features', href: '/features' },
				{ name: 'Pricing', href: '/pricing' },
				{ name: 'About', href: '/about' },
				{ name: 'Contact', href: '/contact' },
			]}
		/>
	);
}
