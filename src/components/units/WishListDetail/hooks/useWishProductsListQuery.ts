import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IWishProductList } from '@/components/units/WishListDetail/types';

const getWishProductList = async (folderId: number): Promise<IWishProductList> => {
  const result = await API.get<{ data: IWishProductList }>(`/boards/folders/${folderId}`);
  console.log(result.data);
  return result.data;
};

export const useWishProductListQuery = (folderId: number) => {
  return useQuery<IWishProductList, Error>({
    queryKey: ['wishProductList'],
    queryFn: () => getWishProductList(folderId)
  });
};
