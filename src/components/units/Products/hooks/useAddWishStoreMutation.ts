import { addWishStore } from '@/commons/api';
import { useMutation } from '@tanstack/react-query';

export const useAddWishStoreMutation = () => {
    return useMutation({
        mutationKey: ['wishStoreAdd'],
        mutationFn: addWishStore
    });
};
