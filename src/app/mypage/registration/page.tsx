import Header from '@/components/commons/header/client/Header';
import BirthdayInput from '@/components/units/(Profile)/Registration/client/BirthdayInput';
import ButtonSection from '@/components/units/(Profile)/Registration/client/ButtonSection';
import CheckSection from '@/components/units/(Profile)/Registration/client/CheckSection';
import NicknameInput from '@/components/units/(Profile)/Registration/client/NickNameInput';
import PhoneNumberInput from '@/components/units/(Profile)/Registration/client/PhoneNumberInput';
import ProfileImage from '@/components/units/(Profile)/Registration/client/ProfileImage';

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
