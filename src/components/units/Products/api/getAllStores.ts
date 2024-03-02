import * as API from '@/api';
import { IAllStoreType } from '@/commons/types/allstoreType';

export const getAllStores = async () => {
  const result = await API.get<IAllStoreType>('/stores');
  return result.data;
};
