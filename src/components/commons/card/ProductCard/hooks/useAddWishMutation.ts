import * as API from '@/api/index';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

interface WishData {
  data: { folderId: number };
  borderId: number | undefined;
}

interface WishListReturn {
  message: string;
}

const addWish = async (data: WishData): Promise<AxiosResponse<WishListReturn>> => {
  return API.patch<WishListReturn, WishData['data']>(`/boards/${data.borderId}/wish`, data.data);
};

export const useAddWishMutation = () => {
  return useMutation({
    mutationKey: ['wishAdd'],
    mutationFn: addWish
  });
};
