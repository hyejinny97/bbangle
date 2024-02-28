import { atom, selector } from 'recoil';
import { RegistrationForm } from '../types';

export const agreeState = atom({
  key: 'agree',
  default: {
    isAllowingMarketing: false,
    isPersonalInfoConsented: false,
    isTermsOfServiceAccepted: false
  }
});

export const profileImgState = atom<File | null>({
  key: 'profileImg',
  default: null
});

export const phoneNumberState = atom<string | null>({
  key: 'phoneNumber',
  default: null
});

export const nicknameState = atom<string | null>({
  key: 'nickname',
  default: null
});

export const birthdateState = atom<string | null>({
  key: 'birthdate',
  default: null
});

export const registrationFormState = selector<RegistrationForm>({
  key: 'registrationForm',

  get: ({ get }) => {
    const profileImg = get(profileImgState);
    const nickname = get(nicknameState);
    const phoneNumber = get(phoneNumberState);
    const birthdate = get(birthdateState);
    const agree = get(agreeState);

    return {
      profileImg,
      nickname,
      birthdate,
      phoneNumber,
      ...agree
    };
  }
});
