import * as API from '@/api/index';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

interface WishListData {
  folderId: number;
}

interface WishListReturn {
  message: string;
}

const deleteWishList = async (data: WishListData): Promise<AxiosResponse<WishListReturn>> => {
  return API.delete<WishListReturn>(`/wishLists/${data.folderId}`);
};

export const useDeleteWishListMutation = () => {
  return useMutation({
    mutationKey: ['deleteWish'],
    mutationFn: deleteWishList
  });
};
