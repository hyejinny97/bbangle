import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';
import PATH from '@/shared/constants/path';
import { revalidateTag } from '@/shared/actions/revalidate';
import { MyProfileUpdateRequest } from '../types/profile';

const useProfileUpdateMutation = () => {
  const { push } = useRouter();
  const { openToast } = useToast();

  const mutationFn = async ({ profileImg, ...rest }: MyProfileUpdateRequest) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(rest);
    const blobData = new Blob([jsonData], { type: 'application/json' });
    formData.append('infoUpdateRequest', blobData);
    if (profileImg) {
      formData.append('profileImg', profileImg);
    }

    const res = await fetchExtend.formPut('/profile', { body: formData });
    if (!res.ok) throw new Error('프로필 업데이트 실패');
  };

  const onSuccess = async () => {
    await revalidateTag(QUERY_KEY.profile);
    openToast(
      <ToastPop>
        <div>프로필 수정이 완료되었어요.</div>
      </ToastPop>
    );

    push(PATH.mypage);
  };

  const onError = (e: Error) => {
    const message = e.message || '알 수 없는 이유로 수정에 실패했어요.';

    openToast(
      <ToastPop>
        <div>{message}</div>
      </ToastPop>
    );
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useProfileUpdateMutation;
