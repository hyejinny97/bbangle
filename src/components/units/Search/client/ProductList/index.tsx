'use client';

import { useRecoilValue } from 'recoil';
import { filterValueState } from '@/atoms/atom';
import { useGetSearchProductsQuery } from '@/components/units/Search/hooks/useGetSearchProductsQuery';
import ProductCard from '@/components/commons/card/ProductCard';
import NoSearchResult from '@/components/units/Search/client/NoSearchResult';
import Loading from '@/components/commons/Loading';

interface ProductListProps {
  keyword: string;
}

const ProductList = ({ keyword }: ProductListProps) => {
  const filterValue = useRecoilValue(filterValueState);
  const { data, isLoading } = useGetSearchProductsQuery({ keyword, filterValue });

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
      {data && data.itemCount > 0 ? (
        data.content.map(product => (
          <div key={product.boardId} className="w-[48%]">
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <NoSearchResult />
      )}
    </div>
  );
};

export default ProductList;
