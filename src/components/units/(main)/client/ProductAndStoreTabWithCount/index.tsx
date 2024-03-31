'use client';

import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useGetAllProductsQuery } from '@/components/units/(main)/Products/hooks/useGetAllProductsQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';

const ProductAndStoreTabWithCount = () => {
  const filterValue = useRecoilValue(filterValueState(FILTER_FAMILY_ID.main));
  const { productCount, storeCount } = useGetAllProductsQuery(filterValue);

  return (
    <Suspense>
      <ProductAndStoreTab productCount={productCount} storeCount={storeCount} />
    </Suspense>
  );
};

export default ProductAndStoreTabWithCount;
