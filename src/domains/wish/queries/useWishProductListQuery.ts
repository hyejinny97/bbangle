import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';
import { WishProductsDetail } from '../types/wishFolder';
import { useParams } from 'next/navigation';

const useGetProductListQuery = () => {
  const { folderId } = useParams<{ folderId: string }>();

  const queryKey = [QUERY_KEY.wishProducts, folderId];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetchExtend.get(`/boards/folders/${folderId}?page=${pageParam}`);
    if (!res.ok) throw new Error('위시 폴더 상세 조회 오류');
    const data: WishProductsDetail = await res.json();
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, WishProductsDetail> = (
    lastPage,
    _,
    lastPageParam
  ) => {
    return lastPage.last ? undefined : lastPageParam + 1;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
    select: ({ pages }) => {
      return pages.map(({ content }) => content).flat();
    }
  });
};

export default useGetProductListQuery;
