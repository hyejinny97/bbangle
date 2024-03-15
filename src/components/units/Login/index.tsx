import Header from '@/components/commons/header/client/Header';
import GoogleLogin from '@/components/units/Login/GoogleLoginButton';
import KakaoLogin from '@/components/units/Login/KakaoLoginButton';
import LogoBox from '@/components/units/Login/LogoBox';

const Login = () => {
  return (
    <>
      <Header back />
      <div className="flex flex-col gap-[81px] px-[16px] m-[16px] pt-[70px]">
        <LogoBox />
        <div className="flex flex-col gap-3">
          <KakaoLogin />
          <GoogleLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
