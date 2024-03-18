import API from '@/api';
import { useMutation } from '@tanstack/react-query';

interface WishData {
  data: { folderId: number };
  borderId: number | undefined;
}

interface WishListReturn {
  message: string;
}

const addWish = async (wishList: WishData): Promise<WishListReturn> => {
  const data: WishListReturn = await API.patch(`/boards/${wishList.borderId}/wish`, {
    body: JSON.stringify(wishList.data)
  });

  return data;
};

export const useAddWishMutation = () => {
  return useMutation({
    mutationKey: ['wishAdd'],
    mutationFn: addWish
  });
};
