import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IWishStoreList } from '@/components/units/WishListDetail/types';

const getWishStoreList = async (): Promise<IWishStoreList[]> => {
  const res = await API.get('/likes/stores');
  const data: IWishStoreList[] = await res.json();
  return data;
};

export const useWishStoreListQuery = () => {
  return useQuery<IWishStoreList[], Error>({
    queryKey: ['wishStoreList'],
    queryFn: getWishStoreList
  });
};
