import { revalidateTag as _revalidateTag, revalidatePath as _revalidatePath } from 'next/cache';

export const revalidateTag = async (tag: string) => {
  _revalidateTag(tag);
};

export const revalidatePath = async (tag: string) => {
  _revalidatePath(tag);
};
