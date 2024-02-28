import { useMutation } from '@tanstack/react-query';
import * as API from '@/api';
import { RegistrationRequest } from '../types';

const useRegistrationMutation = () => {
  const mutationFn = (data: RegistrationRequest) => {
    const { profileImg, ...rest } = data;
    const formData = new FormData();
    formData.append('profileImg', profileImg);
    formData.append('additionalInfo', JSON.stringify(rest));
    return API.formPut<null, FormData>('/api/v1/members/additional-information', formData);
  };

  const onSuccess = () => {
    console.log('success');
  };
  const onError = () => {
    console.log('error');
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useRegistrationMutation;
