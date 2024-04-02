import Header from '@/components/commons/header/client/Header';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';
import PATH from '@/shared/constants/path';
import { ReactNode } from 'react';

interface Layout {
  children: ReactNode;
}

const Layout = async ({ children }: Layout) => {
  return (
    <>
      <Header title="찜" />
      <ProductAndStoreTab defaultPath={PATH.wishList} />
      {children}
    </>
  );
};

export default Layout;
