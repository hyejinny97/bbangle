'use client';

import BirthdayInput from '@/components/units/(mypage)/client/BirthdayInput';
import NicknameInput from '@/components/units/(mypage)/client/NickNameInput';
import PhoneNumberInput from '@/components/units/(mypage)/client/PhoneNumberInput';
import ButtonSection from './ButtonSection';
import CheckSection from './CheckSection';
import { useRecoilValue } from 'recoil';
import { registrationFormState } from '../../atoms';
import useRegistrationMutation from '../../hooks/useRegistrationMutation';
import ProfileImageInput from '../../../client/ProfileImageInput';
import { FormEventHandler } from 'react';
import { RegistrationRequest } from '../../types';

const RegistrationForm = () => {
  const registrationForm = useRecoilValue(registrationFormState);
  const { mutate } = useRegistrationMutation();

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const {
      profileImg,
      phoneNumber,
      nickname,
      birthdate,
      isAllowingMarketing,
      isPersonalInfoConsented,
      isTermsOfServiceAccepted
    } = registrationForm;
    if (profileImg === null || phoneNumber === null || nickname === null) return;

    const formData: RegistrationRequest = {
      profileImg,
      phoneNumber,
      nickname,
      isAllowingMarketing,
      isPersonalInfoConsented,
      isTermsOfServiceAccepted
    };

    if (birthdate !== null) {
      formData.birthdate = birthdate;
    }

    mutate(formData);
  };

  return (
    <form className="px-[16px]" onSubmit={onSubmit}>
      <div className="flex justify-center my-[16px]">
        <ProfileImageInput />
      </div>
      <div className="flex flex-col gap-[20px]">
        <NicknameInput />
        <PhoneNumberInput />
        <BirthdayInput />
      </div>
      <div className="my-[36px]">
        <CheckSection />
      </div>
      <div>
        <ButtonSection />
      </div>
    </form>
  );
};

export default RegistrationForm;
