import { useQuery } from '@tanstack/react-query';
import { IAllStoreType } from '@/commons/types/allstoreType';
import { getAllStores } from '../api/getAllStores';

export const useGetAllStoresQuery = () => {
    return useQuery<IAllStoreType, Error>({
        queryKey: ['stores'],
        queryFn: () => getAllStores()
    });
};
