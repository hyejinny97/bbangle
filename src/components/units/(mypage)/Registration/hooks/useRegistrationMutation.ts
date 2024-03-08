import { useMutation } from '@tanstack/react-query';
import * as API from '@/api';
import { RegistrationRequest } from '../types';
import { useRouter } from 'next/navigation';
import { revalidateTag } from '@/action';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';
import { ErrorResponse } from '@/commons/types/errorType';

const useRegistrationMutation = () => {
  const { push } = useRouter();

  const mutationFn = ({ profileImg, ...rest }: RegistrationRequest) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(rest);
    const blobData = new Blob([jsonData], { type: 'application/json' });
    formData.append('additionalInfo', blobData);
    if (profileImg) {
      formData.append('profileImage', profileImg);
    }
    return API.formPut('/members/additional-information', { body: formData });
  };

  const onSuccess = () => {
    // Todo. toast popup
    revalidateTag(REAVALIDATE_TAG.profile);
    push('/');
  };

  const onError = (e: ErrorResponse) => {
    // Todo. toast popup 임시로 alert 처리
    alert(e.message);
  };
  return useMutation({ mutationFn, onSuccess, onError });
};

export default useRegistrationMutation;
