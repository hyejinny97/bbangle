'use client';

import KakaoIcon from '@/components/commons/Login/client/KakaoLogin/assets/kakao_logo.svg';

const KakaoLogin = () => {
  const handleKakaoLogin = async () => {
    window.location.assign(`${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/kakao`);
  };

  return (
    <div
      className="flex justify-center items-center gap-[8px] w-full p-[16px] bg-[#FEE500] rounded-[10px] shadow cursor-pointer"
      onClick={handleKakaoLogin}
    >
      <KakaoIcon />
      <div className="text-black/85 text-16 font-medium leading-150 tracking-tight-2">
        카카오톡 시작하기
      </div>
    </div>
  );
};

export default KakaoLogin;
