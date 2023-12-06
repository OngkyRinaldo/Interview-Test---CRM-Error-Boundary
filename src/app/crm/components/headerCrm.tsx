import SearchInput from '@/components/search/searchInput';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiCirclePlus } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';

const HeaderCrm = () => {
    return (
        <main className='max-w-7xl md:container mx-auto '>
            <section className='mt-24 '>
                <div className='py-5 border-b-2 '>
                    <h1 className='text-2xl font-bold px-5'>CRM</h1>
                </div>
                <div className='mt-5 flex justify-start items-center gap-x-2 px-5'>
                    <Link
                        href='/crm'
                        className='bg-white  text-slate-600 font-semibold py-2 px-4 md:text-sm'
                    >
                        Clients
                    </Link>
                    <Link
                        href='/crm/policy'
                        className='bg-white  text-slate-600 font-semibold py-2 px-4 md:text-sm'
                    >
                        Policy
                    </Link>
                    <Link
                        href='/crm/support'
                        className='bg-white  text-slate-600 font-semibold py-2 px-4 md:text-sm'
                    >
                        Support
                    </Link>
                </div>
            </section>

            <section className='mt-10 px-5'>
                <div className=' flex flex-col md:flex-row md:justify-start md:items-center md:gap-x-2'>
                    <SearchInput />
                    <div className='mt-5 md:mt-0 flex justify-center items-center gap-x-2'>
                        <div>
                            <Link
                                href='/crm/gender'
                                className='flex justify-start items-center gap-x-2 bg-slate-200 py-1 px-4 rounded-full'
                            >
                                <CiCirclePlus /> Gender
                            </Link>
                        </div>
                        <div>
                            <Link
                                href='/crm/marital'
                                className='flex justify-start items-center gap-x-2 bg-slate-200 py-1 px-4 rounded-full'
                            >
                                <CiCirclePlus /> Marital Status
                            </Link>
                        </div>
                        <div>
                            <Link
                                href='/crm/marital'
                                className='flex justify-start items-center gap-x-2 bg-slate-200 py-1 px-4 rounded-full'
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
