'use client';

import { KAKAO_AUTH_URL, KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } from '@/shared/constants/api';
import KakaoIcon from '../assets/kakao_logo.svg';

const KakaoLoginButton = () => {
  const queryObject = {
    client_id: KAKAO_CLIENT_ID,
    response_type: 'code',
    redirect_uri: KAKAO_REDIRECT_URI
  };
  const queryString = new URLSearchParams(queryObject).toString();

  const handleKakaLogin = () => {
    window.location.assign(`${KAKAO_AUTH_URL}?${queryString}`);
  };

  return (
    <button
      className="rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-kakao shadow text-black"
      onClick={handleKakaLogin}
    >
      <KakaoIcon />
      <div className="text-black/[0.85] text-16 leading-150 tracking-tight-2">
        카카오톡 시작하기
      </div>
    </button>
  );
};

export default KakaoLoginButton;
