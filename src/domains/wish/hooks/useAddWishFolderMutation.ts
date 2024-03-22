import API from '@/api';
import { useMutation } from '@tanstack/react-query';

const useAddWishListMutation = () => {
  const mutationFn = (title: string) =>
    API.post('/wishLists', {
      body: JSON.stringify({ title })
    });

  return useMutation({
    mutationFn
  });
};

export default useAddWishListMutation;
