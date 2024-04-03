import LoginLogoSection from '@/blocks/user/LoginLogoSection';
import GoogleLoginButton from '@/domains/user/components/GoogleLoginButton';
import KakaoLoginButton from '@/domains/user/components/KakaoLoginButton';

const WishLoginPage = () => {
  return (
    <div className="flex flex-col gap-[81px] px-[16px] m-[16px] pt-[70px]">
      <LoginLogoSection
        title="안녕하세요👋 빵그리의 오븐입니다 :)"
        subTitle="회원가입 및 로그인을 하고 찜을 이용해보세요! 💖"
      />
      <div className="flex flex-col gap-3">
        <KakaoLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default WishLoginPage;
