'use client';

import { useEffect } from 'react';
import Login from '@/components/commons/Login/server/Login';
import usePopup from '@/commons/hooks/usePopup';

const LoginPage = () => {
  const { closePopup } = usePopup();

  useEffect(() => {
    closePopup();
  });

  return (
    <Login
      title="안녕하세요👋 빵그리의 오븐입니다 :)"
      subTitle="여러분들이 원하는 비건 베이커리들을 함께 만나봐요!"
    />
  );
};

export default LoginPage;
