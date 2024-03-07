'use server';

import { revalidateTag as _revalidateTag } from 'next/cache';

export const revalidateTag = async (tag: string) => {
  _revalidateTag(tag);
};
