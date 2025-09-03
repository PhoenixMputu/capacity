import React from 'react';
import { SponsorshipProps } from '@/types/sponsorship';
import Image from 'next/image';

const Sponsorship: React.FC<SponsorshipProps> = ({ title, sponsors }) => (
	<div className='w-full px-4'>
		<h2 className='text-xl md:text-2xl font-semibold mb-4 text-center'>
			{title}
		</h2>
		<div className='flex flex-wrap gap-6 items-center justify-center'>
			{sponsors.map((sponsor) => (
				<Image
					key={sponsor.name}
					src={sponsor.logoUrl}
					alt={sponsor.alt || sponsor.name}
					width={120}
					height={50}
					className='h-[40px] md:h-[50px] max-w-[120px] object-contain'
				/>
			))}
		</div>
	</div>
);

export default Sponsorship;
