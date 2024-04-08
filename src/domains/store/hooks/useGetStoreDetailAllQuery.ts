import API from '@/api';
import { useQuery } from '@tanstack/react-query';

import { IStoreDetailAllType } from '../types/storeDetailType';

const getStoreDetailAll = async (id: number): Promise<IStoreDetailAllType> => {
  const data: IStoreDetailAllType = await API.get(`/stores/${id}/boards/all?page=0`);
  return data;
};

export const useGetStoreDetailAllQuery = (id: number) =>
  useQuery<IStoreDetailAllType, Error>({
    queryKey: ['products_all'],
    queryFn: () => getStoreDetailAll(id)
  });
