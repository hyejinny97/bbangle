import { loginState } from '@/shared/atoms/login';
import API from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import setCookie from '../action/setCookie';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const useLoginMutation = () => {
  const setLogin = useSetRecoilState(loginState);
  const { push } = useRouter();

  const mutationFn = async (accessToken: string) => {
    const res = await API.get(`/oauth/login/kakao?token=${accessToken}`);
    const data: LoginResponse = await res.json();
    if (!res.ok) throw new Error('백엔드 로그인 실패');
    return data;
  };

  const onSuccess = async (data: LoginResponse) => {
    await Promise.all([
      setCookie({
        name: 'accessToken',
        value: data.accessToken
      }),
      setCookie({
        name: 'refreshToken',
        value: data.accessToken
      })
    ]);
    setLogin(true);
    push('/');
  };

  // const onError = () => {};

  return useMutation({ mutationFn, onSuccess });
};

export default useLoginMutation;
