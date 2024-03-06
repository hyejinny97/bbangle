'use client';

import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { filterValueState } from '@/atoms/atom';
import { useGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import ProductCard from '@/components/commons/card/ProductCard';
import Loading from '@/components/commons/Loading';

const ProductsTab = () => {
  const filterValue = useRecoilValue(filterValueState);
  const { products, isError, isLoading, fetchNextPage, isFetchingNextPage } =
    useGetAllProductsQuery(filterValue);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div className="p-[16px]">Error</div>;
  }

  return (
    <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
      {products &&
        products.map(product => (
          <div key={product.boardId} className="w-[48%]">
            <ProductCard product={product} />
          </div>
        ))}
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </div>
  );
};

export default ProductsTab;
