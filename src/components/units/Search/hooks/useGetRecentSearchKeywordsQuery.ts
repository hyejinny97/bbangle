import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';

type DataType = {
    keywordId: string;
    keyword: string;
};
type RecentSearchKeywordsType = Array<DataType>;

const isLoggedIn = true; // 일단 로그인했다고 가정

const getRecentSearchKeywords = async (): Promise<RecentSearchKeywordsType> => {
    try {
        if (!isLoggedIn) return [];
        const response = await API.get<{ data: { content: RecentSearchKeywordsType } }>(
            '/search/recency'
        );

        return response.data.content;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const useGetRecentSearchKeywordsQuery = () => {
    return useQuery<RecentSearchKeywordsType, Error>({
        queryKey: ['recentSearchKeywords'],
        queryFn: getRecentSearchKeywords
    });
};
