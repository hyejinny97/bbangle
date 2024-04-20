'use client';

import ProductCard from '@/domains/product/components/ProductCard';
import { useGetStoreDetailQuery } from '@/domains/store/hooks/useGetStoreDetailQuery';

interface BestProductProps {
  storeId: number;
}

const BestProducts = ({ storeId }: BestProductProps) => {
  const { data } = useGetStoreDetailQuery(storeId);

  return (
    <div className="flex w-full flex-wrap m-auto gap-x-[3%] gap-y-2">
      {data?.bestProducts.map((item, i) => (
        <div key={item.boardId} className="w-[31%]">
          <ProductCard product={item} popular ranking={Number(i + 1)} />
        </div>
      ))}
    </div>
  );
};

export default BestProducts;
