import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import QUERY_KEY from '@/shared/constants/queryKey';
import { AllNotificationsType } from '@/domains/user/types/notification';
import fetchExtend from '@/shared/utils/api';

const SIZE = 10; // 한 페이지당 보여질 데이터 수

export const useGetAllNotificationsQuery = () => {
  const queryKey = [QUERY_KEY.notification];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetchExtend.get(`/notice?page=${pageParam}&size=${SIZE}&sort=createdAt,DESC`);
    if (!res.ok) throw new Error('공지사항 목록 조회 실패');

    const data: AllNotificationsType = await res.json();
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, AllNotificationsType> = (
    lastPage,
    __,
    lastPageParam
  ) => {
    const nextPageParam = lastPage.lastPage === lastPageParam ? undefined : lastPageParam + 1;
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
      const notifications = pages.map((page) => page.contents).flat();
      return notifications;
    }
  });
};
