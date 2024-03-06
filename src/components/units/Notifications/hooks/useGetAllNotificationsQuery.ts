import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllNotifications } from '@/components/units/Notifications/api/getAllNotifications';

export const useGetAllNotificationsQuery = () => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['notifications'],
    queryFn: ({ pageParam }: { pageParam: number }) => getAllNotifications({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.lastPage === lastPageParam ? undefined : lastPageParam + 1;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  const notifications = data?.pages.map(page => page.contents).flat();

  return { notifications, ...rest };
};
