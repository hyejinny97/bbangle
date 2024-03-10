import API from '@/api';
import { IAllStoreType } from '@/commons/types/allstoreType';

export const getAllStores = async () => {
  const data: IAllStoreType = await API.get('/stores');
  return data;
};
