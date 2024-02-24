import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IStoreDetailType } from '../types';

const getStoreDetail = async (id: number): Promise<IStoreDetailType> => {
  const result = await API.get<{ data: IStoreDetailType }>(`/stores/${id}`);
  console.log('what', result);
  return result.data;
};

export const UseGetStoreDetialQuery = (id: number) => {
  return useQuery<IStoreDetailType, Error>({
    queryKey: ['products'],
    queryFn: () => getStoreDetail(id)
  });
};
