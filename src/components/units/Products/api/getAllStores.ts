import * as API from '@/api';
import { IAllStoreType } from '@/commons/types/allstoreType';

export const getAllStores = async (): Promise<IAllStoreType> => {
    const result = await API.get<{ data: IAllStoreType }>('/stores');
    console.log('what', result.data);
    return result.data;
};
