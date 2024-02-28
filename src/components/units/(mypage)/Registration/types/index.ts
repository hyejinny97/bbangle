export interface RegistrationRequest {
  profileImg?: File;
  phoneNumber: string;
  isAllowingMarketing: boolean;
  isPersonalInfoConsented: boolean;
  isTermsOfServiceAccepted: boolean;
  nickname: string;
  birthdate?: string;
}
