import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Shopping List',
    description: 'Add to shopping list',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className='max-w-3xl mx-auto p-4'>
            <Navbar/>
            <div className='mt-8'>
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}
