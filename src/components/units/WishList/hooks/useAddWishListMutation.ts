import * as API from '@/api/index';
import { useMutation } from '@tanstack/react-query';

interface WishListData {
  title: string;
}

interface WishListReturn {
  message: string;
}

const addWishList = async (reqData: WishListData): Promise<WishListReturn> => {
  const res = await API.post('/wishLists', {
    body: JSON.stringify(reqData)
  });
  const data: WishListReturn = await res.json();
  return data;
};

export const useAddWishListMutation = () => {
  return useMutation({
    mutationKey: ['addWish'],
    mutationFn: addWishList
  });
};
