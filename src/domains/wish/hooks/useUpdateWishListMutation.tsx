import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import { revalidatePath } from '@/shared/actions';
import { useMutation } from '@tanstack/react-query';

const useUpdateWishListMutation = () => {
  const { openToast } = useToast();

  const mutationFn = async ({ folderId, title }: { folderId: number; title: string }) => {
    const res = await fetch(`/wishLists/${folderId}`, {
      method: 'POST',
      body: JSON.stringify(title)
    });
    if (!res.ok) throw new Error('찜 폴더 업데이트 실패');
    const data = res.json();
    return data;
  };

  const onSuccess = async () => {
    openToast(<ToastPop>폴더 명이 수정되었어요.</ToastPop>);
    await revalidatePath('/wishlist/list/products');
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
