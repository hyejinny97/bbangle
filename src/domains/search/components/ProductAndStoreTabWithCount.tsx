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

  const { data: productData } = useGetSearchProductsQuery({ keyword, filterValue });
  const { data: storeData } = useGetSearchStoresQuery({ keyword });

  return (
    <Suspense>
      <ProductAndStoreTab
        defaultPath="/search"
        productCount={productData?.itemCount}
        storeCount={storeData?.itemCount}
      />
    </Suspense>
  );
};

export default ProductAndStoreTabWithCount;
