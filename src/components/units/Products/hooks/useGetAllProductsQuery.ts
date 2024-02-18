import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IAllProductsType } from '@/commons/types/allProductsType';
import { transformTagToEng, transformCategoryToEng } from '@/commons/constants/transfromTag';

interface GetProductsQueryProps {
    category?: string;
    tags?: string[];
    sort?: string;
}

const getAllProducts = async (query: GetProductsQueryProps): Promise<IAllProductsType> => {
    const { category, tags, sort } = query;
    const tagsQuery = tags?.map(tag => `${transformTagToEng(tag)}=true`).join('&');
    const categoryQuery = category && transformCategoryToEng(category);
    const queryObject = {
        category: categoryQuery || '',
        tagsQuery: tagsQuery || '',
        sort: sort || ''
    };
    const queryString = new URLSearchParams(queryObject).toString();

    const { data } = await API.get<{ data: IAllProductsType }>(`/boards${queryString}`);

    return data;
};

export const useGetAllProductsQuery = (query: GetProductsQueryProps) => {
    return useQuery<IAllProductsType, Error>({
        queryKey: ['products'],
        queryFn: () => getAllProducts(query)
    });
};
