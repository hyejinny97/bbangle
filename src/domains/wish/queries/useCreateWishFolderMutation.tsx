import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import { revalidatePath } from '@/shared/actions';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';

const useCreateWishListMutation = () => {
  const { openToast } = useToast();
  const mutationFn = async (title: string) => {
    const res = await fetchExtend.post('/wishLists', {
      body: JSON.stringify({ title })
    });
    if (!res.ok) throw new Error('찜 폴더 추가 실패');
  };

  const onSuccess = () => {
    revalidatePath('./');
    openToast(<ToastPop>찜 폴더가 추가되었습니다.</ToastPop>);
  };

  const onError = () => {
    openToast(<ToastPop>오류가 발생했습니다.</ToastPop>);
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useCreateWishListMutation;
