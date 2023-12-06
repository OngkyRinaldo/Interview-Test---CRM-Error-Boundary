import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lms Page',
};

const Lms = () => {
    return (
        <main className='max-w-7xl md:container mx-auto px-5'>
            <div className='mt-20 pt-10 py-5 border-b-2 '>
                <h1 className='text-2xl font-bold'>LMS</h1>
            </div>
        </main>
    );
};

export default Lms;
