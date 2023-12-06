import { Metadata } from 'next';
import Table from '../components/table/gender/table';

export const metadata: Metadata = {
    title: 'CRM Gender Category',
};
const Gender = () => {
    return <Table />;
};

export default Gender;
