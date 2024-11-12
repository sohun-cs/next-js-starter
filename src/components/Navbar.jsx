"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathName = usePathname();
    const router = useRouter();

    const links = [

        {
            title: "Home",
            path: "/"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "About Us",
            path: "/about"
        },
        {
            title: "Contact Us",
            path: "/contacts"
        },

    ]

    const handler = () => {
        router.push('/')
    }

    return (
        <nav className=' flex items-center justify-between bg-slate-600 px-12 py-6'>
            <h5>Logo</h5>
            <ul className='flex items-center gap-6'>
                {
                    links?.map(link => <Link className={`${pathName === link.path && 'text-green-500'}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <button onClick={handler} className='bg-white text-green-600 p-4'>Login</button>
        </nav>
    );
};

export default Navbar;