import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { WishStore } from '@/components/units/WishListDetail/types';

const getWishStoreList = async (): Promise<WishStore[]> => {
  const data = await API.get<WishStore[]>('/likes/stores');
  return data;
};

export const useWishStoreListQuery = () => {
  return useQuery<WishStore[], Error>({
    queryKey: ['wishStoreList'],
    queryFn: getWishStoreList
  });
};
