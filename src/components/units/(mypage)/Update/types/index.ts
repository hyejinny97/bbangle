export interface NicknameDoubleCheckResponse {
  message: string;
}

export interface MyProfileResponse {
  profileImg: string | null;
  nickname: string;
  birthDate: string | null;
  phoneNumber: string | null;
}
