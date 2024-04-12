import useModal from '@/shared/hooks/useModal';
import useToast from '@/shared/hooks/useToast';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import ToastPop from '@/components/commons/ToastPop';
import { revalidateTag } from '@/shared/actions/revalidate';
import { REAVALIDATE_TAG } from '@/shared/constants/revalidateTags';
import WishFolderSelectModal from '../components/alert-box/WishFolderSelectModal';

const useAddWishMutation = () => {
  const { openToast } = useToast();
  const { openModal } = useModal();

  const mutationFn = async ({ productId, folderId }: { productId: string; folderId: string }) => {
    const res = await fetchExtend.post(`/boards/${productId}/wish`, {
      body: JSON.stringify({ folderId })
    });

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
    const openFolderSelectModal = () => openModal(<WishFolderSelectModal />);
    await revalidateTag(REAVALIDATE_TAG.product);
    openToast(
      <ToastPop>
        <div>💖 찜한 상품에 추가했어요</div>
        <button type="button" className="hover:underline" onClick={openFolderSelectModal}>
          편집
        </button>
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

export default useAddWishMutation;
