import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import { useMutation } from '@tanstack/react-query';

const useAddWishListMutation = () => {
  const { openToast } = useToast();
  const mutationFn = async (title: string) => {
    const res = await fetch('/wishLists', {
      method: 'POST',
      body: JSON.stringify({ title })
    });
    if (!res.ok) throw new Error('찜 폴더 추가 실패');
  };

  const onSuccess = () => {
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

export default useAddWishListMutation;
