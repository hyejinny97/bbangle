import { useMutation } from '@tanstack/react-query';

import API from '@/api';
import { MyProfileUpdateRequest } from '../types';
import { revalidateTag } from '@/action';
import { useRouter } from 'next/navigation';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';

const useProfileUpdateMutation = () => {
  const { push } = useRouter();

  const mutationFn = async ({ profileImg, ...rest }: MyProfileUpdateRequest) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(rest);
    const blobData = new Blob([jsonData], { type: 'application/json' });
    formData.append('infoUpdateRequest', blobData);
    if (profileImg) {
      formData.append('profileImg', profileImg);
    }
    return API.formPut('/profile', { body: formData });
  };

  const onSuccess = async () => {
    await revalidateTag(REAVALIDATE_TAG.profile);
    push('/mypage');
  };

  const onError = (e: Error) => {
    // Todo. toast popup 임시로 alert 처리

    alert(e.message);
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useProfileUpdateMutation;
