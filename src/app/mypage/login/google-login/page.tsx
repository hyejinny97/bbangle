'use client';

import Loading from '@/components/commons/Loading';
import useGoogleLoginMutation from '@/domains/user/queries/useGoogleLoginMutation';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

interface GoogleParams extends Params {
  error: string;
}

const GoogleLoginPage = () => {
  const { mutate } = useGoogleLoginMutation();
  const { code } = useParams<GoogleParams>();

  useEffect(() => {
    mutate(code);
  });

  return <Loading />;
};

export default GoogleLoginPage;
