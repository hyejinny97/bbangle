import * as API from '@/api';
import { WishStoreData, WishStoreListReturn } from '../types';
import { AxiosResponse } from 'axios';

export const addWishStore = async (
  data: WishStoreData
): Promise<AxiosResponse<WishStoreListReturn>> => {
  return API.post<WishStoreListReturn, null>(`/likes/store/${data.storeId}`, null);
};
