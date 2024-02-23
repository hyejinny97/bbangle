import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IWishList } from '../types';

const getWishList = async (): Promise<IWishList[]> => {
    const result = await API.get<{ data: IWishList[] }>('/wishLists');
    return result.data;
};

export const useGetWishListQuery = () => {
    return useQuery<IWishList[], Error>({
        queryKey: ['wishlists'],
        queryFn: getWishList
    });
};
