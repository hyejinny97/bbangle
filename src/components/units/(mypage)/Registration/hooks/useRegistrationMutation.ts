import { useMutation } from '@tanstack/react-query';
import * as API from '@/api';
import { RegistrationRequest } from '../types';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@/commons/types/errorResponse';
import { revalidateTag } from '@/action';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';

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
    return API.formPut<null, FormData>('/members/additional-information', formData);
  };

  const onSuccess = () => {
    // Todo. toast popup
    revalidateTag(REAVALIDATE_TAG.profile);
    push('/');
  };

  const onError = (e: AxiosError<ErrorResponse>) => {
    // Todo. toast popup 임시로 alert 처리
    alert(e.response?.data.message);
  };
  return useMutation({ mutationFn, onSuccess, onError });
};

export default useRegistrationMutation;
