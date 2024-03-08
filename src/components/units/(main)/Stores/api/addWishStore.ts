import API from '@/api';
import { WishStoreListReturn } from '../../types';

export const addWishStore = async (storeId: number) => {
  const res = await API.post(`/likes/store/${String(storeId)}`);
  const data: WishStoreListReturn = await res.json();
  return data;
};
