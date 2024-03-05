'use client';

import { useGetSearchStoresQuery } from '@/components/units/Search/hooks/useGetSearchStoresQuery';
import StoreCard from '@/components/units/(main)/Stores/client/StoreCard';
import NoSearchResult from '@/components/units/Search/client/NoSearchResult';

interface SearchStoresProps {
  searchParams: { query?: string };
}

const SearchStores = ({ searchParams: { query } }: SearchStoresProps) => {
  const { data } = useGetSearchStoresQuery({ keyword: query || '' });

  return (
    <div className="w-full">
      {data && data.itemCount > 0 ? (
        data.content.map(store => <StoreCard key={store.storeId} data={store} />)
      ) : (
        <NoSearchResult />
      )}
    </div>
  );
};

export default SearchStores;
