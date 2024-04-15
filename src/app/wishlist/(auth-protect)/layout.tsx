import { getCookie } from '@/shared/actions/cookie';
import { redirect } from '@/shared/actions/redirect';
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
  return children;
};

export default WithAuthLayout;
