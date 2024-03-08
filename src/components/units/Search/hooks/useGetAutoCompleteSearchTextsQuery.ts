import { useQuery } from '@tanstack/react-query';
import API from '@/api';

type AutoCompleteSearchTextsType = Array<string>;

const getAutoCompleteSearchTexts = async (
  keyword: string
): Promise<AutoCompleteSearchTextsType> => {
  if (!keyword) return [];
  const data: { content: AutoCompleteSearchTextsType } = await API.get(
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
