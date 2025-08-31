import NavbarDesktop from '@/components/layout/NavbarDesktop';
import { NavbarTablet } from '@/components/layout/NavbarTablet';
import { NavbarLink } from '@/types/navbar';

export default function Home() {
  const links: NavbarLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div>
      <NavbarTablet links={links} />
    </div>
  );
}
