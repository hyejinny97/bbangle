import Header from '@/components/commons/header/client/Header';
import LogoBox from '@/components/units/Login/LogoBox';
import KakaoLoginButton from './KakaoLoginButton';
import GoogleLoginButton from './GoogleLoginButton';

const Login = () => {
  return (
    <>
      <Header back />
      <div className="flex flex-col gap-[81px] px-[16px] m-[16px] pt-[70px]">
        <LogoBox />
        <div className="flex flex-col gap-3">
          <KakaoLoginButton />
          <GoogleLoginButton />
        </div>
      </div>
    </>
  );
};

export default Login;
