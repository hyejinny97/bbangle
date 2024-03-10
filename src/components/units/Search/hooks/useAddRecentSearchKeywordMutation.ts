import API from '@/api';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const addRecentSearchKeyword = async (keyword: string) => {
  const data = await API.post(`/search?keyword=${keyword}`);
  return data;
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
