export interface NicknameDoubleCheckResponse {
  message: string;
}

export interface MyProfileUpdateRequest {
  profileImg: File | null;
  nickname: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
}
