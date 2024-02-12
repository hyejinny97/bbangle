import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IWishStoreList } from '@/components/units/WishListDetail/types';

const getWishStoreList = async (): Promise<IWishStoreList[]> => {
    const result = await API.get<{ data: IWishStoreList[] }>('/likes/stores');
    return result.data;
};

export const useWishStoreListQuery = () => {
    return useQuery<IWishStoreList[], Error>({
        queryKey: ['wishStoreList'],
        queryFn: getWishStoreList
    });
};
