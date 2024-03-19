'use client';

import GoogleIcon from '@/components/commons/Login/client/GoogleLogin/assets/google_logo.svg';

const GoogleLogin = () => {
  return (
    <div className="flex justify-center items-center gap-[8px] w-full p-[16px] bg-white rounded-[10px] shadow border border-solid border-gray-100 cursor-pointer">
      <GoogleIcon />
      <div className="text-black/85 text-16 font-medium leading-150 tracking-tight-2">
        구글 시작하기
      </div>
    </div>
  );
};

export default GoogleLogin;
