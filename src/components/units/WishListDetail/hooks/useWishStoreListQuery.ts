import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { WishStore } from '@/components/units/WishListDetail/types';

const getWishStoreList = async (): Promise<WishStore[]> => {
  const data: WishStore[] = await API.get('/likes/stores');
  return data;
};

export const useWishStoreListQuery = () => {
  return useQuery<WishStore[], Error>({
    queryKey: ['wishStoreList'],
    queryFn: getWishStoreList
  });
};
