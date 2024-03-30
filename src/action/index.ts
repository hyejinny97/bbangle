'use server';

import { revalidateTag as _revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { RedirectType, redirect as _redirect } from 'next/navigation';

export const revalidateTag = async (tag: string) => {
  _revalidateTag(tag);
};

export const redirect = async (path: string, type?: RedirectType) => {
  _redirect(path, type);
};

export const getCookie = async (name: string) => {
  const cookieStore = cookies();
  return cookieStore.get(name);
};

export const setCookie = async ({ name, value }: { name: string; value: string }) => {
  cookies().set({
    name,
    value,
    httpOnly: true,
    path: '/'
  });
};
