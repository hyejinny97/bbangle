import API from '@/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IAllStoreType } from '@/commons/types/allstoreType';

interface GetSearchStoresProps {
  keyword: string;
  pageParam: number;
}

interface UseGetSearchStoresQueryProps {
  keyword: string;
}

const getSearchStores = async ({
  keyword,
  pageParam
}: GetSearchStoresProps): Promise<IAllStoreType> => {
  // if (!keyword)
  //   return { content: [], itemCount: 0, pageNumber: 0, pageSize: 0, existNextPage: false };

  const data = await API.get<IAllStoreType>(`/search/stores?keyword=${keyword}&page=${pageParam}`);
  return data;
};

export const useGetSearchStoresQuery = ({ keyword }: UseGetSearchStoresQueryProps) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['searchStores', keyword],
    queryFn: ({ pageParam }: { pageParam: number }) => getSearchStores({ keyword, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.existNextPage ? lastPageParam + 1 : undefined;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  const stores = data?.pages.map(page => page.content).flat();
  const itemCount = data?.pages[0]?.itemCount || 0;

  return { stores, itemCount, ...rest };
};
