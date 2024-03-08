'use client';

import { useSearchParams } from 'next/navigation';
import { useGetSearchProductsQuery } from '@/components/units/Search/hooks/useGetSearchProductsQuery';
import { useGetSearchStoresQuery } from '@/components/units/Search/hooks/useGetSearchStoresQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';

const ProductAndStoreTabWithCount = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('query') || '';

  const { itemCount: productCount } = useGetSearchProductsQuery({
    keyword,
    filterValue: { category: '', tags: [], sort: '추천순' }
  });
  const { itemCount: storeCount } = useGetSearchStoresQuery({ keyword });

  return <ProductAndStoreTab productCount={productCount} storeCount={storeCount} />;
};

export default ProductAndStoreTabWithCount;
