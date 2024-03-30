'use server';

import { cookies } from 'next/headers';

const setCookie = async ({ name, value }: { name: string; value: string }) => {
  cookies().set({
    name,
    value,
    httpOnly: true,
    path: '/'
  });
};

export default setCookie;
