import API from '@/shared/utils/api';
import { KAKAO } from '../constants/socialLogin';
import QueryString from 'qs';
import { KakaoAuthResponse } from '../types/login';

const getKakaoToken = async (code: string) => {
  const queryObject = {
    grant_type: 'authorization_code',
    client_id: KAKAO.client_id,
    redirect_uri: KAKAO.redirect_uri,
    code: code
  };
  const res = await API.post('https://kauth.kakao.com/oauth/token', {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    body: QueryString.stringify(queryObject)
  });
  if (!res.ok) throw new Error('카카오 로그인 실패');

  const data: KakaoAuthResponse = await res.json();
  return data;
};

export default getKakaoToken;
