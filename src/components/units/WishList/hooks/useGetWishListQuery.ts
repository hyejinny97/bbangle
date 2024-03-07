import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IWishList } from '../types';

const getWishList = async (): Promise<IWishList[]> => {
  const res = await API.get('/wishLists');
  const data: IWishList[] = await res.json();
  return data;
};

export const useGetWishListQuery = () => {
  return useQuery<IWishList[], Error>({
    queryKey: ['wishlists'],
    queryFn: getWishList
  });
};
