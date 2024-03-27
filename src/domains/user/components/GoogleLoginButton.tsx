'use client';

import GoogleIcon from '../assets/google_logo.svg';
import { GOOGLE } from '../constants/social-login';
import SocialLogin from '../service/socialLogin';

const GoogleLoginButton = () => {
  const googleLogin = new SocialLogin({
    clientId: GOOGLE.clientId,
    redirectUri: GOOGLE.redirectUri,
    responseType: GOOGLE.responseType,
    scope: GOOGLE.scope,
    authUrl: GOOGLE.authUrl
  });

  return (
    <button
      className="border border-gray-100 rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-white shadow text-black"
      onClick={googleLogin.redirect}
    >
      <GoogleIcon />
      <div className="text-black text-16 leading-150 tracking-tight-2">구글 시작하기</div>
    </button>
  );
};

export default GoogleLoginButton;
