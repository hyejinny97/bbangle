'use client';

import GoogleIcon from '../assets/google_logo.svg';
import { GOOGLE } from '../constants/social-login';

function getGoogleAuthUrl() {
  const queryObject = {
    client_id: GOOGLE.clientId,
    redirect_uri: GOOGLE.redirectUri,
    response_type: GOOGLE.responseType,
    scope: GOOGLE.scope
  };
  const queryString = new URLSearchParams(queryObject).toString();
  return queryString;
}

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    const googleAuthUrl = getGoogleAuthUrl();
    window.location.assign(googleAuthUrl);
  };

  return (
    <button
      className="border border-gray-100 rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-white shadow text-black"
      onClick={handleGoogleLogin}
    >
      <GoogleIcon />
      <div className="text-black text-16 leading-150 tracking-tight-2">구글 시작하기</div>
    </button>
  );
};

export default GoogleLoginButton;
