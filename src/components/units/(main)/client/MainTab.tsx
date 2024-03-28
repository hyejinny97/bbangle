'use client';

import { usePathname } from 'next/navigation';
import ProductAndStoreTabWithCount from '@/components/units/(main)/client/ProductAndStoreTabWithCount';

const MainTab = () => {
  const pathname = usePathname();
  const productsPath = '/products';
  const storePath = '/stores';

  const isProductPage = pathname === productsPath;
  const isStorePage = pathname === storePath;
  const isDetailPage = !isStorePage && !isProductPage;

  return <>{!isDetailPage && <ProductAndStoreTabWithCount />}</>;
};

export default MainTab;
