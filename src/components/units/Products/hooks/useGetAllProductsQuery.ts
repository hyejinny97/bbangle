import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IProductsType } from '@/components/units/Home/types';

interface GetProductsQueryProps {
    category?: string;
    tags?: string[];
    sort?: string;
}

const GetAllProducts = async (query: GetProductsQueryProps): Promise<IProductsType[]> => {
    const { category, tags, sort } = query;
    const categoryQuery = category ? `category=${category}` : '';
    console.log(111111);
    const tagQuery = tags && tags.length > 0 ? tags.map(tag => `${tag}=true`).join('&') : '';
    const sortQuery = sort ? `sort=${sort}` : '';

    const queryString = [categoryQuery, tagQuery, sortQuery].filter(Boolean).join('&');

    const result = await API.get<{ data: IProductsType[] }>(
        `/boards${queryString ? `?${queryString}` : ''}`
    );
    console.log('what', result);
    return result.data;
};

export const UseGetAllProductsQuery = (query: GetProductsQueryProps) => {
    return useQuery<IProductsType[], Error>({
        queryKey: ['products'],
        queryFn: () => GetAllProducts(query)
    });
};
