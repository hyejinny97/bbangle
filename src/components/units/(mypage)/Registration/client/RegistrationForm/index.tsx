'use client';

import { FormEventHandler, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import BirthdayInput from '@/components/units/(mypage)/client/BirthdateInput';
import NicknameInput from '@/components/units/(mypage)/client/NickNameInput';
import PhoneNumberInput from '@/components/units/(mypage)/client/PhoneNumberInput';
import { registrationFormState } from '../../../atoms';
import useRegistrationMutation from '../../hooks/useRegistrationMutation';
import ProfileImageInput from '../../../client/ProfileImageInput';
import CheckSection from './CheckSection';
import ButtonSection from './ButtonSection';

const RegistrationForm = () => {
  const registrationForm = useRecoilValue(registrationFormState);
  const { mutate } = useRegistrationMutation();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    mutate(registrationForm);
    e.preventDefault();
  };

  return (
    <form
      ref={formRef}
      className="px-[16px] flex flex-col items-center gap-[36px]"
      onSubmit={onSubmit}
    >
      <div className="w-full flex flex-col gap-[20px] items-center">
        <ProfileImageInput />
        <NicknameInput />
        <PhoneNumberInput />
        <BirthdayInput />
        <CheckSection />
      </div>

      <ButtonSection />
    </form>
  );
};

export default RegistrationForm;
