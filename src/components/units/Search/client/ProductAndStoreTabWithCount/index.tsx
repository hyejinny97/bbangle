'use client';

import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { useSearchParams } from 'next/navigation';
import { filterValueState } from '@/domains/product/atoms';
import { PAGE_SEARCH } from '@/domains/product/constants/pageParam';
import { useGetSearchProductsQuery } from '@/components/units/Search/hooks/useGetSearchProductsQuery';
import { useGetSearchStoresQuery } from '@/components/units/Search/hooks/useGetSearchStoresQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';

const ProductAndStoreTabWithCount = () => {
  const filterValue = useRecoilValue(filterValueState(PAGE_SEARCH));
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
