import { useMutation } from '@tanstack/react-query';

import * as API from '@/api';
import { MyProfileUpdateRequest } from '../types';
import { revalidateTag } from '@/action';

const useProfileUpdateMutation = () => {
  const mutationFn = ({ profileImg, ...rest }: MyProfileUpdateRequest) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(rest);
    formData.append('infoUpdateRequest', new Blob([jsonData], { type: 'application/json' }));
    if (profileImg) formData.append('profileImg', profileImg);
    return API.formPut<null, FormData>('/profile', formData);
  };

  const onSuccess = () => {
    revalidateTag('profile');
  };

  const onError = () => {
    // Todo. toast popup
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useProfileUpdateMutation;
