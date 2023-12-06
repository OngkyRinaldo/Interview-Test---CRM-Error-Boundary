import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/navbar/navbar';

export const metadata: Metadata = {
    title: 'CRM Applications',
    description: 'CRM Applications',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className='font-NotoSans'>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
