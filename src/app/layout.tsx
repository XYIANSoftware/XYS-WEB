import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'primeicons/primeicons.css';

// import Head from 'next/head';

// import primeflex
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Xyian Engineering',
    description: 'Software solutions, made simple. Choose Xyian!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
