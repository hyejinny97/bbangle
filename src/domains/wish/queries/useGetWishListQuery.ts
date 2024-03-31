import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { WishFolderType } from '../types/wishFolder';

const getWishList = async () => {
  const data: WishFolderType[] = await API.get('/wishLists');
  return data;
};

export const useGetWishListQuery = () => {
  return useQuery({
    queryKey: ['wishlists'],
    queryFn: getWishList
  });
};
