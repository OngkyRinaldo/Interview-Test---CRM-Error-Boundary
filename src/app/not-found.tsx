import GoBackButton from '@/components/buttons/notFound/goBackButton';
import HomeButton from '@/components/buttons/notFound/homeButton';
import Link from 'next/link';

const NotFound = () => {
    return (
        <main className='max-w-7xl mx-auto min-h-screen flex  items-center md:items-end   '>
            <section className='pb-0 pt-5 px-5 md:pt-0 md:pb-44 '>
                <h1 className='text-base md:text-xl text-blue-500'>
                    404 error
                </h1>
                <h2 className='mt-5 text-5xl md:text-7xl text-black'>
                    We can&apos;t find that page
                </h2>
                <p className='mt-5 text-xl md:text-2xl text-slate-500'>
                    Sorry, the page you are looking for doesn&apos;t exist or
                    has been moved.
                </p>

                <div className='mt-5 flex justify-start items-center gap-x-4'>
                    <GoBackButton />

                    <HomeButton />
                </div>
            </section>
        </main>
    );
};

export default NotFound;
