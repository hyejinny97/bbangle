'use client';

import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
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
  const { products, itemCount, isLoading, fetchNextPage, isFetchingNextPage } =
    useGetSearchProductsQuery({ keyword, filterValue });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
      {products && itemCount > 0 ? (
        <>
          {products.map(product => (
            <div key={product.boardId} className="w-[48%]">
              <ProductCard product={product} />
            </div>
          ))}
          {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
        </>
      ) : (
        <NoSearchResult />
      )}
    </div>
  );
};

export default ProductList;
