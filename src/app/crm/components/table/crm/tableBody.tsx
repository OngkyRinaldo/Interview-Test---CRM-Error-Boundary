import Image from 'next/image';
import { RiAccountCircleLine } from 'react-icons/ri';

type TableBodyProps = {
    user: User;
};

const TableBody = ({ user }: TableBodyProps) => {
    return (
        <tr className='bg-white border-b-2' key={user.id}>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <input type='checkbox' />
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <div className='flex justify-start items-center gap-x-2'>
                    <div>
                        {user.image ? (
                            <Image
                                src={user.image}
                                alt={user.name}
                                height={50}
                                width={50}
                            />
                        ) : (
                            <RiAccountCircleLine size={50} />
                        )}
                    </div>
                    <p>{user.name} </p>
                </div>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <p>{user.gender} </p>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <p>
                    {user.dob ? new Date(user.dob).toLocaleDateString() : '-'}
                </p>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <p>{user.maritalStatus} </p>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <p>{user.employmentStatus} </p>
            </td>
        </tr>
    );
};

export default TableBody;
