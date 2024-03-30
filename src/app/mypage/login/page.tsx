import LoginLogoSection from '@/blocks/user/LoginLogoSection';
import GoogleLoginButton from '@/domains/user/components/GoogleLoginButton';
import KakaoLoginButton from '@/domains/user/components/KakaoLoginButton';

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-[81px] px-[16px] m-[16px] pt-[70px]">
      <LoginLogoSection />
      <div className="flex flex-col gap-3">
        <KakaoLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
