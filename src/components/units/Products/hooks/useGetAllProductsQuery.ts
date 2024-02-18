import { useQuery } from '@tanstack/react-query';

import { GetProductsQueryProps, IAllProductsType } from '@/commons/types/allProductsType';
import { getAllProducts } from '@/commons/api';

export const useGetAllProductsQuery = (query: GetProductsQueryProps) => {
    return useQuery<IAllProductsType, Error>({
        queryKey: ['products'],
        queryFn: () => getAllProducts(query)
    });
};
