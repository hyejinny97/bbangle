import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';

type DataType = {
  keyword: string;
};
export type RecentSearchKeywordsType = Array<DataType>;

// const isLoggedIn = true; // 일단 로그인했다고 가정

const getRecentSearchKeywords = async (): Promise<RecentSearchKeywordsType> => {
  // if (!isLoggedIn) return [];
  const res = await API.get('/search/recency');
  const data: { content: RecentSearchKeywordsType } = await res.json();
  return data.content;
};

export const useGetRecentSearchKeywordsQuery = () => {
  return useQuery<RecentSearchKeywordsType, Error>({
    queryKey: ['recentSearchKeywords'],
    queryFn: getRecentSearchKeywords
  });
};
