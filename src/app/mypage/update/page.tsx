import Button from '@/components/commons/button/client/Button';
import Header from '@/components/commons/header/client/Header';
import BirthdayInput from '@/components/units/(mypage)/client/BirthdateInput';
import MoreSection from '@/components/units/(mypage)/Update/client/MoreSection';
import NicknameInput from '@/components/units/(mypage)/client/NickNameInput';
import PhoneNumberInput from '@/components/units/(mypage)/client/PhoneNumberInput';
import ProfileImageInput from '@/components/units/(mypage)/client/ProfileImageInput';
import { getMyProfile } from '@/components/units/(mypage)/Update/api';

const Update = async () => {
  const { profileImg, nickname, phoneNumber, birthDate } = await getMyProfile();

  return (
    <>
      <Header title="프로필 수정" back />

      <form className="px-[16px]">
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
    </>
  );
};

export default Update;
