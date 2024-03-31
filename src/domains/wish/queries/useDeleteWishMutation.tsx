import useToast from '@/commons/hooks/useToast';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import ToastPop from '@/components/commons/ToastPop';

const useDeleteWishMutation = () => {
  const { openToast } = useToast();

  const mutationFn = async ({ productId, folderId }: { productId: string; folderId: string }) => {
    const res = await fetchExtend.delete(`/boards/${productId}/wish`, {
      body: JSON.stringify({ folderId })
    });

    const contentType = res.headers.get('Content-Type');
    if (!res.ok && contentType && contentType.includes('application/json')) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }
    if (!res.ok) {
      throw new Error('찜 삭제 실패');
    }
  };

  const onSuccess = () => {
    openToast(
      <ToastPop>
        <div>💖 찜 해제 되었어요</div>
      </ToastPop>
    );
  };

  const onError = (error: Error) => {
    console.log(error.message);
    openToast(
      <ToastPop>
        <div>{error.message}</div>
      </ToastPop>
    );
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useDeleteWishMutation;
