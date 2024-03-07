import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';

type AutoCompleteSearchTextsType = Array<string>;

const getAutoCompleteSearchTexts = async (
  keyword: string
): Promise<AutoCompleteSearchTextsType> => {
  if (!keyword) return [];
  const res = await API.get(`/search/auto-keyword?keyword=${keyword}`);
  const data: { content: AutoCompleteSearchTextsType } = await res.json();
  return data.content;
};

export const useGetAutoCompleteSearchTextsQuery = (keyword: string) => {
  return useQuery({
    queryKey: ['autoCompleteSearchTexts', keyword],
    queryFn: () => getAutoCompleteSearchTexts(keyword),
    refetchOnMount: false
  });
};
