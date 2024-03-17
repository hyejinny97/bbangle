'use client';

import GoogleIcon from '../assets/google_logo.svg';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {};

  return (
    <button
      className="border border-gray-100 rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-white shadow text-black"
      onClick={handleGoogleLogin}
    >
      <GoogleIcon />
      <div className="text-black text-opacity-90 text-base font-medium font-['Pretendard'] leading-normal">
        구글 시작하기
      </div>
    </button>
  );
};

export default GoogleLoginButton;
