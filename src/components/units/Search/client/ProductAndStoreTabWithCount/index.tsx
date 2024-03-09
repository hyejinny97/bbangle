'use client';

import { useSearchParams } from 'next/navigation';
import { useGetSearchProductsQuery } from '@/components/units/Search/hooks/useGetSearchProductsQuery';
import { useGetSearchStoresQuery } from '@/components/units/Search/hooks/useGetSearchStoresQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';
import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE } from '@/commons/constants/priceLimit';

const ProductAndStoreTabWithCount = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('query') || '';

  const { itemCount: productCount } = useGetSearchProductsQuery({
    keyword,
    filterValue: {
      category: '',
      tags: [],
      sort: '추천순',
      showProductsAvailableOrder: false,
      price: { minPrice: LIMIT_MIN_PRICE, maxPrice: LIMIT_MAX_PRICE }
    }
  });
  const { itemCount: storeCount } = useGetSearchStoresQuery({ keyword });

  return <ProductAndStoreTab productCount={productCount} storeCount={storeCount} />;
};

export default ProductAndStoreTabWithCount;
