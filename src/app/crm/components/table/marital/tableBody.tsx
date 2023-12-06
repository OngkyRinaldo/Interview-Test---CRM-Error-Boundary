import Image from 'next/image';
import { RiAccountCircleLine } from 'react-icons/ri';

type TableBodyProps = {
    user: User;
};

const TableBody = ({ user }: TableBodyProps) => {
    return (
        <tr className='bg-white border-b-2'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <input type='checkbox' />
            </td>
            <td className='w-1/2 p-3 text-sm text-gray-700 whitespace-nowrap '>
                <p>{user.name} </p>
            </td>
            <td className='w-1/2  p-3 text-sm text-gray-700 whitespace-nowrap '>
                <p>{user.maritalStatus} </p>
            </td>
        </tr>
    );
};

export default TableBody;
