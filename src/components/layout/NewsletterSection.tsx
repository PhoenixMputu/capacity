import Image from 'next/image';

export default function NewsletterSection() {
	return (
		<section className='relative w-full mx-auto h-40'>
			{/* Background image */}
			<Image
				src='./background.svg'
				alt='Newsletter background'
				fill
				className='object-cover w-full h-40'
				priority
			/>
			{/* Overlay */}
			<div className='absolute inset-0 bg-orange-400/40' />

			{/* Content */}
			<div className='max-w-[1222px] relative z-10 flex flex-col items-center justify-center h-full px-6 text-center'>
				<p className='text-black w-full lg:w-3/5 font-semibold text-center text-base lg:text-2xl md:text-xl mb-6'>
					Abonnez-vous à notre newsletter pour recevoir les dernières mises à
					jour et actualités
				</p>

				<form className='flex w-full max-w-md items-center bg-white rounded-md overflow-hidden'>
					<input
						type='email'
						placeholder='Email'
						className='flex-1 px-3 py-2 text-sm outline-none'
					/>
					<button
						type='submit'
						className='bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-4 py-2 transition-colors'>
						S'abonner
					</button>
				</form>
			</div>
		</section>
	);
}
