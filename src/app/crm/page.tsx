import { Metadata } from 'next';
import Table from './components/table/table';

export const metadata: Metadata = {
    title: 'CRM Page',
};

const Crm = () => {
    return <Table />;
};

export default Crm;
