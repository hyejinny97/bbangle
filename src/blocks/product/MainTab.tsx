'use client';

import { useMainPage } from '@/domains/product/hooks/useMainPage';
import ProductAndStoreTabWithCount from '@/domains/product/components/ProductAndStoreTabWithCount';

const MainTab = () => {
  const { isDetailPage } = useMainPage();

  return <>{!isDetailPage && <ProductAndStoreTabWithCount />}</>;
};

export default MainTab;
