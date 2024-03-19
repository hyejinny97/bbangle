'use client';

import LogoSub from '@/commons/assets/logo_sub.svg';
import Header from '@/components/commons/header/client/Header';
import GoogleLogin from '@/components/commons/Login/client/GoogleLogin';
import KakaoLogin from '@/components/commons/Login/client/KakaoLogin';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface LoginProps {
  title: string;
  subTitle: string;
}

const Login = ({ title, subTitle }: LoginProps) => {
  return (
    <>
      <Header back />
      <PaddingWrapper className="py-[16px] h-[80vh]">
        <div className="flex flex-col justify-between items-center px-[16px] pt-[70px] pb-[16px] h-full">
          <div className="flex flex-col items-center">
            <LogoSub />
            <div className="mt-[20px] text-center leading-150">
              <p className="text-16 font-semibold tracking-tight-4 text-gray-900">{title}</p>
              <p className="text-14 font-normal tracking-tight-6 text-gray-800">{subTitle}</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-full">
            <KakaoLogin />
            <GoogleLogin />
          </div>
        </div>
      </PaddingWrapper>
    </>
  );
};

export default Login;
