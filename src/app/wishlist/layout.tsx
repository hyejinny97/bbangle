import Header from '@/components/commons/header/client/Header';
import { ReactNode } from 'react';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';
import { headers } from 'next/headers';

interface Layout {
  children: ReactNode;
}

const Layout = ({ children }: Layout) => {
  const header = headers();
  const pathname = header.get('next-url');

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
