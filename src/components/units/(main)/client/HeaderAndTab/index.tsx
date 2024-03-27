'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/commons/header/client/Header';
import ProductAndStoreTabWithCount from '@/components/units/(main)/client/ProductAndStoreTabWithCount';

const HeaderAndTab = () => {
  const pathname = usePathname();
  const productsPath = '/products';
  const storePath = '/stores';

  const isProductPage = pathname === productsPath;
  const isStorePage = pathname === storePath;
  const isDetailPage = !isStorePage && !isProductPage;

  return (
    <>
      {!isDetailPage && (
        <>
          <Header title="전체보기" />
          <ProductAndStoreTabWithCount />
        </>
      )}
    </>
  );
};

export default HeaderAndTab;
