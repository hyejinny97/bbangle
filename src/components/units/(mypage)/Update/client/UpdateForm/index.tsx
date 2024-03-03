'use client';

import { FormEventHandler } from 'react';
import { useRecoilValue } from 'recoil';
import { convertURLtoFile } from '@/commons/utils';
import Button from '@/components/commons/button/client/Button';
import BirthdayInput from '@/components/units/(mypage)/client/BirthdateInput';
import MoreSection from '@/components/units/(mypage)/Update/client/UpdateForm/MoreSection';
import NicknameInput from '@/components/units/(mypage)/client/NickNameInput';
import PhoneNumberInput from '@/components/units/(mypage)/client/PhoneNumberInput';
import ProfileImageInput from '@/components/units/(mypage)/client/ProfileImageInput';
import useProfileUpdateMutation from '../../hooks/useProfileUpdateMutation';
import { updateFormState } from '../../../atoms';
import { UserProfileType } from '../../../types';

interface UpdateFormProps {
  defaultValues: UserProfileType;
}

const UpdateForm = ({
  defaultValues: { profileImg, nickname, phoneNumber, birthDate }
}: UpdateFormProps) => {
  const { mutate } = useProfileUpdateMutation();
  const updateForm = useRecoilValue(updateFormState);

  const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
    const defaultImgFile = profileImg ? await convertURLtoFile(profileImg) : null;
    const updatedData = {
      profileImg: updateForm.profileImg || defaultImgFile,
      nickname: updateForm.nickname || nickname,
      birthDate: updateForm.birthDate || birthDate,
      phoneNumber: updateForm.phoneNumber || phoneNumber
    };

    mutate(updatedData);
    e.preventDefault();
  };

  return (
    <form className="px-[16px]" onSubmit={onSubmit}>
      <div className="my-[16px] flex flex-col w-full justify-center items-center">
        <ProfileImageInput defaultValue={profileImg ?? undefined} />
      </div>
      <div className="flex flex-col gap-[20px] mb-[36px]">
        <NicknameInput defaultValue={nickname ?? undefined} />
        <PhoneNumberInput defaultValue={phoneNumber ?? undefined} />
        <BirthdayInput defaultValue={birthDate ?? undefined} />
      </div>
      <div>
        <MoreSection className="mb-[16px]" />
        <Button type="submit">수정하기</Button>
      </div>
    </form>
  );
};

export default UpdateForm;
