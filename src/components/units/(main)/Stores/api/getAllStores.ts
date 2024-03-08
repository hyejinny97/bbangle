import API from '@/api';
import { IStoreType } from '@/commons/types/storeType';

interface GetAllStoresProps {
  pageParam: number;
}

interface AllStoresType {
  content: Array<IStoreType>;
  last: boolean;
}

export const getAllStores = async ({ pageParam }: GetAllStoresProps): Promise<AllStoresType> => {
  const data = await API.get<AllStoresType>(`/stores?page=${pageParam}`);
  return data;
};
