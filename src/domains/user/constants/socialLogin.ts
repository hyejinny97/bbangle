export const GOOGLE = {
  authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
  queryObject: {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID ?? '',
    redirectUri: process.env.NEXT_PUBLIC_GOOGLE_AUTH_REDIRECT_URI ?? '',
    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
    responseType: 'token'
  }
};

export const KAKAO = {
  authUrl: 'https://kauth.kakao.com/oauth/authorize',
  queryObject: {
    client_id: process.env.NEXT_PUBLIC_KAKAO_AUTH_CLIENT_ID ?? '',
    redirect_uri: process.env.NEXT_PUBLIC_KAKAO_AUTH_REDIRECT_URI ?? '',
    response_type: 'code'
  }
};
