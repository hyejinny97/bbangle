import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { IAllProductsType } from '@/commons/types/allProductsType';

interface GetProductsQueryProps {
  category?: string;
  tags?: string[];
  sort?: string;
}

const getAllProducts = async (query: GetProductsQueryProps): Promise<IAllProductsType> => {
  const { category, tags, sort } = query;
  const categoryQuery = category ? `category=${category}` : '';
  const tagQuery = tags && tags.length > 0 ? tags.map(tag => `${tag}=true`).join('&') : '';
  const sortQuery = sort ? `sort=${sort}` : '';
  const queryString = [categoryQuery, tagQuery, sortQuery].filter(Boolean).join('&');

  const data = await API.get<IAllProductsType>(`/boards${queryString ? `?${queryString}` : ''}`);

  return data;
};

export const UseGetSearchResultMutaion = (query: GetProductsQueryProps) => {
  return useQuery<IAllProductsType, Error>({
    queryKey: ['products'],
    queryFn: () => getAllProducts(query)
  });
};
