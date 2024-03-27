'use client';

import KakaoIcon from '../assets/kakao_logo.svg';
import { KAKAO } from '../constants/social-login';
import SocialLoginController from '../service/socialLogin';

const KakaoLoginButton = () => {
  const kakaoLoginController = new SocialLoginController({
    authUrl: KAKAO.authUrl,
    redirectUri: KAKAO.redirectUri,
    responseType: KAKAO.responseType,
    clientId: KAKAO.clientId
  });

  return (
    <button
      className="rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-kakao shadow text-black"
      onClick={kakaoLoginController.redirect}
    >
      <KakaoIcon />
      <div className="text-black/[0.85] text-16 leading-150 tracking-tight-2">
        카카오톡 시작하기
      </div>
    </button>
  );
};

export default KakaoLoginButton;
