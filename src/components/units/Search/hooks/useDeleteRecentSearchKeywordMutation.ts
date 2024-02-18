import * as API from '@/api';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const isLoggedIn = true; // 일단 로그인했다고 가정

const deleteRecentSearchKeyword = async (keywordId: string) => {
    try {
        if (!isLoggedIn) return;
        await API.delete(`/search/recency/${keywordId}`);
    } catch (error) {
        console.error(error);
    }
};

export const useDeleteRecentSearchKeywordMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteRecentSearchKeyword,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['recentSearchKeywords'] });
        }
    });
};
