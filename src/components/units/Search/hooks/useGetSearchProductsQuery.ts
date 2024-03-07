import * as API from '@/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IFilterType } from '@/components/units/(main)/Products/types';
import { IAllProductsType } from '@/commons/types/allProductsType';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';

interface GetSearchProductsProps {
  keyword: string;
  filterValue: IFilterType;
  pageParam: number;
}

interface UseGetSearchProductsQueryProps {
  keyword: string;
  filterValue: IFilterType;
}

const getSearchProducts = async ({
  keyword,
  filterValue,
  pageParam
}: GetSearchProductsProps): Promise<IAllProductsType> => {
  const queryString = transformFilterValueToQueryString(filterValue);
  const res = await API.get(`/search/boards?keyword=${keyword}&${queryString}&page=${pageParam}`);
  const data: IAllProductsType = await res.json();
  return data;
};

export const useGetSearchProductsQuery = ({
  keyword,
  filterValue
}: UseGetSearchProductsQueryProps) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['searchProducts', keyword, filterValue],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getSearchProducts({ keyword, filterValue, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.existNextPage ? lastPageParam + 1 : undefined;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });

  const products = data?.pages.map(page => page.content).flat();
  const itemCount = data?.pages[0]?.itemCount || 0;

  return { products, itemCount, ...rest };
};
