'use client';

import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import SkeletonStoreList from '@/components/commons/skeleton/SkeletonStoreCardList';
import StoreCard from '@/domains/store/components/StoreCard';
import { useGetAllStoresQuery } from '@/domains/store/queries/useGetAllStoresQuery';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

const MainStoreList = () => {
  const { data, isError, isLoading, fetchNextPage, isFetchingNextPage } = useGetAllStoresQuery();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <SkeletonStoreList row={7} />;
  }
  if (isError) {
    return (
      <SadBbangleBox>
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }
  if (!data || data.stores.length === 0) {
    return (
      <SadBbangleBox>
        <p>스토어가 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <div className="w-full">
      {data.stores.map(({ introduce, storeId, storeName, isWished, profile }) => (
        <StoreCard
          key={storeId}
          id={storeId}
          title={storeName}
          desc={introduce}
          isWished={isWished}
          imgSrc={profile}
        />
      ))}
      {isFetchingNextPage ? <SkeletonStoreList /> : <div ref={ref} />}
    </div>
  );
};

export default MainStoreList;
