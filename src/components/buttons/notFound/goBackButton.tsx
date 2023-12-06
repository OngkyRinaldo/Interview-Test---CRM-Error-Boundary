'use client';

import { useRouter } from 'next/navigation';

import { FaLongArrowAltLeft } from 'react-icons/fa';

const GoBackButton = () => {
    const router = useRouter();
    const goBack = () => {
        router.back();
    };
    return (
        <button
            onClick={goBack}
            className='py-2 px-4 md:py-4 md:px-8  border border-slate-500 rounded-md flex justify-center items-center gap-x-2'
        >
            <FaLongArrowAltLeft /> <span> Go back</span>
        </button>
    );
};

export default GoBackButton;
