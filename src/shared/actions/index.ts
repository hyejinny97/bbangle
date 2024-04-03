'use server';

import { revalidateTag as _revalidateTag } from 'next/cache';
import { revalidatePath as _revalidatePath } from 'next/cache';
import { redirect as _redirect } from 'next/navigation';

export const revalidateTag = async (tag: string) => {
  _revalidateTag(tag);
};

export const revalidatePath = async (tag: string) => {
  _revalidatePath(tag);
};

export const redirect = async (path: string) => {
  _redirect(path);
};
