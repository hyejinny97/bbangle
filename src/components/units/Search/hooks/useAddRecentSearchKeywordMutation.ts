import * as API from '@/api';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const addRecentSearchKeyword = async (keyword: string) => {
  try {
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
