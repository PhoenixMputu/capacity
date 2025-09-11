'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
	NavbarDesktop,
	NavbarMobile,
	NavbarTablet,
} from '@/components/layout/navbar';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { NavbarLink } from '@/types/navbar';
import { ArrowRight } from 'lucide-react';
import HeroIllustration from '@/assets/hero.jpeg';
import Sponsorship from '@/components/layout/sponsorship/Sponsorship';
import { SponsorshipProps } from '@/types/sponsorship';
import ProfileCard from '@/components/custom/card/ProfileCard';
import { ProfileCardProps, TestimonialCardProps } from '@/types/card';
import TestimonialCard from '@/components/custom/card/TestimonialCard';
import NewsletterSection from '@/components/layout/NewsletterSection';
import Footer from '@/components/layout/Footer';
import { UserType } from '@/types/user';

const profiles: ProfileCardProps[] = [
	{
		image: '/victory.jpeg',
		name: 'Victory Deo',
		role: 'Software Engineer',
		handicap: 'Handicape Moteur',
	},
	{
		image: '/victory.jpeg',
		name: 'Victory Deo',
		role: 'Software Engineer',
		handicap: 'Handicape Moteur',
	},
	{
		image: '/victory.jpeg',
		name: 'Victory Deo',
		role: 'Software Engineer',
		handicap: 'Handicape Moteur',
	},
];

