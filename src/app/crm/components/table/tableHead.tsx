import { FaArrowUp } from 'react-icons/fa6';

const TableHead = () => {
    return (
        <thead className='w-full'>
            <tr className='bg-gray-50 border-b-2 border-gray-200'>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>
                    <input type='checkbox' />
                </th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>
                    name
                </th>
                <th className='w-24 p-3 text-sm font-semibold tracking-wide flex justify-start items-center gap-x-2'>
                    <span>Gender</span>
                    <button className='cursor-pointer hover:text-blue-400'>
                        <FaArrowUp />
                    </button>
                </th>
                <th className='w-24 p-3 text-sm font-semibold tracking-wide text-left'>
                    DOB
                </th>
                <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>
                    Marital Status
                </th>
                <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>
                    Employment
                </th>
            </tr>
        </thead>
    );
};

export default TableHead;
