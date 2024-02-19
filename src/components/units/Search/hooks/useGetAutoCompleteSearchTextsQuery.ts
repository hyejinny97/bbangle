import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';

type AutoCompleteSearchTextsType = Array<string>;

const getAutoCompleteSearchTexts = async (
    keyword: string
): Promise<AutoCompleteSearchTextsType> => {
    try {
        if (!keyword) return [];
        const response = await API.get<{ data: { content: AutoCompleteSearchTextsType } }>(
            `/search/auto-keyword?keyword=${keyword}`
        );

        return response.data.content;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const useGetAutoCompleteSearchTextsQuery = (keyword: string) => {
    return useQuery({
        queryKey: ['autoCompleteSearchTexts', keyword],
        queryFn: () => getAutoCompleteSearchTexts(keyword)
    });
};
