'use client';

import Loading from '@/shared/components/Loading';
import useKakaoAuthMutation from '@/domains/user/queries/useKakaoAuthMutation';
import useLoginMutation from '@/domains/user/queries/useLoginMutation';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const KakaoLoginLoading = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { mutate: mutateKakaoAuth, data: kakoAuthData } = useKakaoAuthMutation();
  const { mutate: mutateLogin } = useLoginMutation();

  useEffect(() => {
    if (!code) return;
    mutateKakaoAuth(code);
  }, [code, mutateKakaoAuth]);

  useEffect(() => {
    if (!kakoAuthData?.access_token) return;
    mutateLogin(kakoAuthData.access_token);
  }, [mutateLogin, kakoAuthData]);

  return <Loading />;
};

export default KakaoLoginLoading;
