'use client';

import { useGetStoreDetailQuery } from '@/components/units/StoreDetail/hooks/useGetStoreDetailQuery';
import ProductCard from '@/components/commons/card/ProductCard';

interface BestProductProps {
  storeId: number;
}

function BestProducts({ storeId }: BestProductProps) {
  const { data } = useGetStoreDetailQuery(storeId);

  return (
    <div className="flex w-full flex-wrap m-auto gap-x-[3%] gap-y-2">
      {data?.bestProducts.map((item, i) => (
        <div key={i} className="w-[31%]">
          <ProductCard product={item} popular={true} ranking={Number(i + 1)} />
        </div>
      ))}
    </div>
  );
}

export default BestProducts;
