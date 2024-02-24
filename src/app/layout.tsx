import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import RootLayoutProvider from '@/components/commons/RootLayoutProvider';
import Footer from '@/components/commons/footer/server/Footer';
import GetAccessToken from '@/components/commons/header/client/GetAccessToken';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '프로젝트',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={inter.className}>
        <RootLayoutProvider>
          <GetAccessToken />
          <div className="sm:w-[600px] w-full m-auto pb-24">{children}</div>
          <Footer />
        </RootLayoutProvider>
      </body>
    </html>
  );
}
