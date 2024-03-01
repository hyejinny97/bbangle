'use client';

import { useRouter, usePathname } from 'next/navigation';
import TabContainer from '@/components/commons/tabs/TabContainer';

const TAB_NAMES = ['상품', '스토어'];
const PRODUCT_IDX = 0;
const STORE_IDX = 1;

const ProductAndStoreTab = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isProductsPage = pathname.split('/').at(-1) === 'products';

  const handleTabChange = (activeTabIdx: number) => {
    const path = activeTabIdx === PRODUCT_IDX ? 'products' : 'stores';
    router.push(`/${path}`);
  };

  return (
    <TabContainer
      names={TAB_NAMES}
      initActiveTabIdx={isProductsPage ? PRODUCT_IDX : STORE_IDX}
      onChange={handleTabChange}
    />
  );
};

export default ProductAndStoreTab;
