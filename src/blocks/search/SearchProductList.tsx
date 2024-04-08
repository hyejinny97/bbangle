'use client';

import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { useGetSearchProductsQuery } from '@/domains/search/queries/useGetSearchProductsQuery';
import ProductCard from '@/domains/product/components/ProductCard';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import { SkeletonProductList } from '@/components/commons/skeleton/SkeletonProductList';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

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
  if (!data || data.itemCount === 0) {
    return (
      <SadBbangleBox>
        <p>검색 결과가 없어요 😥</p>
        <p>다른 키워드로 검색해보세요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper className="pb-[36px]">
      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px]">
        {data.products.map((product) => (
          <ProductCard key={product.boardId} product={product} />
        ))}
      </div>
      {hasNextPage && (
        <div ref={ref}>
          <SkeletonProductList row={1} col={2} />
        </div>
      )}
    </PaddingWrapper>
  );
};

export default SearchProductList;
