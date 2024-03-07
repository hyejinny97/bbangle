import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IWishProductList } from '@/components/units/WishListDetail/types';

const getWishProductList = async (folderId: number): Promise<IWishProductList> => {
  const data = await API.get<IWishProductList>(`/boards/folders/${folderId}`);
  return data;
};

export const useWishProductListQuery = (folderId: number) => {
  return useQuery<IWishProductList, Error>({
    queryKey: ['wishProductList'],
    queryFn: () => getWishProductList(folderId)
  });
};
