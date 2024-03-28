'use client';

import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { useRecoilValue } from 'recoil';

import ProductCard from '@/components/commons/card/ProductCard';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import { SkeletonProductList } from '@/components/commons/skeleton/SkeletonProductList';
import { filterValueState } from '@/components/units/(main)/Products/atoms';

import { useGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';

const ProductsTab = () => {
  const filterValue = useRecoilValue(filterValueState);
  const { products, isError, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
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

  return (
    <PaddingWrapper className="px-0">
      <div className="grid grid-cols-2 gap-x-[16px] px-[16px] gap-y-[16px] pb-[36px]">
        {products &&
          products.map(product => <ProductCard key={product.boardId} product={product} />)}
      </div>
      {hasNextPage && (
        <div ref={ref}>
          {isFetchingNextPage && (
            <div className="gap-x-[16px] gap-y-[16px] pb-[36px]">
              <SkeletonProductList row={1} col={2} />
            </div>
          )}
        </div>
      )}
    </PaddingWrapper>
  );
};

export default ProductsTab;
