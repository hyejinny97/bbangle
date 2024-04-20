'use client';

import ProductAndStoreTabWithCount from '@/domains/product/components/ProductAndStoreTabWithCount';
import { useMainPage } from '@/domains/product/hooks/useMainPage';

const MainTab = () => {
  const { isDetailPage } = useMainPage();

  return !isDetailPage ? <ProductAndStoreTabWithCount /> : null;
};

export default MainTab;
