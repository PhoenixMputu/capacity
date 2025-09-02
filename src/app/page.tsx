import NavbarDesktop from '@/components/layout/navbar/NavbarDesktop';
import { NavbarMobile } from '@/components/layout/navbar/NavbarMobile';
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
      <NavbarMobile links={links} />
    </div>
  );
}
