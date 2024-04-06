import { useQuery } from '@tanstack/react-query';
import { getAutoCompleteSearchTexts } from '@/domains/search/queries/getAutoCompleteSearchTexts';

export const useGetAutoCompleteSearchTextsQuery = (keyword: string) => {
  return useQuery({
    queryKey: ['autoCompleteSearchTexts', keyword],
    queryFn: () => getAutoCompleteSearchTexts(keyword),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  });
};
