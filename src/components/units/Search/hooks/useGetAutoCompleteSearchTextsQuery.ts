import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';

type AutoCompleteSearchTextsType = Array<string>;

const getAutoCompleteSearchTexts = async (
  keyword: string
): Promise<AutoCompleteSearchTextsType> => {
  if (!keyword) return [];
  const data = await API.get<{ content: AutoCompleteSearchTextsType }>(
    `/search/auto-keyword?keyword=${keyword}`
  );

  return data.content;
};

export const useGetAutoCompleteSearchTextsQuery = (keyword: string) => {
  return useQuery({
    queryKey: ['autoCompleteSearchTexts', keyword],
    queryFn: () => getAutoCompleteSearchTexts(keyword),
    refetchOnMount: false
  });
};
