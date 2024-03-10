import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IStoreDetailType } from '../types';

const getStoreDetail = async (id: number) => {
  const result = await API.get<IStoreDetailType>(`/stores/${id}`);
  return result.data;
};

export const UseGetStoreDetialQuery = (id: number) => {
  return useQuery<IStoreDetailType, Error>({
    queryKey: ['products'],
    queryFn: () => getStoreDetail(id)
  });
};
