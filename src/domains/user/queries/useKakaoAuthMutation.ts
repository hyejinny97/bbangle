import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { KAKAO } from '../constants/socialLogin';
import QueryString from 'qs';
import { KakaoAuthResponse } from '../types/login';

const useKakaoAuthMutation = () => {
  const mutationFn = async (code: string) => {
    const queryObject = {
      grant_type: 'authorization_code',
      client_id: KAKAO.client_id,
      redirect_uri: KAKAO.redirect_uri,
      code: code
    };
    const res = await fetchExtend.post('https://kauth.kakao.com/oauth/token', {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      body: QueryString.stringify(queryObject)
    });
    if (!res.ok) throw new Error('카카오 로그인 실패');
    const data: KakaoAuthResponse = await res.json();
    return data;
  };

  return useMutation({
    mutationFn
  });
};

export default useKakaoAuthMutation;
