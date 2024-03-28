'use client';

import GoogleIcon from '../assets/google_logo.svg';
import { GOOGLE } from '../constants/socialLogin';
import SocialLoginController from '../business/socialLogin';

const GoogleLoginButton = () => {
  const googleLoginController = new SocialLoginController({
    queryObject: GOOGLE.queryObject,
    authUrl: GOOGLE.authUrl
  });

  return (
    <button
      className="border border-gray-100 rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-white shadow text-black"
      onClick={googleLoginController.redirect}
    >
      <GoogleIcon />
      <div className="text-black text-16 leading-150 tracking-tight-2">구글 시작하기</div>
    </button>
  );
};

export default GoogleLoginButton;
