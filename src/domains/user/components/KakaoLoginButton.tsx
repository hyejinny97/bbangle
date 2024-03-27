'use client';

import KakaoIcon from '../assets/kakao_logo.svg';
import { KAKAO } from '../constants/social-login';

const KakaoLoginButton = () => {
  const queryObject = {
    client_id: KAKAO.clientId,
    response_type: KAKAO.responseType,
    redirect_uri: KAKAO.redirectUri
  };
  const queryString = new URLSearchParams(queryObject).toString();

  const handleKakaLogin = () => {
    window.location.assign(`${KAKAO.authUrl}?${queryString}`);
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
