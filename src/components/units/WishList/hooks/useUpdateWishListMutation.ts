import * as API from '@/api/index';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

interface WishListData {
  folderId: number;
  data: {
    title: string;
  };
}

interface WishListReturn {
  message: string;
}

const updateWishList = async (data: WishListData): Promise<AxiosResponse<WishListReturn>> => {
  return API.patch<WishListReturn, WishListData['data']>(`/wishLists/${data.folderId}`, data.data);
};

export const useUpdateWishListMutation = () => {
  return useMutation({
    mutationKey: ['updateWish'],
    mutationFn: updateWishList
  });
};
