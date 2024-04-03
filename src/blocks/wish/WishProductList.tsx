'use client';

import { BbangleSadIcon } from '@/components/commons/Icon';
import ProductCard from '@/components/commons/card/ProductCard';
import useWishProductListQuery from '@/domains/wish/queries/useWishProductListQuery';
import { useParams } from 'next/navigation';

const WishProductList = () => {
  const { folderId } = useParams<{ folderId: string }>();
  const { data } = useWishProductListQuery(folderId);

  if (!data || data?.length === 0) {
    return (
      <div className="text-gray-500 leading-150 text-[14px] mx-auto flex flex-col gap-[2px] justify-center items-center w-[360px] h-[360px]">
        <BbangleSadIcon />
        <div>찜한 상품이 없어요!</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-[16px]">
      {data.map(product => (
        <ProductCard key={product.boardId} product={product} />
      ))}
    </div>
  );
};

export default WishProductList;