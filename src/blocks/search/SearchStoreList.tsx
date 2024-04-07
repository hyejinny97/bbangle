'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetSearchStoresQuery } from '@/domains/search/queries/useGetSearchStoresQuery';
import NoSearchResult from '@/domains/search/components/NoSearchResult';
import Loading from '@/components/commons/Loading';
import StoreCard from '@/domains/store/components/StoreCard';

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
    return <div className="p-[16px]">Error</div>;
  }

  return (
    <div className="w-full">
      {data && data.itemCount > 0 ? (
        <>
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
          {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
        </>
      ) : (
        <NoSearchResult />
      )}
    </div>
  );
};

export default SearchStoreList;
