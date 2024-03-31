'use client';

import Header from '@/components/commons/header/client/Header';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';

interface Layout {
  children: ReactNode;
}

const Layout = ({ children }: Layout) => {
  const pathname = usePathname();
  const productsPath = '/wishlist/products';
  const storePath = '/wishlist/stores';

  const isProductPage = pathname === productsPath;
  const isStorePage = pathname === storePath;
  const isDetailPage = !isStorePage && !isProductPage;

  return (
    <>
      <Header back={isDetailPage} title="찜" />
      {!isDetailPage && <ProductAndStoreTab defaultPath="/wishlist" />}
      {children}
    </>
  );
};

export default Layout;
