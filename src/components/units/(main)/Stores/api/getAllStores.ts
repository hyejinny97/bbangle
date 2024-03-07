import * as API from '@/api';
import { IStoreType } from '@/commons/types/storeType';

interface GetAllStoresProps {
  pageParam: number;
}

interface AllStoresType {
  content: Array<IStoreType>;
  last: boolean;
}

export const getAllStores = async ({ pageParam }: GetAllStoresProps): Promise<AllStoresType> => {
  const res = await API.get(`/stores?page=${pageParam}`);
  const data: AllStoresType = await res.json();
  return data;
};
