import { Metadata } from 'next';
import Table from './components/table/crm/table';

export const metadata: Metadata = {
    title: 'CRM Page',
};

const Crm = () => {
    return <Table />;
};

export default Crm;
