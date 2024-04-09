import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { IAllStoreType } from '@/domains/search/types';
import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';

interface QueryHookProps {
  keyword: string;
}

export const useGetSearchStoresQuery = ({ keyword }: QueryHookProps) => {
  const queryKey = [QUERY_KEY.store, QUERY_KEY.search, { keyword }];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    if (!keyword)
      return {
        content: [],
        itemAllCount: 0,
        limitItemCount: 0,
        currentItemCount: 0,
        pageNumber: 0,
        existNextPage: false
      };

    const res = await fetchExtend.get(`/search/stores?keyword=${keyword}&page=${pageParam}`);
    if (!res.ok) throw new Error('검색 결과 스토어 조회 실패');

    const data: IAllStoreType = await res.json();
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllStoreType> = (
    lastPage,
    __,
    lastPageParam
  ) => {
    const nextPageParam = lastPage.existNextPage ? lastPageParam + 1 : undefined;
    return nextPageParam;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    select: ({ pages }) => {
      const stores = pages.map((page) => page.content).flat();
      const itemCount = pages[0]?.itemAllCount || 0;
      return { stores, itemCount };
    }
  });
};
