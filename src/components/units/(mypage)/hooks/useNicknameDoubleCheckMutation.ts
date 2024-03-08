import { useMutation } from '@tanstack/react-query';
import * as API from '@/api';
import { NicknameDoubleCheckResponse } from '../Update/types';

const useNicknameDoubleCheckMutation = () => {
  const mutationFn = async (nickname: string) => {
    const data = await API.post<NicknameDoubleCheckResponse>(
      `/profile/doublecheck?nickname=${nickname}`
    );
    return data;
  };

  return useMutation({
    mutationFn
    // onSuccess,
    // onError
  });
};

export default useNicknameDoubleCheckMutation;
