import * as API from '@/api';
import { WishStoreData, WishStoreListReturn } from '../types';

export const addWishStore = async (data: WishStoreData): Promise<WishStoreListReturn> => {
  return API.post<WishStoreListReturn, null>(`/likes/store/${data.storeId}`, null);
};
