'use client';

import { useSearchParams } from 'next/navigation';
import { useGetSearchProductsQuery } from '@/components/units/Search/hooks/useGetSearchProductsQuery';
import { useGetSearchStoresQuery } from '@/components/units/Search/hooks/useGetSearchStoresQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';
import { Suspense } from 'react';

const ProductAndStoreTabWithCount = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('query') || '';

  const { itemCount: productCount } = useGetSearchProductsQuery({
    keyword,
    filterValue: { category: '', tags: [], sort: '추천순', showProductsAvailableOrder: false }
  });
  const { itemCount: storeCount } = useGetSearchStoresQuery({ keyword });

  return (
    <Suspense>
      <ProductAndStoreTab productCount={productCount} storeCount={storeCount} />
    </Suspense>
  );
};

export default ProductAndStoreTabWithCount;
