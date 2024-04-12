import API from '@/api';
import { useQuery } from '@tanstack/react-query';

import { IStoreDetailType } from '../types/storeDetailType';

const getStoreDetail = async (id: number): Promise<IStoreDetailType> => {
  const data: IStoreDetailType = await API.get(`/stores/${id}`);
  return data;
};

export const useGetStoreDetailQuery = (id: number) =>
  useQuery<IStoreDetailType, Error>({
    queryKey: ['products'],
    queryFn: () => getStoreDetail(id)
  });
