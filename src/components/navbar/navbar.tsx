'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiStarFourFill } from 'react-icons/pi';
import { CiSearch, CiSettings, CiBellOn } from 'react-icons/ci';
import { RiAccountCircleLine } from 'react-icons/ri';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
import Image from 'next/image';
import user from '../../../public/user.png';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <nav className='bg-white p-4 fixed top-0 w-full z-50'>
            <div className='max-w-7xl md:container mx-auto flex justify-between items-center md:border-b-2 md:pb-8'>
                <div className='flex justify-start items-center gap-x-3 '>
                    <Link
                        href='/'
                        className='flex justify-between items-center gap-x-2 font-bold text-2xl md:text-sm'
                    >
                        <PiStarFourFill /> <span> Acme Corp</span>
                    </Link>
                    <div className='hidden md:flex md:justify-center md:items-center md:gap-x-1 '>
                        <Link
                            href='/dashboard'
                            className={`${
                                pathname === '/dashboard'
                                    ? 'bg-blue-200 rounded-sm  '
                                    : 'bg-white'
                            } text-slate-600 font-semibold py-2 px-4 md:text-sm`}
                        >
                            Dashboard
                        </Link>
                        <Link
                            href='/crm'
                            className={`${
                                pathname === '/crm'
                                    ? 'bg-blue-200 rounded-sm  '
                                    : 'bg-white'
                            } text-slate-600 font-semibold py-2 px-4 md:text-sm`}
                        >
                            CRM
                        </Link>
                        <Link
                            href='/submission'
                            className={`${
                                pathname === '/submission'
                                    ? 'bg-blue-200 rounded-sm  '
                                    : 'bg-white'
                            } text-slate-600 font-semibold py-2 px-4 md:text-sm`}
                        >
                            Submission
                        </Link>
                        <Link
                            href='/commission'
                            className={`${
                                pathname === '/commission'
                                    ? 'bg-blue-200 rounded-sm  '
                                    : 'bg-white'
                            } text-slate-600 font-semibold py-2 px-4 md:text-sm`}
                        >
                            Commission
                        </Link>
                        <Link
                            href='/lms'
                            className={`${
                                pathname === '/lms'
                                    ? 'bg-blue-200 rounded-sm  '
                                    : 'bg-white'
                            } text-slate-600 font-semibold py-2 px-4 md:text-sm`}
                        >
                            LMS
                        </Link>
                    </div>
                </div>
                <div className='hidden md:flex md:justify-start md:items-center md:gap-x-3 text-2xl '>
                    <Link href='!#'>
                        <CiSearch />
                    </Link>
                    <Link href='!#'>
                        <CiSettings />
                    </Link>
                    <Link href='!#'>
                        <CiBellOn />
                    </Link>
                    <div>
                        <Image
                            src={user}
                            alt='user.png'
                            width={25}
                            height={25}
                            className='rounded-full object-cover'
                        />
                    </div>
                </div>
                <div className='md:hidden'>
                    <button
                        className='text-lg'
                        onClick={toggleMenu}
                        aria-label='open Menu'
                    >
                        <HiMenuAlt3 />
                    </button>

                    {isMenuOpen && (
                        <div className='fixed inset-0 bg-slate-600  z-50'>
                            <div className='flex flex-col pt-10 px-5 h-full'>
                                <button
                                    className=' absolute top-4 right-4 text-lg'
                                    onClick={closeMenu}
                                    data-testid='mobile-menu'
                                >
                                    <IoCloseSharp />
                                </button>
                                <ul className='text-start text-2xl'>
                                    <li className='text-white'>
                                        <Link
                                            href='/dashboard'
                                            onClick={closeMenu}
                                            className='py-3 block hover:text-gray-300'
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li className='text-white'>
                                        <Link
                                            href='/crm'
                                            onClick={closeMenu}
                                            className='py-3 block hover:text-gray-300'
                                        >
                                            Crm
                                        </Link>
                                    </li>
                                    <li className='text-white'>
                                        <Link
                                            href='/submission'
                                            onClick={closeMenu}
                                            className='py-3 block hover:text-gray-300'
                                        >
                                            Submission
                                        </Link>
                                    </li>
                                    <li className='text-white'>
                                        <Link
                                            href='/commission'
                                            onClick={closeMenu}
                                            className='py-3 block hover:text-gray-300'
                                        >
                                            commission
                                        </Link>
                                    </li>
                                    <li className='text-white'>
                                        <Link
                                            href='/lms'
                                            onClick={closeMenu}
                                            className='py-3 block hover:text-gray-300'
                                        >
                                            LMS
                                        </Link>
                                    </li>
                                    <li className='py-3  text-2xl flex justify-start items-center gap-2 text-white '>
                                        <button className='hover:text-gray-300'>
                                            <CiSearch />
                                        </button>
                                        <button className='hover:text-gray-300'>
                                            <CiSettings />
                                        </button>
                                        <button className='hover:text-gray-300'>
                                            <CiBellOn />
                                        </button>
                                    </li>
                                    <li className='py-3  text-start text-white text-7xl'>
                                        <Image
                                            src={user}
                                            alt='user.png'
                                            width={35}
                                            height={35}
                                            className='rounded-full object-cover'
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
