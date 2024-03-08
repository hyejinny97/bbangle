import API from '@/api';
import { useMutation } from '@tanstack/react-query';

interface WishListData {
  title: string;
}

interface WishListReturn {
  message: string;
}

const addWishList = async (reqData: WishListData): Promise<WishListReturn> => {
  const data = await API.post<WishListReturn>('/wishLists', {
    body: JSON.stringify(reqData)
  });
  return data;
};

export const useAddWishListMutation = () => {
  return useMutation({
    mutationKey: ['addWish'],
    mutationFn: addWishList
  });
};
