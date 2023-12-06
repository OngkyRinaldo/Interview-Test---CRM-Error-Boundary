import Link from 'next/link';

const HomeButton = () => {
    return (
        <Link
            href='/'
            className='py-2 px-4 md:py-4 md:px-8 bg-blue-600 text-white rounded-md'
        >
            Take me home
        </Link>
    );
};

export default HomeButton;
