import { useMutation } from '@tanstack/react-query';

import * as API from '@/api';
import { MyProfileUpdateRequest } from '../types';
import { revalidateTag } from '@/action';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@/commons/types/errorResponse';
import { useRouter } from 'next/navigation';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';

const useProfileUpdateMutation = () => {
  const { push } = useRouter();

  const mutationFn = ({ profileImg, ...rest }: MyProfileUpdateRequest) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(rest);
    const blobData = new Blob([jsonData], { type: 'application/json' });
    formData.append('infoUpdateRequest', blobData);
    if (profileImg) {
      formData.append('profileImg', profileImg);
    }
    return API.formPut<null, FormData>('/profile', formData);
  };

  const onSuccess = async () => {
    await revalidateTag(REAVALIDATE_TAG.profile);
    push('/mypage');
  };

  const onError = (e: AxiosError<ErrorResponse>) => {
    // Todo. toast popup 임시로 alert 처리

    alert(e.response?.data.message);
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useProfileUpdateMutation;
