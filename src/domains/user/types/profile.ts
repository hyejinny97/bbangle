export interface NicknameDoubleCheckResponse {
  message: string;
}

export interface MyProfileUpdateRequest {
  profileImg: File | null;
  nickname: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
}

export interface UserProfileType {
  profileImg: string | null;
  nickname: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
}
