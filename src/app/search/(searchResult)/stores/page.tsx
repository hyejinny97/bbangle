'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetSearchStoresQuery } from '@/components/units/Search/hooks/useGetSearchStoresQuery';
import NoSearchResult from '@/components/units/Search/client/NoSearchResult';
import Loading from '@/components/commons/Loading';
import StoreCard from '@/domains/store/components/StoreCard';

interface SearchStoresProps {
  searchParams: { query?: string };
}

const SearchStores = ({ searchParams: { query } }: SearchStoresProps) => {
  const { stores, itemCount, isLoading, fetchNextPage, isFetchingNextPage } =
    useGetSearchStoresQuery({ keyword: query || '' });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) return <Loading />;

  return (
    <div className="w-full">
      {stores && itemCount > 0 ? (
        <>
          {stores.map(({ profile, storeId, storeName, isWished, introduce }) => (
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

export default SearchStores;
