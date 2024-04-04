'use client';

import { useMainPage } from '@/domains/product/hooks/useMainPage';
import Header from '@/components/commons/header/client/Header';

const MainHeader = () => {
  const { isDetailPage, isProductDetailPage, isStoreDetailPage } = useMainPage();

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
