'use client';

import { useEffect, useState } from 'react';
import TableBody from './tableBody';
import TableHead from './tableHead';
import getAllUsers from '@/lib/getAllUsers';

const Table = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
    return (
        <main className='max-w-7xl md:container mx-auto px-5'>
            <section className='mt-5'>
                <div className='mt-5 overflow-auto border border-slate-300 shadow rounded-lg hidden md:block'>
                    <table className='w-full  '>
                        <TableHead />
                        <tbody>
                            {users.map((user) => (
                                <TableBody key={user.id} user={user} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Table;
