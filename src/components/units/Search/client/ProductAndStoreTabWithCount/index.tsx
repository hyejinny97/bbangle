'use client';

import { useSearchParams } from 'next/navigation';
import { useGetSearchProductsQuery } from '@/components/units/Search/hooks/useGetSearchProductsQuery';
import { useGetSearchStoresQuery } from '@/components/units/Search/hooks/useGetSearchStoresQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';

const ProductAndStoreTabWithCount = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('query') || '';

  const { data: products } = useGetSearchProductsQuery({
    keyword,
    filterValue: { category: '', tags: [] }
  });
  const { data: stores } = useGetSearchStoresQuery({ keyword });

  return (
    <ProductAndStoreTab
      productCount={products && products.itemCount}
      storeCount={stores && stores.itemCount}
    />
  );
};

export default ProductAndStoreTabWithCount;
