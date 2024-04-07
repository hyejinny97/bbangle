import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { IFilterType } from '@/domains/product/types/filterType';
import { IAllProductsType } from '@/domains/search/types';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';
import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';

interface QueryHookProps {
  keyword: string;
  filterValue: IFilterType;
}

export const useGetSearchProductsQuery = ({ keyword, filterValue }: QueryHookProps) => {
  const queryKey = [QUERY_KEY.product, QUERY_KEY.search, { filter: filterValue, keyword }];

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

    const queryString = transformFilterValueToQueryString(filterValue);
    const res = await fetchExtend.get(
      `/search/boards?keyword=${keyword}&${queryString}&page=${pageParam}`
    );
    if (!res.ok) throw new Error('검색 결과 상품 조회 실패');

    const data: IAllProductsType = await res.json();
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllProductsType> = (
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
    staleTime: Infinity,
    select: ({ pages }) => {
      const products = pages.map(page => page.content).flat();
      const itemCount = pages[0]?.itemAllCount || 0;
      return { products, itemCount };
    }
  });
};
