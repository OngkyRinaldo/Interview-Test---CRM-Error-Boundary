'use client';

import { useEffect, useState } from 'react';
import TableBody from './tableBody';
import TableHead from './tableHead';
import getAllUsers from '@/lib/getAllUsers';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import { RiAccountCircleLine } from 'react-icons/ri';

const Table = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'ASC' | 'DESC'>('ASC');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

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
        const sortedUsers = [...users].sort((a, b) =>
            sortDirection === 'ASC'
                ? a.gender.localeCompare(b.gender)
                : b.gender.localeCompare(a.gender)
        );

        setUsers(sortedUsers);
        setSortDirection((prevDirection) =>
            prevDirection === 'ASC' ? 'DESC' : 'ASC'
        );
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const previousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(users.length / itemsPerPage);

    return (
        <main className='max-w-7xl md:container mx-auto px-5'>
            {loading ? (
                <p className='mt-36 text-center font-bold text-2xl'>
                    Loading...
                </p>
            ) : error ? (
                <p className='mt-36 text-center font-bold text-2xl'>Error...</p>
            ) : (
                <section className='mt-5'>
                    <div className='mt-5 overflow-auto border border-slate-300 shadow rounded-lg hidden md:block'>
                        <table className='w-full  '>
                            <TableHead
                                handleSortDirectionToggle={
                                    handleSortDirectionToggle
                                }
                                sortDirection={sortDirection}
                            />
                            <tbody className='h-56'>
                                {currentItems.map((user) => (
                                    <TableBody key={user.id} user={user} />
                                ))}
                            </tbody>
                            <tfoot className='w-full'>
                                <tr>
                                    <td colSpan={5} className='px-6 py-4'>
                                        <div className='flex justify-between items-center'>
                                            <button
                                                className='border border-slate-400 rounded-lg px-6 py-2 flex justify-center items-center gap-x-2'
                                                onClick={() =>
                                                    setCurrentPage(
                                                        currentPage - 1
                                                    )
                                                }
                                                disabled={currentPage === 1}
                                            >
                                                <FaArrowLeft /> Previous
                                            </button>
                                            <ul className='flex justify-center space-x-2'>
                                                {Array.from({
                                                    length: totalPages,
                                                }).map((_, index) => (
                                                    <li key={index}>
                                                        <button
                                                            className={`${
                                                                currentPage ===
                                                                index + 1
                                                                    ? 'bg-slate-300 '
                                                                    : 'bg-white '
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
                                            <button
                                                className='border border-slate-400 rounded-lg px-6 py-2 flex justify-center items-center gap-x-2'
                                                onClick={() =>
                                                    setCurrentPage(
                                                        currentPage + 1
                                                    )
                                                }
                                                disabled={
                                                    currentPage === totalPages
                                                }
                                            >
                                                <FaArrowRight /> Next
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className='grid grid-cols-1 gap-2 md:hidden'>
                        {currentItems.map((user) => (
                            <div
                                key={user.id}
                                className='bg-slate-300 shadow mb-3 p-5 rounded-md'
                            >
                                <div className='flex justify-start items-center gap-x-2 border-b-2'>
                                    <input type='checkbox' />
                                    <h2 className='font-bold'>{user.name}</h2>
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
                                        <RiAccountCircleLine size={50} />
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
                                            Marital Status :{user.maritalStatus}
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
                                    {Array.from({ length: totalPages }).map(
                                        (_, index) => (
                                            <li key={index}>
                                                <button
                                                    className={`${
                                                        currentPage ===
                                                        index + 1
                                                            ? 'bg-slate-200 border rounded-md'
                                                            : 'bg-white'
                                                    } rounded-lg px-4 py-2 text-black`}
                                                    onClick={() =>
                                                        paginate(index + 1)
                                                    }
                                                >
                                                    {index + 1}
                                                </button>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div>
                                <button
                                    className='border bg-white border-slate-400 rounded-lg px-6 py-2 flex justify-center items-center gap-x-2 w-36'
                                    onClick={nextPage}
                                    disabled={currentPage === totalPages}
                                >
                                    <FaArrowRight />
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default Table;
