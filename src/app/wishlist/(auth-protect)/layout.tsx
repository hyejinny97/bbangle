import { getCookie, redirect } from '@/action';
import PATH from '@/shared/constants/path';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const WithAuthLayout = async ({ children }: Props) => {
  const accessToken = await getCookie('accessToken');
  const isLoggedIn = !!accessToken;

  if (!isLoggedIn) {
    return redirect(PATH.wishLogin);
  }
  return <>{children}</>;
};

export default WithAuthLayout;
