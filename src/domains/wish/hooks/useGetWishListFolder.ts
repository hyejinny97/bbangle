import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { WishFolder } from '../types/wishFolder';

const getWishListFolder = async (): Promise<WishFolder[]> => {
  const data: WishFolder[] = await API.get('/wishLists');
  return data;
};

export const useGetWishListFolder = () => {
  return useQuery<WishFolder[], Error>({
    queryKey: ['wishlists'],
    queryFn: getWishListFolder
  });
};
