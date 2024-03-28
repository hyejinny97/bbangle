'use client';

import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { PAGE_MAIN } from '@/domains/product/constants/pageParam';
import { useGetAllProductsQuery } from '@/components/units/(main)/Products/hooks/useGetAllProductsQuery';
import { useGetAllStoresQuery } from '@/components/units/(main)/Stores/hooks/useGetAllStoresQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';

const ProductAndStoreTabWithCount = () => {
  const filterValue = useRecoilValue(filterValueState(PAGE_MAIN));

  const { itemCount: productCount } = useGetAllProductsQuery(filterValue);
  const { itemCount: storeCount } = useGetAllStoresQuery();

  return (
    <Suspense>
      <ProductAndStoreTab productCount={productCount} storeCount={storeCount} />
    </Suspense>
  );
};

export default ProductAndStoreTabWithCount;
