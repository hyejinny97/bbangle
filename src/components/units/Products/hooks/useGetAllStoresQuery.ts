import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IAllStoreType } from '@/commons/types/allstoreType';

const getAllStores = async (): Promise<IAllStoreType> => {
    const result = await API.get<{ data: IAllStoreType }>('/stores');
    console.log('what', result.data);
    return result.data;
};

export const useGetAllStoresQuery = () => {
    return useQuery<IAllStoreType, Error>({
        queryKey: ['stores'],
        queryFn: () => getAllStores()
    });
};
