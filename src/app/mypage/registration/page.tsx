import Header from '@/components/commons/header/client/Header';
import BirthdayInput from '@/components/units/Registration/client/BirthdayInput';
import ButtonSection from '@/components/units/Registration/client/ButtonSection';
import CheckSection from '@/components/units/Registration/client/CheckSection';
import NicknameInput from '@/components/units/Registration/client/NickNameInput';
import PhoneNumberInput from '@/components/units/Registration/client/PhoneNumberInput';
import ProfileImage from '@/components/units/Registration/client/ProfileImage';

const Register = () => {
  return (
    <>
      <Header title="프로필 등록" />

      <form className="px-[16px]">
        <div className="flex justify-center my-[16px]">
          <ProfileImage />
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
    </>
  );
};

export default Register;
