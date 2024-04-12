'use client';

import Loading from '@/shared/components/Loading';
import useGoogleLoginMutation from '@/domains/user/queries/useGoogleLoginMutation';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

interface GoogleParams extends Params {
  error: string;
}

const GoogleLoginLoadingPage = () => {
  const { mutate } = useGoogleLoginMutation();
  const { code } = useParams<GoogleParams>();

  useEffect(() => {
    mutate(code);
  }, [code, mutate]);

  return <Loading />;
};

export default GoogleLoginLoadingPage;
