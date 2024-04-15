'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetAllStoresQuery } from '@/domains/store/queries/useGetAllStoresQuery';
import Loading from '@/shared/components/Loading';
import StoreCard from '@/domains/store/components/StoreCard';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

const MainStoreList = () => {
  const { data, isError, isLoading, fetchNextPage, isFetchingNextPage } = useGetAllStoresQuery();
  const { ref, inView } = useInView();

  console.log(data);

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
      {isFetchingNextPage ? <Loading /> : <div ref={ref} />}
    </div>
  );
};

export default MainStoreList;
