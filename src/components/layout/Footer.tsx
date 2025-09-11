import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white w-full px-4 py-2 m-auto">
        <div className='max-w-[1222px] w-full m-auto flex flex-row flex-wrap justify-between items-center gap-4'>
            <h3 className='text-base'>Tous droits réservés.</h3>
            <div className='w-fit flex flex-row flex-wrap justify-end items-center gap-x-4'>
                <Link href="/mentions-legales" className="text-base">Accessibilité</Link>
                <Link href="/politique-de-confidentialite" className="text-base">Confidentialité</Link>
                <Link href="/politique-de-confidentialite" className="text-base">Contact</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer