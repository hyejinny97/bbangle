import * as API from '@/api/index';
import { useMutation } from '@tanstack/react-query';

interface WishListData {
  title: string;
}

interface WishListReturn {
  message: string;
}

const addWishList = async (data: WishListData): Promise<WishListReturn> => {
  return API.post<WishListReturn, WishListData>('/wishLists', data);
};

export const useAddWishListMutation = () => {
  return useMutation({
    mutationKey: ['addWish'],
    mutationFn: addWishList
  });
};
