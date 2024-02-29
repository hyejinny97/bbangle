import { useMutation } from '@tanstack/react-query';

import * as API from '@/api';
import { MyProfileUpdateRequest } from '../types';

const useProfileUpdateMutation = () => {
  const mutationFn = ({ profileImg, ...rest }: MyProfileUpdateRequest) => {
    const formData = new FormData();
    profileImg && formData.append('profileImg', profileImg);
    formData.append('additionalInfo', JSON.stringify(rest));
    return API.formPut<null, FormData>('/profile', formData);
  };

  return useMutation({
    mutationFn
  });
};

export default useProfileUpdateMutation;
