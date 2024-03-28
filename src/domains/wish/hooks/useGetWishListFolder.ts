import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { WishFolderType } from '../types/wishFolder';

const getWishListFolder = async (): Promise<WishFolderType[]> => {
  const data: WishFolderType[] = await API.get('/wishLists');
  return data;
};

export const useGetWishListFolder = () => {
  return useQuery<WishFolderType[], Error>({
    queryKey: ['wishlists'],
    queryFn: getWishListFolder
  });
};
