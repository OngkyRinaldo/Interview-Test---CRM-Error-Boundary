import TableBody from './tableBody';
import TableHead from './tableHead';

const Table = () => {
    return (
        <main className='max-w-7xl md:container mx-auto px-5'>
            <section className='mt-5'>
                <div className='mt-5 overflow-auto border border-slate-300 shadow rounded-lg hidden md:block'>
                    <table className='w-full  '>
                        <TableHead />
                        <tbody>
                            <TableBody />
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Table;
