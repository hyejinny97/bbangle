export interface NicknameDoubleCheckResponse {
  message: string;
}

export interface MyProfileResponse {
  profileImg: string | null;
  nickname: string | null;
  birthDate: string | null;
  phoneNumber: string | null;
}
