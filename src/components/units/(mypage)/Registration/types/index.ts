export interface RegistrationRequest {
  profileImg: File;
  phoneNumber: string;
  isAllowingMarketing: boolean;
  isPersonalInfoConsented: boolean;
  isTermsOfServiceAccepted: boolean;
  nickname: string;
  birthdate?: string;
}

export type RegistrationForm = Omit<
  RegistrationRequest,
  'phoneNumber' | 'nickname' | 'birthdate' | 'profileImg'
> & {
  profileImg: File | null;
  phoneNumber: string | null;
  nickname: string | null;
  birthdate: string | null;
};
