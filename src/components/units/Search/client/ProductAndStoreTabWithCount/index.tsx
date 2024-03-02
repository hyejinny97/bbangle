'use client';

import { useRecoilValue } from 'recoil';
import { filterValueState } from '@/atoms/atom';
import { useSearchParams } from 'next/navigation';
import { useGetSearchResultQuery } from '@/components/units/Search/hooks/useGetSearchResultQuery';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';

const ProductAndStoreTabWithCount = () => {
  const searchParams = useSearchParams();
  const filterValue = useRecoilValue(filterValueState);
  const { data } = useGetSearchResultQuery({
    keyword: searchParams.get('query') || '',
    filterValue
  });

  return (
    <ProductAndStoreTab
      productCount={data && data.products.length}
      storeCount={data && data.stores.length}
    />
  );
};

export default ProductAndStoreTabWithCount;
