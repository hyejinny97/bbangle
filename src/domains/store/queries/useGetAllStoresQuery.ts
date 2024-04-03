import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllStores } from './getAllStores';
import QUERY_KEY from '@/shared/constants/queryKey';

export const useGetAllStoresQuery = () => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: [QUERY_KEY.store],
    queryFn: ({ pageParam }: { pageParam: number }) => getAllStores({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.last ? undefined : lastPageParam + 1;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  const stores = data?.pages.map(page => page.content).flat();

  return { stores, ...rest };
};
