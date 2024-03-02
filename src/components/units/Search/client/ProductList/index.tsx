'use client';

import { useRecoilValue } from 'recoil';
import { filterValueState } from '@/atoms/atom';
import { useGetSearchResultQuery } from '@/components/units/Search/hooks/useGetSearchResultQuery';
import ProductCard from '@/components/commons/card/ProductCard';
import NoSearchResult from '@/components/units/Search/client/NoSearchResult';
import Loading from '@/components/commons/Loading';

interface ProductListProps {
  keyword: string;
}

const ProductList = ({ keyword }: ProductListProps) => {
  const filterValue = useRecoilValue(filterValueState);
  const { data, isLoading } = useGetSearchResultQuery({ keyword, filterValue });

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
      {data && data.products.length > 0 ? (
        data.products.map(product => (
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
