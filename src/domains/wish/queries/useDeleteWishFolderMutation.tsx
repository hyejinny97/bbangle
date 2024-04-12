import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import { revalidatePath } from '@/shared/actions/revalidate';
import PATH from '@/shared/constants/path';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';

const useDeleteWishFolderMutation = () => {
  const { openToast } = useToast();

  const mutationFn = async (folderId: number) => {
    const res = await fetchExtend.delete(`/wishLists/${folderId}`, {
      method: 'DELETE'
    });

    if (!res.ok) throw new Error('찜 폴더 삭제 실패');
  };

  const onSuccess = async () => {
    await revalidatePath(PATH.wishProductList);
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
