import getAllUsers from '@/lib/getAllUsers';

const Gender = async () => {
    const usersData: Promise<User[]> = getAllUsers();

    const users = await usersData;
    return (
        <main className='container mx-auto'>
            <section className='mt-5'>
                <div className='overflow-auto border border-slate-300 shadow rounded-lg hidden md:block'>
                    <table className='w-full'>
                        <thead className='w-full'>
                            <tr className='bg-gray-50 border-b-2 border-gray-200'>
                                <th className='p-3 w-32 text-sm font-semibold tracking-wide text-left'>
                                    <input type='checkbox' />
                                </th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>
                                    Name
                                </th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>
                                    Gender
                                </th>
                            </tr>
                        </thead>
                        <tbody className='h-60'>
                            {users.map((user) => {
                                return (
                                    <tr className='bg-white border-b-2'>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                            <input type='checkbox' />
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap '>
                                            <p>{user.name} </p>
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap '>
                                            <p>{user.gender} </p>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Gender;
