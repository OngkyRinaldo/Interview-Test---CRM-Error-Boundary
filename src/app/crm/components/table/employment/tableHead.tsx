import { FaArrowUp, FaArrowDown } from 'react-icons/fa6';

type TableHeadProps = {
    handleSortDirectionToggle: () => void;
    sortDirection: 'ASC' | 'DESC';
};

const TableHead = ({
    handleSortDirectionToggle,
    sortDirection,
}: TableHeadProps) => {
    return (
        <thead className='w-full'>
            <tr className='bg-gray-50 border-b-2 border-gray-200'>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>
                    <input type='checkbox' />
                </th>
                <th className='w-2/4 p-3 text-sm font-semibold tracking-wide text-left'>
                    name
                </th>
                <th className=' p-3 text-sm font-semibold tracking-wide flex justify-start items-center gap-x-2'>
                    <span>Employment</span>
                    <button
                        className='cursor-pointer hover:text-blue-400'
                        onClick={handleSortDirectionToggle}
                    >
                        {sortDirection === 'ASC' ? (
                            <FaArrowDown />
                        ) : (
                            <FaArrowUp />
                        )}
                    </button>
                </th>
            </tr>
        </thead>
    );
};

export default TableHead;
