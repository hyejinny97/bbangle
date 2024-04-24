import { IAllProductsType } from '@/domains/product/types/allProductsType';
import { IFilterType } from '@/domains/product/types/filterType';
import { transformFilterValueToQueryString } from '@/domains/product/utils/transformFilterValueToQueryString';
import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import {
  GetNextPageParamFunction,
  useInfiniteQuery
} from '@tanstack/react-query';

export const useGetAllProductsQuery = (query: IFilterType) => {
  const queryKey = [QUERY_KEY.product, QUERY_KEY.main, { query }];

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const firstPage = cursorId === -1;
    const cursorIdQueryString = firstPage ? '' : `&cursorId=${cursorId}`;
    const filterValueQueryString = transformFilterValueToQueryString(query);

    const res = await fetchExtend.get(
      `/boards?${filterValueQueryString}${cursorIdQueryString}`
    );
    if (!res.ok) throw new Error('전체 상품 조회 실패');

    const data: IAllProductsType = await res.json();
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllProductsType> = (
    lastPage
  ) => {
    if (!lastPage.result.hasNext) return undefined;
    const nextCursorId = lastPage.result.content.at(-1)?.boardId;
    return nextCursorId;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: -1,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: ({ pages }) => {
      const products = pages.map((page) => page.result.content).flat();
      const productCount = pages[0]?.result.boardCount || 0;
      const storeCount = pages[0]?.result.storeCount || 0;
      return { products, productCount, storeCount };
    }
  });
};
