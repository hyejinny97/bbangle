import API from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { LoginResponse } from '../types/login';
import { useSetRecoilState } from 'recoil';
import { loginState } from '@/shared/atoms/login';
import { redirect } from '@/action';

const useGoogleLoginMutation = () => {
  const setLogin = useSetRecoilState(loginState);

  const mutationFn = async (code: string) => {
    const res = await API.get(`/oauth2/login/callback/google?code=${code}`, {
      method: 'GET'
    });
    const data: LoginResponse = await res.json();
    if (!res.ok) throw Error('로그인 실패');
    return data;
  };

  const onSuccess = async () => {
    setLogin(true);
    await redirect('/');
  };

  return useMutation({
    mutationFn,
    onSuccess
  });
};

export default useGoogleLoginMutation;
