import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addRecentSearchKeyword } from '@/domains/search/queries/addRecentSearchKeyword';

export const useAddRecentSearchKeywordMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addRecentSearchKeyword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recentSearchKeywords'] });
    }
  });
};
