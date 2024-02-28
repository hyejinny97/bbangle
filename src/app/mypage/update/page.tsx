import Button from '@/components/commons/button/client/Button';
import Header from '@/components/commons/header/client/Header';
import BirthdayInput from '@/components/units/(mypage)/client/BirthdayInput';
import MoreSection from '@/components/units/(mypage)/MyPageUpdate/client/MoreSection';
import NicknameInput from '@/components/units/(mypage)/client/NickNameInput';
import PhoneNumberInput from '@/components/units/(mypage)/client/PhoneNumberInput';
import ProfileImage from '@/components/units/(mypage)/MyPageUpdate/client/ProfileImage';

const Update = () => {
  return (
    <>
      <Header title="프로필 수정" back />

      <form className="px-[16px]">
        <div className="my-[16px] flex flex-col w-full justify-center items-center">
          <ProfileImage />
        </div>
        <div className="flex flex-col gap-[20px] mb-[36px]">
          <NicknameInput />
          <PhoneNumberInput />
          <BirthdayInput />
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
