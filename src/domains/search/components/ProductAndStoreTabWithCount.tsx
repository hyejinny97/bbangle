'use client';

import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { useSearchParams } from 'next/navigation';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useGetSearchProductsQuery } from '@/domains/search/queries/useGetSearchProductsQuery';
import { useGetSearchStoresQuery } from '@/domains/search/queries/useGetSearchStoresQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';

const ProductAndStoreTabWithCount = () => {
  const filterValue = useRecoilValue(filterValueState(FILTER_FAMILY_ID.search));
  const searchParams = useSearchParams();
  const keyword = searchParams.get('query') || '';

  const { itemCount: productCount } = useGetSearchProductsQuery({ keyword, filterValue });
  const { itemCount: storeCount } = useGetSearchStoresQuery({ keyword });

  return (
    <Suspense>
      <ProductAndStoreTab
        defaultPath="/search"
        productCount={productCount}
        storeCount={storeCount}
      />
    </Suspense>
  );
};

export default ProductAndStoreTabWithCount;
