import Link from "next/link";

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Link href={'/'} className='text-white font-bold'>Mille's 🛒</Link>
            <Link href={'/addShoppingList'} className='bg-white p-2'>Add Items</Link>
        </nav>
    )
}