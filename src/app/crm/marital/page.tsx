import { Metadata } from 'next';
import Table from '../components/table/marital/table';

export const metadata: Metadata = {
    title: 'CRM Marital Status Category',
};
const Marital = () => {
    return <Table />;
};

export default Marital;
