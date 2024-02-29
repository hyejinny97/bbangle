import { useMutation } from '@tanstack/react-query';
import * as API from '@/api';
import { NicknameDoubleCheckResponse } from '../Update/types';

const useNicknameDoubleCheckMutation = () => {
  const mutationFn = (nickname: string) =>
    API.post<NicknameDoubleCheckResponse, null>(`/profile/doublecheck?nickname=${nickname}`, null);

  return useMutation({
    mutationFn
    // onSuccess,
    // onError
  });
};

export default useNicknameDoubleCheckMutation;
