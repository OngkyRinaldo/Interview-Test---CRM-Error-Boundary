'use client';

import Error from '@/app/error';
import getFinancials from '@/lib/getFinancials';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import user from '../../../../../public/user.png';
import { PiNotebookLight } from 'react-icons/pi';

type Goals = {
    emergencyFund: string;
    travel: string;
};

const Goals = () => {
    const [goals, setGoals] = useState<Goals | null>(null);

    useEffect(() => {
        getFinancials()
            .then((data) => {
                setGoals(data.goals);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='mt-5 pb-10'>
            <div className='border-b-2 py-5'>
                <h2 className='text-xl font-semibold'>Goals</h2>
            </div>
            <div className='mt-5'></div>

            {goals ? (
                <div className='mb-5 flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:justify-between md:items-center'>
                    <div className='w-full md:w-1/2  px-5'>
                        <div className='w-full flex justify-between items-center border border-slate-200 py-4 px-5 rounded-md'>
                            <div className='flex justify-start items-center gap-x-2'>
                                <Image
                                    src={user}
                                    alt='user.png'
                                    width={35}
                                    height={35}
                                    className='rounded-full object-cover'
                                />
                                <div className=''>
                                    <p className='text-xl font-semibold'>
                                        Emergency Fund
                                    </p>
                                    <p className='text-slate-500'>
                                        $.{goals.emergencyFund}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <button className='py-2 px-4 border border-slate-200 rounded-md cursor-pointer'>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2   px-5'>
                        <div className='w-full flex justify-between items-center border border-slate-200 py-4 px-5 rounded-md'>
                            <div className='flex justify-start items-center gap-x-2'>
                                <div className='border border-slate-100 py-4 px-5 rounded-full bg-gray-50'>
                                    <PiNotebookLight />
                                </div>
                                <div className=''>
                                    <p className='text-xl font-semibold'>
                                        Travel
                                    </p>
                                    <p className='text-slate-500'>
                                        $.{goals.travel}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <button className='py-2 px-4 border border-slate-200 rounded-md cursor-pointer'>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Error />
            )}

            <div className='border-b-2 py-5'>
                <h2 className='text-xl font-semibold'>Insurances</h2>
            </div>
        </div>
    );
};

export default Goals;
