import { useQuery } from '@tanstack/react-query';
import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';

interface AutoCompleteResultType {
  content: Array<string>;
}

export const useGetAutoCompleteSearchTextsQuery = (keyword: string) => {
  const queryKey = [QUERY_KEY.search, QUERY_KEY.autoComplete, { keyword }];

  const queryFn = async () => {
    if (!keyword) return [];

    const res = await fetchExtend.get(`/search/auto-keyword?keyword=${keyword}`);
    if (!res.ok) throw new Error('자동 완성 검색어 조회 실패');

    const data: AutoCompleteResultType = await res.json();
    return data.content;
  };

  return useQuery({
    queryKey,
    queryFn,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity
  });
};
