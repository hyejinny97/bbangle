'use client';

import ProductCard from '@/domains/product/components/ProductCard';
import { useGetStoreDetailAllQuery } from '@/domains/store/hooks/useGetStoreDetailAllQuery';

interface AllProductProps {
  storeId: number;
}

const AllProducts = ({ storeId }: AllProductProps) => {
  const { data } = useGetStoreDetailAllQuery(storeId);

  return (
    <div className="flex w-full flex-wrap m-auto gap-x-[4%] gap-y-4">
      {data?.content?.map((item) => (
        <div key={item.boardId} className="w-[48%]">
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
