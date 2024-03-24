import { getCookie } from '@/action';
import { cookies } from 'next/headers';

const getAccessToken = async () => {
  const isServerSide = typeof window === 'undefined';

  if (isServerSide) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken');
    return accessToken?.value;
  }

  const accessToken = await getCookie('accessToken');
  return accessToken?.value;
};

export default getAccessToken;
