import { useMutation } from '@tanstack/react-query';
import { addWishStore } from '../api/addWishStore';
import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import { revalidateTag } from '@/action';

export const useAddWishStoreMutation = () => {
  const { openToast } = useToast();

  const onSuccess = () => {
    openToast(
      <ToastPop>
        <div>💖 스토어가 찜 목록에 추가 되었습니다.</div>
      </ToastPop>
    );
    revalidateTag('storeWish');
  };

  return useMutation({
    mutationKey: ['wishStoreAdd'],
    mutationFn: addWishStore,
    onSuccess
  });
};
