import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { IStoreDetailAllType } from '../types';

const getStoreDetailAll = async (id: number): Promise<IStoreDetailAllType> => {
  const data: IStoreDetailAllType = await API.get(`/stores/${id}/boards/all`);
  return data;
};

export const UseGetStoreDetialAllQuery = (id: number) => {
  return useQuery<IStoreDetailAllType, Error>({
    queryKey: ['products_all'],
    queryFn: () => getStoreDetailAll(id)
  });
};
