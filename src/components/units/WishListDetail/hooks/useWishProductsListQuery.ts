import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IWishProductList } from '@/components/units/WishListDetail/types';

const getWishProductList = async (folderId: number): Promise<IWishProductList> => {
  const res = await API.get(`/boards/folders/${folderId}`);
  const data = await res.json();
  return data;
};

export const useWishProductListQuery = (folderId: number) => {
  return useQuery<IWishProductList, Error>({
    queryKey: ['wishProductList'],
    queryFn: () => getWishProductList(folderId)
  });
};
