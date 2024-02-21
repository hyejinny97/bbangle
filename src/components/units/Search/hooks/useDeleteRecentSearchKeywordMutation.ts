import * as API from '@/api';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import type { RecentSearchKeywordsType } from '@/components/units/Search/hooks/useGetRecentSearchKeywordsQuery';

const isLoggedIn = true; // 일단 로그인했다고 가정

const deleteRecentSearchKeyword = async (keyword: string) => {
    try {
        if (!isLoggedIn) return;
        await API.delete(`/search/recency?keyword=${keyword}`);
    } catch (error) {
        console.error(error);
    }
};

export const useDeleteRecentSearchKeywordMutation = () => {
    const queryClient = useQueryClient();
    const queryKey = ['recentSearchKeywords'];

    return useMutation({
        mutationFn: deleteRecentSearchKeyword,
        onMutate: async (keywordToDelete: string) => {
            await queryClient.cancelQueries({ queryKey });
            const previousKeywords = queryClient.getQueryData(queryKey);
            queryClient.setQueryData(queryKey, (oldKeywords: RecentSearchKeywordsType) =>
                oldKeywords.filter(item => item.keyword !== keywordToDelete)
            );

            return { previousKeywords };
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey });
        },
        onError: (_, __, context) => {
            queryClient.setQueryData(queryKey, context?.previousKeywords);
        }
    });
};
