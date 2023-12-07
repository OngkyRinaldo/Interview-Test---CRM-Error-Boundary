import Financials from './financials';

type UserDetailsProps = {
    user: User;
};

const UserDetails = ({ user }: UserDetailsProps) => {
    return (
        <main className='container mx-auto'>
            <section className='mt-1'>
                <div className='py-5 border-b-2 '>
                    <h1 className='md: text-2xl font-bold px-5'>{user.name}</h1>
                </div>

                <div className='mt-10 flex justify-start items-center gap-x-3 md:gap-x-10 bg-slate-100 px-10 py-5'>
                    <div className='flex flex-col gap-y-2 text-slate-600 text-xs md:text-base'>
                        <p>Gender</p>
                        <p>{user.gender}</p>
                    </div>
                    <div className='flex flex-col gap-y-2 text-slate-600 text-xs md:text-base'>
                        <p>DOB</p>
                        {user.dob
                            ? new Date(user.dob).toLocaleDateString()
                            : '-'}
                    </div>
                    <div className='flex flex-col gap-y-2 text-slate-600 text-xs md:text-base'>
                        <p>Marital Status</p>
                        <p>{user.maritalStatus}</p>
                    </div>
                    <div className='flex flex-col gap-y-2 text-slate-600 text-xs md:text-base'>
                        <p>Employment</p>
                        <p>{user.employmentStatus}</p>
                    </div>
                </div>
            </section>

            <Financials />
        </main>
    );
};

export default UserDetails;
