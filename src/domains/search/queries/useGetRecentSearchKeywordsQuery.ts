import { useQuery } from '@tanstack/react-query';
import { RecentSearchKeywordsType } from '@/domains/search/types';
import { getRecentSearchKeywords } from '@/domains/search/queries/getRecentSearchKeywords';

export const useGetRecentSearchKeywordsQuery = () => {
  return useQuery<RecentSearchKeywordsType, Error>({
    queryKey: ['recentSearchKeywords'],
    queryFn: getRecentSearchKeywords
  });
};
