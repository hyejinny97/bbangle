import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { IWishStoreList } from '@/components/units/WishListDetail/types';

const getWishStoreList = async (): Promise<IWishStoreList[]> => {
  const data = await API.get<IWishStoreList[]>('/likes/stores');
  return data;
};

export const useWishStoreListQuery = () => {
  return useQuery<IWishStoreList[], Error>({
    queryKey: ['wishStoreList'],
    queryFn: getWishStoreList
  });
};
