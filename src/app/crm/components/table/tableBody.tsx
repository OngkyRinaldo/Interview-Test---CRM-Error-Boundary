const TableBody = () => {
    return (
        <tr className='bg-white border-b-2'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <input type='checkbox' />
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <div className='flex justify-start items-center gap-x-2'>
                    <div></div>
                    <p>name</p>
                </div>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <p>Gender</p>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <p>DOB</p>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <p>Marital Status</p>
            </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                <p>Employment</p>
            </td>
        </tr>
    );
};

export default TableBody;
