import * as API from '@/api/index';
import { useMutation } from '@tanstack/react-query';

interface WishStoreData {
    storeId: number | undefined;
}

interface WishStoreListReturn {
    message: string;
}

const addWishStore = async (data: WishStoreData): Promise<WishStoreListReturn> => {
    return API.post<WishStoreListReturn, null>(`/likes/store/${data.storeId}`, null);
};

export const useAddWishStoreMutation = () => {
    return useMutation({
        mutationKey: ['wishStoreAdd'],
        mutationFn: addWishStore
    });
};
