'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetSearchStoresQuery } from '@/domains/search/queries/useGetSearchStoresQuery';
import Loading from '@/components/commons/Loading';
import StoreCard from '@/domains/store/components/StoreCard';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

interface SearchStoreListProps {
  keyword?: string;
}

const SearchStoreList = ({ keyword = '' }: SearchStoreListProps) => {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useGetSearchStoresQuery({
    keyword
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <SadBbangleBox>
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
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
    <div className="w-full">
      {data.stores.map(({ profile, storeId, storeName, isWished, introduce }) => (
        <StoreCard
          key={storeId}
          id={storeId}
          imgSrc={profile}
          title={storeName}
          desc={introduce}
          isWished={isWished}
        />
      ))}
      {isFetchingNextPage ? <Loading /> : <div ref={ref} />}
    </div>
  );
};

export default SearchStoreList;
