import { useInfiniteQuery } from '@tanstack/react-query';
import { IFilterType } from '@/domains/product/types/filterType';
import { getAllProducts } from './getAllProducts';

export const useGetAllProductsQuery = (query: IFilterType) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['products', query],
    queryFn: ({ pageParam: cursorId }: { pageParam: number }) =>
      getAllProducts({ query, cursorId }),
    initialPageParam: -1,
    getNextPageParam: lastPage => {
      if (!lastPage.hasNext) return;
      const nextCursorId = lastPage.content.at(-1)?.boardId;
      return nextCursorId;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });

  const products = data?.pages.map(page => page.content).flat();
  const productCount = data?.pages[0]?.boardCnt || 0;
  const storeCount = data?.pages[0]?.storeCnt || 0;

  return { products, productCount, storeCount, ...rest };
};
