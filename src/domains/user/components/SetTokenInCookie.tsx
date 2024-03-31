'use client';

import { setCookie } from '@/action';
import { useEffect } from 'react';
import { expToDate, parseJwt } from '../utils/jwt';

interface ParsedJWT {
  exp: number;
  iat: number;
  id: number;
  iss: number;
}

interface Props {
  accessToken: string;
  refreshToken: string;
}

const SetTokenInCookie = ({ accessToken, refreshToken }: Props) => {
  useEffect(() => {
    (async () => {
      const { exp: accessTokenExp }: ParsedJWT = await parseJwt(accessToken);
      const { exp: refreshTokenExp }: ParsedJWT = await parseJwt(refreshToken);

      const accessTokenExpireDate = expToDate(accessTokenExp);
      const refreshTokenExpireDate = expToDate(refreshTokenExp);

      await Promise.all([
        setCookie({
          name: 'accessToken',
          value: accessToken,
          expires: accessTokenExpireDate
        }),
        setCookie({
          name: 'refreshToken',
          value: refreshToken,
          expires: refreshTokenExpireDate
        })
      ]);
    })();
  }, []);

  return <></>;
};

export default SetTokenInCookie;
