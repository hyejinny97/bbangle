import { isLoggedinState } from '@/shared/atoms/login';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import { setCookie } from '@/shared/actions/cookie';
import { expToDate, parseJwt } from '../utils/jwt';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

interface ParsedJWT {
  exp: number;
  iat: number;
  id: number;
  iss: number;
}

const useLoginMutation = () => {
  const { openToast } = useToast();
  const setLogin = useSetRecoilState(isLoggedinState);
  const { push } = useRouter();

  const mutationFn = async (accessToken: string) => {
    const res = await fetchExtend.get(`/oauth/login/kakao?token=${accessToken}`);
    const data: LoginResponse = await res.json();
    if (!res.ok) throw new Error('백엔드 로그인 실패');
    return data;
  };

  const onSuccess = async ({ accessToken, refreshToken }: LoginResponse) => {
    const { exp: accessTokenExp }: ParsedJWT = parseJwt(accessToken);
    const { exp: refreshTokenExp }: ParsedJWT = parseJwt(refreshToken);

    const accessTokenExpireDate = expToDate(accessTokenExp);
    const refreshTokenExpireDate = expToDate(refreshTokenExp);

    await Promise.all([
      setCookie({
        name: 'accessToken',
        value: accessToken,
        expires: accessTokenExpireDate
      }),
      setCookie({
        name: 'refreshToken',
        value: refreshToken,
        expires: refreshTokenExpireDate
      })
    ]);
    openToast(<ToastPop>로그인 되었어요.</ToastPop>);

    setLogin(true);
    push('/');
  };

  const onError = () => {
    openToast(<ToastPop>로그인 실패했어요.</ToastPop>);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useLoginMutation;
