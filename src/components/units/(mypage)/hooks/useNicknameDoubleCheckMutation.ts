import { useMutation } from '@tanstack/react-query';
import * as API from '@/api';
import { NicknameDoubleCheckResponse } from '../Update/types';

const useNicknameDoubleCheckMutation = () => {
  const mutationFn = async (nickname: string) => {
    const res = await API.post(`/profile/doublecheck?nickname=${nickname}`);
    const data: NicknameDoubleCheckResponse = await res.json();
    return data;
  };

  return useMutation({
    mutationFn
    // onSuccess,
    // onError
  });
};

export default useNicknameDoubleCheckMutation;
