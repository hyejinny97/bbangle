import { IAllProductsType } from '@/domains/product/types/allProductsType';
import { IFilterType } from '@/domains/product/types/filterType';
import { transformFilterValueToQueryString } from '@/domains/product/utils/transformFilterValueToQueryString';
import QUERY_KEY from '@/shared/constants/queryKey';
import { ResultResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';

export const useGetAllProductsQuery = (query: IFilterType) => {
  const queryKey = [QUERY_KEY.product, QUERY_KEY.main, { query }];

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const firstPage = cursorId === -1;
    const cursorIdQueryString = firstPage ? '' : `&targetId=${cursorId}`;
    const cursorScoreQueryString = firstPage ? '' : `&targetScore=0.0`;
    const filterValueQueryString = transformFilterValueToQueryString(query);

    const res = await fetchExtend.get(
      `/boards?${filterValueQueryString}${cursorIdQueryString}${cursorScoreQueryString}`
    );
    if (!res.ok) throw new Error('전체 상품 조회 실패');

    const data: ResultResponse<IAllProductsType> = await res.json();
    return data.result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllProductsType> = (lastPage) => {
    if (!lastPage.hasNext) return undefined;
    return lastPage.nextCursor;
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
      const products = pages.map((page) => page.content).flat();
      const productCount = pages[0]?.boardCount || 0;
      const storeCount = pages[0]?.storeCount || 0;
      return { products, productCount, storeCount };
    }
  });
};
