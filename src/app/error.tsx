'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error('Erreur capturée :', error);
	}, [error]);

	return (
		<html>
			<body className='w-full flex flex-col items-center justify-center min-h-screen bg-gray-50'>
				<div className=' w-4/5 text-center'>
					<h2 className='text-xl font-bold text-red-600'>
						Oups ! Une erreur est survenue
					</h2>
					<p className='mt-2 text-gray-500'>{error.message}</p>

					<div className='mt-6 flex justify-center gap-4'>
						<Button className='bg-orange-500 text-white' onClick={() => reset()}>Réessayer</Button>
						<Button
							variant='outline'
                            className='border-orange-500'
							onClick={() => window.history.back()}>
							Retour
						</Button>
					</div>
				</div>
			</body>
		</html>
	);
}
