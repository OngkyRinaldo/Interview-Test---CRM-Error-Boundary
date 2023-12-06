'use client';

import SearchInput from '@/components/search/searchInput';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiCirclePlus } from 'react-icons/ci';

const HeaderCrm = () => {
    const pathname = usePathname();
    return (
        <main className='max-w-7xl md:container mx-auto '>
            <section className='mt-24 '>
                <div className='py-5 border-b-2 '>
                    <h1 className='text-2xl font-bold px-5'>CRM</h1>
                </div>
                <div className='mt-5 flex justify-start items-center gap-x-2 px-5'>
                    <Link
                        href='/crm'
                        className={`${
                            pathname === '/crm' ||
                            pathname === '/crm/gender' ||
                            pathname === '/crm/marital' ||
                            pathname === '/crm/employment'
                                ? 'bg-blue-100 rounded-md  text-blue-400 '
                                : 'bg-white  text-slate-600 font-semibold '
                        }  py-2 px-4 md:text-sm`}
                    >
                        Clients
                    </Link>
                    <Link
                        href='/crm/policy'
                        className={`${
                            pathname === '/crm/policy'
                                ? 'bg-blue-100 rounded-md  text-blue-400 '
                                : 'bg-white  text-slate-600 font-semibold '
                        }  py-2 px-4 md:text-sm`}
                    >
                        Policy
                    </Link>
                    <Link
                        href='/crm/support'
                        className={`${
                            pathname === '/crm/support'
                                ? 'bg-blue-100 rounded-md  text-blue-400 '
                                : 'bg-white  text-slate-600 font-semibold '
                        }  py-2 px-4 md:text-sm`}
                    >
                        Support
                    </Link>
                </div>
            </section>
            <section className='mt-10 px-5'>
                <div className='flex flex-col  md:flex-row md:justify-start md:items-center md:gap-x-2'>
                    <SearchInput />
                    <div className='mt-5 md:mt-0 flex flex-wrap gap-4 justify-center items-center  px-5 '>
                        <div className='flex-shrink-0'>
                            <Link
                                href='/crm/gender'
                                className='text-sm flex justify-start items-center gap-x-2 bg-slate-200 py-2 px-4 rounded-full'
                            >
                                <CiCirclePlus /> Gender
                            </Link>
                        </div>
                        <div className='flex-shrink-0'>
                            <Link
                                href='/crm/marital'
                                className='text-sm flex justify-start items-center gap-x-2 bg-slate-200 py-2 px-4 rounded-full'
                            >
                                <CiCirclePlus /> Marital Status
                            </Link>
                        </div>
                        <div className='flex-shrink-0'>
                            <Link
                                href='/crm/employment'
                                className='text-sm flex justify-start items-center gap-x-2 bg-slate-200 py-2 px-4 rounded-full'
                            >
                                <CiCirclePlus /> Employment
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HeaderCrm;
