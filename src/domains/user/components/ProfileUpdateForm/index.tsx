'use client';

import { FormEventHandler } from 'react';
import { useRecoilValue } from 'recoil';
import BirthdayInput from '@/domains/user/components/common/BirthdateInput';
import MoreSection from '@/domains/user/components/ProfileUpdateForm/MoreSection';
import NicknameInput from '@/domains/user/components/common/NickNameInput';
import PhoneNumberInput from '@/domains/user/components/common/PhoneNumberInput';
import ProfileImageInput from '@/domains/user/components/common/ProfileImageInput';
import { UserProfileType } from '@/domains/user/types/profile';
import useProfileUpdateMutation from '@/domains/user/queries/useProfileUpdateMutation';
import { updateFormState } from '@/domains/user/atoms/profile';
import ButtonSection from '@/domains/user/components/ProfileUpdateForm/ButtonSection';

interface ProfileUpdateFormProps {
  defaultValues: UserProfileType;
}

const ProfileUpdateForm = ({
  defaultValues: { profileImg, nickname, phoneNumber, birthDate }
}: ProfileUpdateFormProps) => {
  const { mutate } = useProfileUpdateMutation();
  const updateForm = useRecoilValue(updateFormState);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    mutate(updateForm);
    e.preventDefault();
  };

  return (
    <form className="px-[16px]" onSubmit={onSubmit}>
      <div className="my-[16px] flex justify-center items-center">
        <ProfileImageInput defaultValue={profileImg ?? undefined} />
      </div>
      <div className="flex flex-col gap-[20px] mb-[36px]">
        <NicknameInput defaultValue={nickname ?? undefined} />
        <PhoneNumberInput defaultValue={phoneNumber ?? undefined} />
        <BirthdayInput defaultValue={birthDate ?? undefined} />
      </div>
      <MoreSection className="mb-[16px]" />
      <ButtonSection />
    </form>
  );
};

export default ProfileUpdateForm;
