'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetAllStoresQuery } from '../../hooks/useGetAllStoresQuery';
import StoreCard from '../StoreCard';
import Loading from '@/components/commons/Loading';

function StoresTab() {
  const { stores, isError, isLoading, fetchNextPage, isFetchingNextPage } = useGetAllStoresQuery();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="p-[16px]">
        <Loading />
      </div>
    );
  }
  if (isError) {
    return <div className="p-[16px]">Error</div>;
  }

  return (
    <div className="w-full">
      {stores && stores.map(store => <StoreCard key={store.storeId} data={store} />)}
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </div>
  );
}

export default StoresTab;
