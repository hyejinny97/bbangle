import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ErrorResponse } from '@/commons/types/errorType';
import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import fetchExtend from '@/shared/utils/api';
import PATH from '@/shared/constants/path';
import QUERY_KEY from '@/shared/constants/queryKey';
import { revalidateTag } from '@/shared/actions/revalidate';
import { RegistrationRequest } from '../types/profile';

const useRegistrationMutation = () => {
  const { openToast } = useToast();
  const { push } = useRouter();

  const mutationFn = async ({ profileImg, ...rest }: RegistrationRequest) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(rest);
    const blobData = new Blob([jsonData], { type: 'application/json' });
    formData.append('additionalInfo', blobData);
    if (profileImg) {
      formData.append('profileImg', profileImg);
    }

    const res = await fetchExtend.formPut('/members/additional-information', { body: formData });
    if (!res.ok) throw Error('회원 등록 실패');
  };

  const onSuccess = async () => {
    await revalidateTag(QUERY_KEY.profile);
    openToast(
      <ToastPop>
        <div>프로필 등록이 완료되었어요.</div>
      </ToastPop>
    );
    push(PATH.home);
  };

  const onError = (e: ErrorResponse) => {
    const message = e.message || '알 수 없는 이유로 등록에 실패했어요.';

    openToast(
      <ToastPop>
        <div>{message}</div>
      </ToastPop>
    );
  };
  return useMutation({ mutationFn, onSuccess, onError });
};

export default useRegistrationMutation;
