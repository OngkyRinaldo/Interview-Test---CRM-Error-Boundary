import { useRouter } from 'next/navigation';
import { useRef, FormEvent, KeyboardEvent } from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchInput = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleButtonClick = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        performSearch();
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    };

    const performSearch = () => {
        const keyword = searchRef.current?.value;

        if (keyword) {
            router.push(`/crm/search/${keyword}`);
        } else {
            router.push('/crm');
        }
    };

    return (
        <div className='relative'>
            <button onClick={handleButtonClick} className='cursor-pointer'>
                <CiSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-700 text-2xl' />
            </button>

            <input
                type='search'
                placeholder='Search'
                className='py-2 pl-10 pr-8 border border-slate-500 rounded-lg'
                ref={searchRef}
                onKeyPress={handleKeyPress} // Added event listener for key press
            />
        </div>
    );
};

export default SearchInput;
