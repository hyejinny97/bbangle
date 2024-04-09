import { useQueryClient, useMutation } from '@tanstack/react-query';
import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';

export const useAddRecentSearchKeywordMutation = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (keyword: string) => {
    const res = await fetchExtend.post(`/search?keyword=${keyword}`);
    if (!res.ok) throw new Error('최근 검색어 저장 실패');
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.search, QUERY_KEY.keyword] });
  };

  const onError = (error: Error) => {
    console.error(error.message);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};
