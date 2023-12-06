import { CiSearch } from 'react-icons/ci';

const SearchInput = () => {
    return (
        <div className='relative'>
            <button className='cursor-pointer'>
                <CiSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-700 text-2xl' />
            </button>

            <input
                type='search'
                placeholder='Search'
                className='py-2 pl-10 pr-8 border border-slate-500 rounded-lg'
            />
        </div>
    );
};

export default SearchInput;
