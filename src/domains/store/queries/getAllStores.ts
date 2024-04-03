import API from '@/api';
import { IAllStoresType } from '@/domains/store/types/allStoresType';

interface GetAllStoresProps {
  pageParam: number;
}

export const getAllStores = async ({ pageParam }: GetAllStoresProps): Promise<IAllStoresType> => {
  const data: IAllStoresType = await API.get(`/stores?page=${pageParam}`);
  return data;
};
