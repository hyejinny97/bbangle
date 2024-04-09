'use client';

import ProductCard from '@/domains/product/components/ProductCard';
import WishListSortSelect from '@/components/commons/selects/WishListSortSelect';
import { useWishProductListQuery } from '@/components/units/WishListDetail/hooks/useWishProductsListQuery';

interface WishDetailProps {
  folderId: number;
}

const WishDetail = ({ folderId }: WishDetailProps) => {
  const { data: wishProductList } = useWishProductListQuery(folderId);
  return (
    <div className="w-[92%]">
      <div className="mb-5">
        <WishListSortSelect />
      </div>
      <div className="flex flex-wrap w-full  m-auto gap-x-[4%] gap-y-4">
        {wishProductList?.content?.map((product, i) => (
          <div key={i} className="w-[48%]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishDetail;
