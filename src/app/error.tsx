'use client';
import { CiWarning } from 'react-icons/ci';

const Error = () => {
    const refreshPage = () => {
        window.location.reload();
    };
    return (
        <div className='mt-5 bg-red-100 flex flex-col justify-center items-center h-72 px-5 md:px-0 md:h-96 rounded-lg'>
            <div className='flex flex-col items-center text-red-800'>
                <CiWarning className='text-3xl mb-4 ' />
                <h2 className='text-xl font-semibold mb-2'>
                    Opps! Unable to load clients
                </h2>
                <p className='text-sm text-red-600 mb-4'>
                    Something went wrong that we didn&apos;t anticipate
                </p>

                <button
                    className='border border-slate-300 rounded-lg bg-white py-2 px-4 text-center text-black'
                    onClick={refreshPage}
                >
                    Retry
                </button>
            </div>
        </div>
    );
};

export default Error;
