'use client';

import { GOOGLE } from '@/shared/constants/api';
import GoogleIcon from '../assets/google_logo.svg';

const GoogleLoginButton = () => {
  const queryObject = {
    client_id: GOOGLE.clientId,
    redirect_uri: GOOGLE.redirectUri,
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly'
  };
  const queryString = new URLSearchParams(queryObject).toString();

  const handleGoogleLogin = () => {
    window.location.assign(`${GOOGLE.authUrl}?${queryString}`);
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
