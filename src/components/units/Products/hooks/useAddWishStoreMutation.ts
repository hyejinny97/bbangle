import { useMutation } from '@tanstack/react-query';
import { addWishStore } from '../api/addWishStore';

export const useAddWishStoreMutation = () => {
  return useMutation({
    mutationKey: ['wishStoreAdd'],
    mutationFn: addWishStore
  });
};
