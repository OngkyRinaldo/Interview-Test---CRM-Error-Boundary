'use client';

import { useEffect, useState } from 'react';
import getAllUsers from '@/lib/getAllUsers';
import {
    FaArrowLeft,
    FaArrowRight,
    FaArrowUp,
    FaArrowDown,
} from 'react-icons/fa6';
import Image from 'next/image';
import { RiAccountCircleLine } from 'react-icons/ri';
import Error from '@/app/error';
import { CiSearch, CiCirclePlus } from 'react-icons/ci';
import Link from 'next/link';
import UserDetails from '../../userDetails/userDetails';

const Table = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'ASC' | 'DESC'>('ASC');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const fetchUsers = async () => {
        try {
            const data = await getAllUsers();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching users');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSortDirectionToggle = () => {
        setSortDirection((prevDirection) =>
            prevDirection === 'ASC' ? 'DESC' : 'ASC'
        );

        setUsers((prevUsers) =>
            [...prevUsers].sort((a, b) => {
                if (sortDirection === 'ASC') {
                    return a.gender.localeCompare(b.gender);
                } else {
                    return b.gender.localeCompare(a.gender);
                }
            })
        );
    };

    const handleCheckboxChange = (userId: number) => {
        setSelectedUsers((prevSelectedUsers) => {
            if (prevSelectedUsers.includes(userId)) {
                const updatedSelectedUsers = prevSelectedUsers.filter(
                    (id) => id !== userId
                );
                setIsCheckboxChecked(updatedSelectedUsers.length > 0);
                return updatedSelectedUsers;
            } else {
                setIsCheckboxChecked(true);
                return [...prevSelectedUsers, userId];
            }
        });
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const selectedUsersData = users.filter((user) =>
        selectedUsers.includes(user.id)
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

    const previousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const displayUsers =
        selectedUsers.length > 0 ? selectedUsersData : currentItems;

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(users.length / itemsPerPage);

    return (
        <main className='max-w-7xl md:container mx-auto px-5'>
            {loading ? (
                <p className='mt-36 text-center font-bold text-2xl'>
                    Loading...
                </p>
            ) : error ? (
                <Error />
            ) : (
                <section className='mt-10'>
                    {isCheckboxChecked ? (
                        <div className='flex flex-col'>
                            {selectedUsersData.map((user) => (
                                <UserDetails key={user.id} user={user} />
                            ))}
                        </div>
                    ) : (
                        <>
                            <section className=' px-5'>
                                <div className='flex flex-col  md:flex-row md:justify-start md:items-center md:gap-x-2'>
                                    <div className='relative '>
                                        <CiSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-700 text-2xl' />
                                        <input
                                            type='search'
                                            placeholder='Search by name'
                                            className='py-2 pl-10 pr-8 border border-slate-500 rounded-lg'
                                            value={searchTerm}
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className='mt-5 md:mt-0 flex flex-wrap gap-4 justify-center items-center  px-5 '>
                                        <div className='flex-shrink-0'>
                                            <Link
                                                href='/crm/gender'
                                                className='text-sm flex justify-start items-center gap-x-2 bg-slate-200 py-2 px-4 rounded-full'
                                            >
                                                <CiCirclePlus /> Gender
                                            </Link>
                                        </div>
                                        <div className='flex-shrink-0'>
                                            <Link
                                                href='/crm/marital'
                                                className='text-sm flex justify-start items-center gap-x-2 bg-slate-200 py-2 px-4 rounded-full'
                                            >
                                                <CiCirclePlus /> Marital Status
                                            </Link>
                                        </div>
                                        <div className='flex-shrink-0'>
                                            <Link
                                                href='/crm/employment'
                                                className='text-sm flex justify-start items-center gap-x-2 bg-slate-200 py-2 px-4 rounded-full'
                                            >
                                                <CiCirclePlus /> Employment
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='mt-5'>
                                <div className='mt-5 overflow-auto border border-slate-300 shadow rounded-lg hidden md:block'>
                                    <table className='w-full  '>
                                        <thead className='w-full'>
                                            <tr className='bg-gray-50 border-b-2 border-gray-200'>
                                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>
                                                    <input type='checkbox' />
                                                </th>
                                                <th className='w-2/4 p-3 text-sm font-semibold tracking-wide text-left'>
                                                    name
                                                </th>
                                                <th className=' p-3 text-sm font-semibold tracking-wide flex justify-start items-center gap-x-2'>
                                                    <span>Gender</span>
                                                    <button
                                                        className='cursor-pointer hover:text-blue-400'
                                                        onClick={
                                                            handleSortDirectionToggle
                                                        }
                                                    >
                                                        {sortDirection ===
                                                        'ASC' ? (
                                                            <FaArrowDown />
                                                        ) : (
                                                            <FaArrowUp />
                                                        )}
                                                    </button>
                                                </th>
                                                <th className=' p-3 text-sm font-semibold tracking-wide text-left'>
                                                    DOB
                                                </th>
                                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>
                                                    Marital Status
                                                </th>
                                                <th className=' p-3 text-sm font-semibold tracking-wide text-left'>
                                                    Employment
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='h-56'>
                                            {displayUsers.map((user) => (
                                                <tr
                                                    className='bg-white border-b-2'
                                                    key={user.id}
                                                >
                                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                                        <input
                                                            type='checkbox'
                                                            onChange={() =>
                                                                handleCheckboxChange(
                                                                    user.id
                                                                )
                                                            }
                                                            checked={selectedUsers.includes(
                                                                user.id
                                                            )}
                                                        />
                                                    </td>
                                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                                        <div className='flex justify-start items-center gap-x-2'>
                                                            <div>
                                                                {user.image ? (
                                                                    <Image
                                                                        src={
                                                                            user.image
                                                                        }
                                                                        alt={
                                                                            user.name
                                                                        }
                                                                        height={
                                                                            50
                                                                        }
                                                                        width={
                                                                            50
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <RiAccountCircleLine
                                                                        size={
                                                                            50
                                                                        }
                                                                    />
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
                                                            {user.dob
                                                                ? new Date(
                                                                      user.dob
                                                                  ).toLocaleDateString()
                                                                : '-'}
                                                        </p>
                                                    </td>
                                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                                        <p>
                                                            {user.maritalStatus}
                                                        </p>
                                                    </td>
                                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                                        <p>
                                                            {
                                                                user.employmentStatus
                                                            }
                                                        </p>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot className='w-full'>
                                            <tr>
                                                <td
                                                    colSpan={5}
                                                    className='px-6 py-4'
                                                >
                                                    <div className='flex justify-between items-center'>
                                                        <button
                                                            className='border border-slate-400 rounded-lg px-6 py-2 flex justify-center items-center gap-x-2'
                                                            onClick={() =>
                                                                setCurrentPage(
                                                                    currentPage -
                                                                        1
                                                                )
                                                            }
                                                            disabled={
                                                                currentPage ===
                                                                1
                                                            }
                                                        >
                                                            <FaArrowLeft />{' '}
                                                            Previous
                                                        </button>
                                                        <ul className='flex justify-center space-x-2'>
                                                            {Array.from({
                                                                length: totalPages,
                                                            }).map(
                                                                (_, index) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <button
                                                                            className={`${
                                                                                currentPage ===
                                                                                index +
                                                                                    1
                                                                                    ? 'bg-slate-300 '
                                                                                    : 'bg-white '
                                                                            } rounded-lg px-4 py-2 text-black`}
                                                                            onClick={() =>
                                                                                paginate(
                                                                                    index +
                                                                                        1
                                                                                )
                                                                            }
                                                                        >
                                                                            {index +
                                                                                1}
                                                                        </button>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                        <button
                                                            className='border border-slate-400 rounded-lg px-6 py-2 flex justify-center items-center gap-x-2'
                                                            onClick={() =>
                                                                setCurrentPage(
                                                                    currentPage +
                                                                        1
                                                                )
                                                            }
                                                            disabled={
                                                                currentPage ===
                                                                totalPages
                                                            }
                                                        >
                                                            <FaArrowRight />{' '}
                                                            Next
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <div className='grid grid-cols-1 gap-2 md:hidden'>
                                    {displayUsers.map((user) => (
                                        <div
                                            key={user.id}
                                            className='bg-slate-300 shadow mb-3 p-5 rounded-md'
                                        >
                                            <div className='flex justify-start items-center gap-x-2 border-b-2'>
                                                <input
                                                    type='checkbox'
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            user.id
                                                        )
                                                    }
                                                    checked={selectedUsers.includes(
                                                        user.id
                                                    )}
                                                />
                                                <h2 className='font-bold'>
                                                    {user.name}
                                                </h2>
                                            </div>
                                            <div className='flex justify-start items-center gap-x-4 py-3 '>
                                                {user.image ? (
                                                    <Image
                                                        src={user.image}
                                                        alt={user.name}
                                                        height={50}
                                                        width={50}
                                                    />
                                                ) : (
                                                    <RiAccountCircleLine
                                                        size={50}
                                                    />
                                                )}
                                                <div className=''>
                                                    <h3 className='font-semibold'>
                                                        Name:{user.name}
                                                    </h3>
                                                    <h3 className='font-semibold'>
                                                        Gender:{user.gender}
                                                    </h3>
                                                    <h3 className='font-semibold'>
                                                        Dob:
                                                        {user.dob
                                                            ? new Date(
                                                                  user.dob
                                                              ).toLocaleDateString()
                                                            : '-'}
                                                    </h3>
                                                    <h3 className='font-semibold'>
                                                        Marital Status :
                                                        {user.maritalStatus}
                                                    </h3>
                                                    <h3 className='font-semibold'>
                                                        Employment Status:
                                                        {user.employmentStatus}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className='bg-slate-300 shadow mb-3 p-5 rounded-md flex flex-col sm:flex-row justify-between items-center gap-y-3 py-5 max-w-full '>
                                        <div>
                                            <button
                                                className='border bg-white border-slate-400 rounded-lg px-6 py-2 flex justify-center items-center gap-x-2 w-36'
                                                onClick={previousPage}
                                                disabled={currentPage === 1}
                                            >
                                                <FaArrowLeft /> Previous
                                            </button>
                                        </div>
                                        <div className='flex-1 flex overflow-x-auto'>
                                            <ul className='flex justify-center space-x-2'>
                                                {Array.from({
                                                    length: totalPages,
                                                }).map((_, index) => (
                                                    <li key={index}>
                                                        <button
                                                            className={`${
                                                                currentPage ===
                                                                index + 1
                                                                    ? 'bg-slate-200 border rounded-md'
                                                                    : 'bg-white'
                                                            } rounded-lg px-4 py-2 text-black`}
                                                            onClick={() =>
                                                                paginate(
                                                                    index + 1
                                                                )
                                                            }
                                                        >
                                                            {index + 1}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <button
                                                className='border bg-white border-slate-400 rounded-lg px-6 py-2 flex justify-center items-center gap-x-2 w-36'
                                                onClick={nextPage}
                                                disabled={
                                                    currentPage === totalPages
                                                }
                                            >
                                                <FaArrowRight />
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </section>
            )}
        </main>
    );
};

export default Table;
