'use client';

import API from '@/api';
import KakaoIcon from '../assets/kakao_logo.svg';

const KakaoLoginButton = () => {
  const handleKakaLogin = () => {
    window.location.assign(`${API.serverUrl}/oauth2/authorization/kakao`);
  };

  return (
    <button
      className="rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-[#FEE500] shadow text-black"
      onClick={handleKakaLogin}
    >
      <KakaoIcon />
      <div className="text-black text-opacity-90 text-base font-medium font-['Pretendard'] leading-normal">
        카카오톡 시작하기
      </div>
    </button>
  );
};

export default KakaoLoginButton;
