'use client';

import Error from '@/app/error';
import getFinancials from '@/lib/getFinancials';
import { useState, useEffect } from 'react';
import Goals from './goals';

type Financials = {
    income: string;
    expenses: string;
    savings: string;
    investment: string;
    debt: string;
    cashflow: string;
    networth: string;
};

const FinancialsComponent = () => {
    const [financials, setFinancials] = useState<Financials | null>(null);

    useEffect(() => {
        getFinancials()
            .then((data) => {
                setFinancials(data.financials);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='mt-5'>
            <div className='border-b-2 py-5'>
                <h2 className='text-xl font-semibold'>Financials</h2>
            </div>
            <div className='mt-5'></div>

            {financials ? (
                <>
                    <div className='flex flex-col '>
                        <div className='flex justify-between items-center border border-slate-400 rounded-t-md py-4 px-5 '>
                            <p>Income</p>
                            <p>{financials.income}</p>
                        </div>
                        <div className='flex justify-between items-center border border-slate-400  py-4 px-5 bg-slate-100 '>
                            <p>Expenses</p>
                            <p>{financials.expenses}</p>
                        </div>
                        <div className='flex justify-between items-center border border-slate-400  py-4 px-5 '>
                            <p>Savings</p>
                            <p>{financials.savings}</p>
                        </div>
                        <div className='flex justify-between items-center border border-slate-400  py-4 px-5 '>
                            <p>Investment</p>
                            <p>{financials.investment}</p>
                        </div>
                        <div className='flex justify-between items-center border border-slate-400  py-4 px-5 '>
                            <p>Debt</p>
                            <p>{financials.debt}</p>
                        </div>
                        <div className='flex justify-between items-center border border-slate-400  py-4 px-5 '>
                            <p>Cashflow</p>
                            <p>{financials.cashflow}</p>
                        </div>
                        <div className='flex justify-between items-center border border-slate-400  py-4 px-5 '>
                            <p>Networth</p>
                            <p>{financials.networth}</p>
                        </div>
                    </div>

                    <Goals />
                </>
            ) : (
                <Error />
            )}
        </div>
    );
};

export default FinancialsComponent;
