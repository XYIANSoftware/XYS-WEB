import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Script from 'next/script';

// import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PrimeReactProvider } from 'primereact/api';
import Head from 'next/head';
import Script from 'next/script';
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
            <head>
                {/* Google Tag Manager */}
                <Script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=G-QNGPYK520K`}
                />
                <Script id='gtag-init' strategy='afterInteractive'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-QNGPYK520K');
                    `}
                </Script>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
