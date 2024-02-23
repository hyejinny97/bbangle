import { IconLogoSub } from '@/components/units/MyPage/client/Icons';
import SignInButton from '@/components/units/MyPage/client/SignInButton';

const ServerSignIn = () => {
    return (
        <div className="p-4 pb-[26px]">
            <div className="flex justify-center">
                <IconLogoSub />
            </div>
            <div className="m-4">
                <SignInButton />
            </div>
            <p className="text-center text-[14px]">
                회원가입 및 로그인을 하고 더 많은 정보들을 받아보세요! 🎉
            </p>
        </div>
    );
};

export default ServerSignIn;
