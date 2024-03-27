'use client';

import Header from '@/components/commons/header/client/Header';
import TabButton from '@/shared/components/TabButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Layout {
  children: ReactNode;
}

const Laoyout = ({ children }: Layout) => {
  const pathname = usePathname();
  const productsPath = '/wishlist/products';
  const storePath = '/wishlist/stores';

  const isProductPage = pathname === productsPath;
  const isStorePage = pathname === storePath;
  const isDetailPage = !isStorePage && !isProductPage;

  return (
    <>
      <Header back={isDetailPage} title="찜" />
      {!isDetailPage && (
        <div className="flex">
          <Link className="w-full" href="/wishlist/products">
            <TabButton active={isProductPage}>상품</TabButton>
          </Link>
          <Link className="w-full" href="/wishlist/stores">
            <TabButton active={isStorePage}>스토어</TabButton>
          </Link>
        </div>
      )}
      {children}
    </>
  );
};

export default Laoyout;
