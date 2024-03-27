export const GOOGLE = {
  authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
  clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID ?? '',
  redirectUri: process.env.NEXT_PUBLIC_GOOGLE_AUTH_REDIRECT_URI ?? '',
  scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
  responseType: 'token'
};

export const KAKAO = {
  authUrl: 'https://kauth.kakao.com/oauth/authorize',
  clientId: process.env.NEXT_PUBLIC_KAKAO_AUTH_CLIENT_ID ?? '',
  redirectUri: process.env.NEXT_PUBLIC_KAKAO_AUTH_REDIRECT_URI ?? '',
  responseType: 'code'
};
