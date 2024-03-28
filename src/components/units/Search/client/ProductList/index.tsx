'use client';

import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { filterValueState } from '@/domains/product/atoms';
import { PAGE_SEARCH } from '@/domains/product/constants/pageParam';
import { useGetSearchProductsQuery } from '@/components/units/Search/hooks/useGetSearchProductsQuery';
import ProductCard from '@/components/commons/card/ProductCard';
import NoSearchResult from '@/components/units/Search/client/NoSearchResult';
import Loading from '@/components/commons/Loading';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface ProductListProps {
  keyword: string;
}

const ProductList = ({ keyword }: ProductListProps) => {
  const filterValue = useRecoilValue(filterValueState(PAGE_SEARCH));
  const { products, itemCount, isLoading, fetchNextPage, isFetchingNextPage } =
    useGetSearchProductsQuery({ keyword, filterValue });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) return <Loading />;

  return (
    <PaddingWrapper className="pb-[36px]">
      {products && itemCount > 0 ? (
        <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px]">
          {products.map(product => (
            <ProductCard key={product.boardId} product={product} />
          ))}
          {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
        </div>
      ) : (
        <NoSearchResult />
      )}
    </PaddingWrapper>
  );
};

export default ProductList;
