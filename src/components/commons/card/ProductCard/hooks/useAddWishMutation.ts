import API from '@/api';
import { useMutation } from '@tanstack/react-query';

interface WishData {
  data: { folderId: number };
  borderId: number | undefined;
}

interface WishListReturn {
  message: string;
}

const addWish = async (data: WishData): Promise<WishListReturn> => {
  const resData = await API.patch<WishListReturn>(`/boards/${data.borderId}/wish`, {
    body: JSON.stringify(data.data)
  });

  return resData;
};

export const useAddWishMutation = () => {
  return useMutation({
    mutationKey: ['wishAdd'],
    mutationFn: addWish
  });
};
