import Header from '@/components/commons/header/client/Header';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';
import { ReactNode } from 'react';

interface Layout {
  children: ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <>
      <Header title="찜" />
      <ProductAndStoreTab defaultPath="/wishlist/list" />
      {children}
    </>
  );
};

export default Layout;
