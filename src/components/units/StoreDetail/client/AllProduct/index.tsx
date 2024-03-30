'use client';

import { useGetStoreDetailAllQuery } from '@/components/units/StoreDetail/hooks/useGetStoreDetailAllQuery';
import ProductCard from '@/components/commons/card/ProductCard';

interface AllProductProps {
  storeId: number;
}

function AllProducts({ storeId }: AllProductProps) {
  const { data } = useGetStoreDetailAllQuery(storeId);

  return (
    <div className="flex w-full flex-wrap m-auto gap-x-[4%] gap-y-4">
      {data?.content?.map((item, i) => (
        <div key={i} className="w-[48%]">
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