const testimonials: TestimonialCardProps[] = [
	{
		image: '/victory.jpeg',
		name: 'Victory Deo',
		role: 'Software Engineer',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		image: '/victory.jpeg',
		name: 'Victory Deo',
		role: 'Software Engineer',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		image: '/victory.jpeg',
		name: 'Victory Deo',
		role: 'Software Engineer',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
];

const sponsors: SponsorshipProps = {
	title: 'Il nous soutiennent',
	sponsors: [
		{ name: 'Google', logoUrl: '/Google.svg', alt: 'Logo Google' },
		{ name: 'Facebook', logoUrl: '/Facebook.svg', alt: 'Logo Facebook' },
		{ name: 'Webflow', logoUrl: '/Webflow.svg', alt: 'Logo Webflow' },
		{ name: 'Pinterest', logoUrl: '/Pinterest.svg', alt: 'Logo Pinterest' },
		{ name: 'Twitch', logoUrl: '/Twitch.svg', alt: 'Logo Twitch' },
		{ name: 'Youtube', logoUrl: '/YouTube.svg', alt: 'Logo Youtube' },
	],
};

const links: NavbarLink[] = [
	{ name: 'Accueil', href: '/' },
	{ name: 'Features', href: '/features' },
	{ name: 'Pricing', href: '/pricing' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' },
];

const user: UserType = {
	id: '1',
	name: 'Victor Deo',
	email: 'victor@capacity.dev',
	avatar: '/victory.jpeg',
};

export default function Home() {
	const isMobile = useMediaQuery('(max-width: 639px)');
	const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1024px)');

	return (
		<>
			<header className='w-full'>
				{isMobile ? (
					<NavbarMobile links={links} />
				) : isTablet ? (
					<NavbarTablet links={links} />
				) : (
					<NavbarDesktop links={links} isAuthenticated={true} user={user} />
				)}
			</header>
			<main>
				<section className='w-full bg-orange-50 flex flex-col items-center min-h-[650px]'>
					<div className='max-w-[1222px] w-full mx-auto px-4 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
						<div className='w-full lg:w-1/2 flex flex-col gap-y-6'>
							<h1 className='font-extrabold text-3xl md:text-5xl leading-tight'>
								Talents en lumière, opportunités ouvertes à toutes et tous
							</h1>
							<p className='text-base text-gray-700'>
								Capacity connecte les personnes en situation de handicap avec
								des entreprises, bénévoles et particuliers — pour révéler les
								talents uniques et créer un impact positif.
							</p>
							<div className='flex flex-row flex-wrap gap-4 mt-4'>
								<Button
									variant='default'
									size='lg'
									className='mr-4'>
									Explorer les talents{' '}
									<ArrowRight
										size={24}
										color='white'
									/>
								</Button>
								<Button
									variant='outline'
									size='lg'>
									Se connecter
								</Button>
							</div>
						</div>
						<div className='w-full lg:w-5/12 flex justify-center items-center mb-6 lg:mb-0'>
							<Image
								src={HeroIllustration}
								alt='Illustration Hero'
								className='rounded-xl object-cover w-full h-95 shadow-md'
								priority
							/>
						</div>
					</div>
					<div className='w-full flex flex-col mb-3 justify-center items-center px-4'>
						<Sponsorship
							title={sponsors.title}
							sponsors={sponsors.sponsors}
						/>
					</div>
				</section>

				<section className='w-full bg-white flex flex-col items-center'>
					<div className='max-w-[1222px] w-full flex flex-col items-start justify-start mx-auto text-start px-4 py-8'>
						<div className='w-full flex flex-col gap-3'>
							<h2 className='font-bold text-2xl'>Freelances</h2>
							<p className='text-base'>
								Découvrez les profils experts et talentueux des nos freelances
							</p>
						</div>
						<div className='w-full pt-8 flex flex-wrap flex-row gap-y-6 gap-x-6 lg:justify-between lg:gap-x-0 justify-center items-center'>
							{profiles.map((profile) => (
								<ProfileCard {...profile} />
							))}
						</div>
						<div className='w-full text-center mt-4'>
							<Button variant={'link'}>Voir plus</Button>
						</div>
					</div>
				</section>

				<section className='w-full bg-orange-100 flex flex-col items-center'>
					<div className='max-w-[1222px] w-full flex flex-col items-start justify-end mx-auto text-start px-4 py-8'>
						<div className='w-full flex flex-col gap-3'>
							<h2 className='font-bold text-2xl'>Produits</h2>
							<p className='text-base'>
								Découvrez les produits et réalisations de nos experts
							</p>
						</div>
						<div className='w-full pt-8 flex flex-wrap flex-row gap-y-6 gap-x-6 lg:justify-between lg:gap-x-0 justify-center items-center'>
							{profiles.map((profile) => (
								<ProfileCard {...profile} />
							))}
						</div>
						<div className='w-full text-center mt-4'>
							<Button variant={'link'}>Voir plus</Button>
						</div>
					</div>
				</section>

				<section className='w-full py-8 bg-white'>
					<div className='max-w-[1222px] w-full m-auto px-4 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
						<div className='w-full lg:w-5/12 flex justify-center items-center lg:mb-0'>
							<Image
								src={HeroIllustration}
								alt='Illustration Hero'
								className='rounded-xl object-cover w-full h-95 shadow-md'
								priority
							/>
						</div>
						<div className='w-full lg:w-1/2 flex flex-col gap-y-6'>
							<h2 className='font-extrabold text-3xl md:text-5xl leading-tight'>
								Qu’est-ce que Capacity ?
							</h2>
							<p className='text-base text-gray-700'>
								Capacity est une organisation qui révèle et connecte les talents
								uniques de personnes en situation de handicap. Notre mission :
								créer des opportunités équitables, favoriser l’autonomie et
								changer le regard sur le handicap.
							</p>
							<div className='flex flex-wrap flex-row gap-4 mt-4'>
								<Button
									variant='default'
									size='lg'
									className='mr-4'>
									Faire un don
								</Button>
								<Button
									variant='outline'
									size='lg'>
									Nous rejoindre
								</Button>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full bg-orange-100'>
					<div className='max-w-[1222px] w-full m-auto text-center px-4 py-8'>
						<h2 className='font-bold text-2xl mb-8'>
							Ce qu’ils disent de nous
						</h2>
						<div className='w-full flex flex-row flex-wrap lg:justify-between justify-center items-center gap-4'>
							{testimonials.map((testimonial) => (
								<TestimonialCard {...testimonial} />
							))}
						</div>
					</div>
				</section>

				<section className='w-full bg-white flex flex-col items-center'>
					<div className='max-w-[1222px] w-full flex flex-col items-start justify-start mx-auto text-start px-4 py-8'>
						<div className='w-full flex flex-col gap-3'>
							<h2 className='font-bold text-2xl'>Articles</h2>
							<p className='text-base'>
								Découvrez nos articles, conseils et ressources sur le handicap
								et l’inclusion
							</p>
						</div>
						<div className='w-full pt-8 flex flex-wrap flex-row gap-y-6 gap-x-6 lg:justify-between lg:gap-x-0 justify-center items-center'>
							{profiles.map((profile) => (
								<ProfileCard {...profile} />
							))}
						</div>
						<div className='w-full text-center mt-4'>
							<Button variant={'link'}>Voir plus</Button>
						</div>
					</div>
				</section>

				<section className='w-full m-auto'>
					<NewsletterSection />
				</section>
			</main>
			<Footer />
		</>
	);
}
