import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import { revalidatePath } from '@/shared/actions';
import PATH from '@/shared/constants/path';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';

const useUpdateWishListMutation = () => {
  const { openToast } = useToast();

  const mutationFn = async ({ folderId, title }: { folderId: number; title: string }) => {
    const res = await fetchExtend.patch(`/wishLists/${folderId}`, {
      body: JSON.stringify({ title })
    });
    if (!res.ok) {
      throw new Error('찜 폴더 업데이트 실패');
    }
  };

  const onSuccess = async () => {
    await revalidatePath(PATH.wishProductList);
    openToast(<ToastPop>폴더 명이 수정되었어요.</ToastPop>);
  };

  const onError = () => {
    openToast(<ToastPop>폴더 명이 수정 중 에러가 발생했어요.</ToastPop>);
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useUpdateWishListMutation;
