import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import QUERY_KEY from '@/shared/constants/queryKey';
import { IAllStoresType } from '@/domains/store/types/allStoresType';
import fetchExtend from '@/shared/utils/api';

export const useGetAllStoresQuery = () => {
  const queryKey = [QUERY_KEY.mainStores];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetchExtend.get(`/stores?page=${pageParam}`);
    if (!res.ok) throw new Error('전체 스토어 조회 실패');

    const data: IAllStoresType = await res.json();
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllStoresType> = (
    lastPage,
    __,
    lastPageParam
  ) => {
    const nextPageParam = lastPage.last ? undefined : lastPageParam + 1;
    return nextPageParam;
  };

  const { data, ...rest } = useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  const stores = data?.pages.map(page => page.content).flat();

  return { stores, ...rest };
};
