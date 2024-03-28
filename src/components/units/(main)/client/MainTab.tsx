'use client';

import { useMainPage } from '@/components/units/(main)/hooks/useMainPage';
import ProductAndStoreTabWithCount from '@/components/units/(main)/client/ProductAndStoreTabWithCount';

const MainTab = () => {
  const { isDetailPage } = useMainPage();

  return <>{!isDetailPage && <ProductAndStoreTabWithCount />}</>;
};

export default MainTab;
