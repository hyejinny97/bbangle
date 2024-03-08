import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';

type DataType = {
  keyword: string;
};
export type RecentSearchKeywordsType = Array<DataType>;

// const isLoggedIn = true; // 일단 로그인했다고 가정

const getRecentSearchKeywords = async (): Promise<RecentSearchKeywordsType> => {
  // if (!isLoggedIn) return [];
  const data = await API.get<{ content: RecentSearchKeywordsType }>('/search/recency');
  return data.content;
};

export const useGetRecentSearchKeywordsQuery = () => {
  return useQuery<RecentSearchKeywordsType, Error>({
    queryKey: ['recentSearchKeywords'],
    queryFn: getRecentSearchKeywords
  });
};
