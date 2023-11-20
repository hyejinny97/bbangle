import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RootLayoutProvider from '@/components/commons/RootLayoutProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '빵그리',
    description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body className={inter.className}>
                <RootLayoutProvider>{children}</RootLayoutProvider>
            </body>
        </html>
    );
}
