import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IProductsType } from '@/components/units/Home/types';

const GetAllProducts = async (query: any): Promise<IProductsType[]> => {
    const result = await API.get<{ data: IProductsType[] }>(
        `/api/v1/boards?category=${query.category}&${query.ingredient}=true&sort=${query.sort}`
    );
    return result.data;
};

export const useGetAllProductsQuery = query => {
    return useQuery({
        queryKey: ['products'],
        queryFn: query => GetAllProducts(query)
    });
};
