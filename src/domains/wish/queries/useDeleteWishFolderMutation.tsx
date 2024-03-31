import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import { useMutation } from '@tanstack/react-query';

const useDeleteWishFolderMutation = () => {
  const { openToast } = useToast();

  const mutationFn = async (folderId: number) => {
    const res = await fetch(`/wishLists/${folderId}`, {
      method: 'DELETE'
    });

    if (!res.ok) throw new Error('찜 폴더 삭제 실패');
  };

  const onSuccess = () => {
    openToast(<ToastPop>찜 폴더가 삭제되었습니다.</ToastPop>);
  };

  const onError = (error: Error) => {
    openToast(<ToastPop>{error.message}</ToastPop>);
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useDeleteWishFolderMutation;
