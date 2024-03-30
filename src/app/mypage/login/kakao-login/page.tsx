// 'use client';

import Loading from '@/components/commons/Loading';
import { KAKAO } from '@/domains/user/constants/socialLogin';
import API from '@/shared/utils/api';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import QueryString from 'qs';

interface KakaoParams extends Params {
  error: string;
  code: string;
  error_description: string;
}

// interface KakaoCodeResponse {
//   access_token: string;
//   token_type: string;
//   refresh_token: string;
//   expires_in: number;
//   scope: string;
//   refresh_token_expires_in: number;
// }

interface Props {
  searchParams: KakaoParams;
}

const KakaoLoginLoadingPage = async ({ searchParams: { code } }: Props) => {
  const queryObject = {
    grant_type: 'authorization_code',
    client_id: KAKAO.queryObject.client_id,
    redirect_uri: KAKAO.queryObject.redirect_uri,
    code: code
  };
  const res = await API.post('https://kauth.kakao.com/oauth/token', {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    body: QueryString.stringify(queryObject)
  });
  if (!res.ok) throw new Error('카카오 로그인 실패');

  return <Loading />;
};

export default KakaoLoginLoadingPage;
