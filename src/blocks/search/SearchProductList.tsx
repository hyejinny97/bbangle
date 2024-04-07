'use client';

import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useGetSearchProductsQuery } from '@/domains/search/queries/useGetSearchProductsQuery';
import ProductCard from '@/domains/product/components/ProductCard';
import NoSearchResult from '@/domains/search/components/NoSearchResult';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import { SkeletonProductList } from '@/components/commons/skeleton/SkeletonProductList';

interface SearchProductListProps {
  keyword?: string;
}

const SearchProductList = ({ keyword = '' }: SearchProductListProps) => {
  const filterValue = useRecoilValue(filterValueState(FILTER_FAMILY_ID.search));
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useGetSearchProductsQuery({
    keyword,
    filterValue
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <SkeletonProductList />;
  }
  if (isError) {
    return <div className="p-[16px]">Error</div>;
  }

  return (
    <PaddingWrapper className="pb-[36px]">
      {data && data.itemCount > 0 ? (
        <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px]">
          {data.products.map(product => (
            <ProductCard key={product.boardId} product={product} />
          ))}
          {hasNextPage && (
            <div ref={ref}>
              <SkeletonProductList row={1} col={2} />
            </div>
          )}
        </div>
      ) : (
        <NoSearchResult />
      )}
    </PaddingWrapper>
  );
};

export default SearchProductList;
