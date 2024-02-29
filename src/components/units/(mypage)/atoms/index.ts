import { atom, selector } from 'recoil';
import { RegistrationRequest } from '../Registration/types';
import { MyProfileUpdateRequest } from '../Update/types';

export const agreeState = atom({
  key: 'agree',
  default: {
    isAllowingMarketing: false,
    isPersonalInfoConsented: false,
    isTermsOfServiceAccepted: false
  }
});

export const profileImgState = atom<File>({
  key: 'profileImg',
  default: undefined
});

export const phoneNumberState = atom<string>({
  key: 'phoneNumber',
  default: undefined
});

export const nicknameState = atom<string>({
  key: 'nickname',
  default: undefined
});

export const birthdateState = atom<string>({
  key: 'birthdate',
  default: undefined
});

export const registrationFormState = selector<RegistrationRequest>({
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

export const updateFormState = selector<MyProfileUpdateRequest>({
  key: 'updateFormState',

  get: ({ get }) => {
    const profileImg = get(profileImgState);
    const nickname = get(nicknameState);
    const phoneNumber = get(phoneNumberState);
    const birthdate = get(birthdateState);

    return {
      profileImg,
      nickname,
      birthdate,
      phoneNumber
    };
  }
});
