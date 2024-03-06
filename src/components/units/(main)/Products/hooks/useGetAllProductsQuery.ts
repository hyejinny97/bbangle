import { useInfiniteQuery } from '@tanstack/react-query';
import { ProductsQueryType } from '@/commons/types/allProductsType';
import { getAllProducts } from '../api/getAllProducts';

export const useGetAllProductsQuery = (query: ProductsQueryType) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['products', query],
    queryFn: ({ pageParam }: { pageParam: number }) => getAllProducts({ query, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.last ? undefined : lastPageParam + 1;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  const products = data?.pages.map(page => page.content).flat();

  return { products, ...rest };
};
