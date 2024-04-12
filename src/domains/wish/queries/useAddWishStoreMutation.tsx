import useToast from '@/shared/hooks/useToast';
import fetchExtend from '@/shared/utils/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ToastPop from '@/shared/components/ToastPop';
import QUERY_KEY from '@/shared/constants/queryKey';

const useAddWishStoreMutation = () => {
  const { openToast } = useToast();
  const queryClient = useQueryClient();

  const mutationFn = async ({ storeId }: { storeId: string }) => {
    const res = await fetchExtend.post(`/likes/store/${storeId}`);

    const contentType = res.headers.get('Content-Type');
    if (!res.ok && contentType && contentType.includes('application/json')) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }
    if (!res.ok) {
      throw new Error('찜 실패');
    }
  };

  const onSuccess = async () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.store] });

    openToast(
      <ToastPop>
        <div>💖 찜한 스토어에 추가했어요</div>
      </ToastPop>
    );
  };

  const onError = (error: Error) => {
    openToast(
      <ToastPop>
        <div>{error.message}</div>
      </ToastPop>
    );
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useAddWishStoreMutation;
