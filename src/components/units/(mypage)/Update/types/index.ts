export interface NicknameDoubleCheckResponse {
  message: string;
}

export interface MyProfileUpdateRequest {
  profileImg?: File;
  nickname: string;
  phoneNumber: string;
  birthDate?: string;
}
