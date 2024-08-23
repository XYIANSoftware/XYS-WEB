import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
// import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';
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
            {/* <Head>
                <script
                    src='https://kit.fontawesome.com/aaa02456f5.js'
                    crossorigin='anonymous'
                ></script>
            </Head> */}
            <body className={inter.className}>{children}</body>
        </html>
    );
}
