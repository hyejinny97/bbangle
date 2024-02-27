import { useMutation } from '@tanstack/react-query';
import * as API from '@/api';
import { NicknameDoubleCheckResponse } from '../MyPageUpdate/types';
import { AxiosError } from 'axios';

const useNicknameDoubleCheckMutation = () => {
  const mutationFn = (nickname: string) =>
    API.post<NicknameDoubleCheckResponse, null>(`/profile/doublecheck?nickname=${nickname}`, null);

  const onSuccess = data => {
    console.log(data);
  };

  const onError = (error: AxiosError<NicknameDoubleCheckResponse>) => {
    console.log(error.response?.data);
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useNicknameDoubleCheckMutation;
