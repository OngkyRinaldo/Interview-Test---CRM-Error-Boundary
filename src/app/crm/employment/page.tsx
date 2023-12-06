import { Metadata } from 'next';
import Table from '../components/table/employment/table';

export const metadata: Metadata = {
    title: 'CRM Employment Category',
};
const Employment = () => {
    return <Table />;
};

export default Employment;
