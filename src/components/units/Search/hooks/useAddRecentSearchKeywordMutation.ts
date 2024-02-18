import * as API from '@/api';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const isLoggedIn = true; // 일단 로그인했다고 가정

const addRecentSearchKeyword = async (keyword: string) => {
    try {
        if (!isLoggedIn) return;
        await API.post(`/search?keyword=${keyword}`, keyword);
    } catch (error) {
        console.error(error);
    }
};

export const useAddRecentSearchKeywordMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addRecentSearchKeyword,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['recentSearchKeywords'] });
        }
    });
};
