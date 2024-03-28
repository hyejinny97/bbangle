'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/commons/header/client/Header';

const MainHeader = () => {
  const pathname = usePathname();
  const productPath = '/products';
  const storePath = '/stores';

  const isProductListPage = pathname === productPath;
  const isStoreListPage = pathname === storePath;

  const isDetailPage = !isStoreListPage && !isProductListPage;
  const isProductDetailPage = isDetailPage && pathname.startsWith(productPath);
  const isStoreDetailPage = isDetailPage && pathname.startsWith(storePath);

  let title;
  if (!isDetailPage) {
    title = '전체보기';
  }
  if (isProductDetailPage) {
    title = '상품보기';
  }
  if (isStoreDetailPage) {
    title = '스토어';
  }

  return <Header title={title} back={isDetailPage} />;
};

export default MainHeader;
