export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface KakaoAuthResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  refresh_token_expires_in: number;
}

export interface ParsedJWT {
  exp: number;
  iat: number;
  id: number;
  iss: number;
}

export type SocialType = 'KAKAO' | 'GOOGLE';
