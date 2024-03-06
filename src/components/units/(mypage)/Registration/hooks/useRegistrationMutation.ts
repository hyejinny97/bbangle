import { useMutation } from '@tanstack/react-query';
import * as API from '@/api';
import { RegistrationRequest } from '../types';
import { useRouter } from 'next/navigation';

const useRegistrationMutation = () => {
  const { push } = useRouter();

  const mutationFn = (data: RegistrationRequest) => {
    const { profileImg, ...rest } = data;
    const formData = new FormData();
    profileImg && formData.append('profileImg', profileImg);
    formData.append('additionalInfo', JSON.stringify(rest));
    return API.formPut<null, FormData>('/members/additional-information', formData);
  };

  const onSuccess = () => {
    push('/');
  };

  const onError = () => {
    // Todo. tosat
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useRegistrationMutation;
