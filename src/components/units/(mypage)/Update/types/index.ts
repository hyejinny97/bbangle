export interface NicknameDoubleCheckResponse {
  message: string;
}

export interface MyProfileResponse {
  profileImg: string | null;
  nickname: string | null;
  birthDate: string | null;
  phoneNumber: string | null;
}

export interface MyProfileUpdateRequest {
  profileImg?: File;
  nickname: string;
  phoneNumber: string;
  birthDate?: string;
}
