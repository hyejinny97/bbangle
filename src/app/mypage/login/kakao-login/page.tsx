import API from '@/shared/utils/api';
import { redirect } from 'next/navigation';

interface Params {
  error: string;
  code: string;
  error_description: string; // kakao 응답이 snake_case라 camelCase 사용 불가능
}

interface Props {
  params: Params;
}

const KakaoLoginPage = async ({ params: { code } }: Props) => {
  const res = await API.get(`/oauth2/login/callback/kakao?code=${code}`, {
    method: 'GET'
  });

  if (!res.ok) throw Error('카카오 로그인 실패');
  redirect('/');
};

export default KakaoLoginPage;
