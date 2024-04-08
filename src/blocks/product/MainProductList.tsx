'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilValue } from 'recoil';
import { useGetAllProductsQuery } from '@/domains/product/queries/useGetAllProductsQuery';
import { filterValueState } from '@/domains/product/atoms';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import ProductCard from '@/domains/product/components/ProductCard';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import { SkeletonProductList } from '@/components/commons/skeleton/SkeletonProductList';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

const MainProductList = () => {
  const filterValue = useRecoilValue(filterValueState(FILTER_FAMILY_ID.main));
  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useGetAllProductsQuery(filterValue);
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
  if (!data || data.products.length === 0) {
    return (
      <SadBbangleBox>
        <p>상품이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper className="px-0">
      <div className="grid grid-cols-2 gap-x-[16px] px-[16px] gap-y-[16px] pb-[36px]">
        {data.products.map((product) => (
          <ProductCard key={product.boardId} product={product} />
        ))}
      </div>
      {hasNextPage && (
        <div ref={ref} className="pb-[36px]">
          <SkeletonProductList row={1} col={2} />
        </div>
      )}
    </PaddingWrapper>
  );
};

export default MainProductList;
