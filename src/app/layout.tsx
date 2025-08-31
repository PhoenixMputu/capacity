import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import LoadingPage from '@/components/pages/LoadingPage';

const interSans = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Capacity - Mettre en avant les talents handicapés',
	description:
		'Capacity est une plateforme inclusive qui valorise les talents des personnes en situation de handicap. Engagez des freelances, découvrez leurs créations, soutenez-les par des dons et inspirez-vous de leurs histoires.',
	keywords: [
		'handicap',
		'talent',
		'freelance',
		'inclusion',
		'emploi handicapés',
		'plateforme solidaire',
		'travail handicap',
		'dons solidaires',
		'artisanat handicapés',
		'success stories handicap',
	],
	authors: [{ name: 'Victory Deo' }],
	creator: 'Victory Deo',
	publisher: 'Victory Deo',
	metadataBase: new URL('https://capacity.com'),
	openGraph: {
		title: 'Capacity - Mettre en avant les talents handicapés',
		description:
			'Une plateforme pour promouvoir les talents et le travail des personnes en situation de handicap : freelance, boutique solidaire, dons et blog inspirant.',
		url: 'https://capacity.com',
		siteName: 'Capacity',
		images: [
			{
				url: './assets/icon.svg',
				width: 1200,
				height: 630,
				alt: 'Capacity - Inclusion et Talents Handicapés',
			},
		],
		locale: 'fr_FR',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Capacity - Mettre en avant les talents handicapés',
		description:
			'Découvrez et soutenez les talents en situation de handicap grâce à Capacity.',
		images: ['src/assets/icon.svg'], // idem à remplacer
		creator: '@capacity_app', // ton futur handle Twitter/X si tu en as un
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fr'>
			<body className={`${interSans.variable}`}>
				<Suspense fallback={<LoadingPage />}>{children}</Suspense>
			</body>
		</html>
	);
}
