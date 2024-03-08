import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { IStoreDetailType } from '../types';

const getStoreDetail = async (id: number): Promise<IStoreDetailType> => {
  const data = await API.get<IStoreDetailType>(`/stores/${id}`);
  return data;
};

export const UseGetStoreDetialQuery = (id: number) => {
  return useQuery<IStoreDetailType, Error>({
    queryKey: ['products'],
    queryFn: () => getStoreDetail(id)
  });
};
