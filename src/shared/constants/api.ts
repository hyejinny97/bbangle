export const GOOGLE = {
  authUrl: process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL ?? '',
  clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID ?? '',
  redirectUri: process.env.NEXT_PUBLIC_GOOGLE_AUTH_REDIRECT_URI ?? ''
};

export const KAKAO = {
  authUrl: process.env.NEXT_PUBLIC_KAKAO_AUTH_URL ?? '',
  clientId: process.env.NEXT_PUBLIC_KAKAO_AUTH_CLIENT_ID ?? '',
  redirectUri: process.env.NEXT_PUBLIC_KAKAO_AUTH_REDIRECT_URI ?? ''
};
