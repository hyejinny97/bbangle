import API from '@/api';
import { useMutation } from '@tanstack/react-query';

interface WishListData {
  folderId: number;
  data: {
    title: string;
  };
}

interface WishListReturn {
  message: string;
}

const updateWishList = async (data: WishListData): Promise<WishListReturn> => {
  return API.patch<WishListReturn, WishListData['data']>(`/wishLists/${data.folderId}`, data.data);
};

export const useUpdateWishListMutation = () => {
  return useMutation({
    mutationKey: ['updateWish'],
    mutationFn: updateWishList
  });
};
