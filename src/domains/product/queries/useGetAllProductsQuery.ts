import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import QUERY_KEY from '@/shared/constants/queryKey';
import { IFilterType } from '@/domains/product/types/filterType';
import { IAllProductsType } from '@/domains/product/types/allProductsType';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';
import fetchExtend from '@/shared/utils/api';

export const useGetAllProductsQuery = (query: IFilterType) => {
  const queryKey = [QUERY_KEY.mainProducts, query];

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const firstPage = cursorId === -1;
    const cursorIdQueryString = firstPage ? '' : `&cursorId=${cursorId}`;
    const filterValueQueryString = transformFilterValueToQueryString(query);

    const res = await fetchExtend.get(`/boards?${filterValueQueryString}${cursorIdQueryString}`);
    if (!res.ok) throw new Error('전체 상품 조회 실패');

    const data: IAllProductsType = await res.json();
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllProductsType> = lastPage => {
    if (!lastPage.hasNext) return;
    const nextCursorId = lastPage.content.at(-1)?.boardId;
    return nextCursorId;
  };

  const { data, ...rest } = useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: -1,
    getNextPageParam,
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
