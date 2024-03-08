import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { IWishList } from '../types';

const getWishList = async (): Promise<IWishList[]> => {
  const data: IWishList[] = await API.get('/wishLists');
  return data;
};

export const useGetWishListQuery = () => {
  return useQuery<IWishList[], Error>({
    queryKey: ['wishlists'],
    queryFn: getWishList
  });
};
