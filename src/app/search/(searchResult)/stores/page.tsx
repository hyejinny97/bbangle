'use client';

import { useRecoilValue } from 'recoil';
import { filterValueState } from '@/atoms/atom';
import { useGetSearchResultQuery } from '@/components/units/Search/hooks/useGetSearchResultQuery';
import StoreCard from '@/components/units/(main)/Stores/client/StoreCard';
import NoSearchResult from '@/components/units/Search/client/NoSearchResult';

interface SearchStoresProps {
  searchParams: { query?: string };
}

const SearchStores = ({ searchParams: { query } }: SearchStoresProps) => {
  const filterValue = useRecoilValue(filterValueState);
  const { data } = useGetSearchResultQuery({ keyword: query || '', filterValue });

  return (
    <div className="w-full">
      {data && data.stores.length > 0 ? (
        data.stores.map(store => <StoreCard key={store.storeId} data={store} />)
      ) : (
        <NoSearchResult />
      )}
    </div>
  );
};

export default SearchStores;
