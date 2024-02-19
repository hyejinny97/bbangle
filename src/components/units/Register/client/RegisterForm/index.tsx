import Input from '@/components/commons/inputs/Input';
import ProfileImage from './ProfileImage';
import NicknameInput from './NickNameInput';
import PhoneNumberInput from './PhoneNumberInput';

const RegisterForm = () => {
    return (
        <form>
            <div className="flex justify-center mb-[16px]">
                <ProfileImage />
            </div>
            <div className="flex flex-col gap-[20px]">
                <NicknameInput />
                <PhoneNumberInput />
                <Input type="date" />
            </div>
        </form>
    );
};

export default RegisterForm;
