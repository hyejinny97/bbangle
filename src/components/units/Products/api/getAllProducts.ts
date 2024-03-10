import API from '@/api';
import { GetProductsQueryProps } from '@/commons/types/allProductsType';
import { transformCategoryToEng, transformTagToEng } from '@/commons/constants/transfromTag';

export const getAllProducts = async (query: GetProductsQueryProps) => {
  const { category, tags, sort } = query;
  const categoryQuery = category && transformCategoryToEng(category);
  const tagsEng = tags?.map(tag => transformTagToEng(tag));
  const tagsQuery = tagsEng?.reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: true
    }),
    {}
  );

  const queryObject = {
    category: categoryQuery || '',
    ...tagsQuery,
    sort: sort || 'LATEST'
  };
  const queryString = new URLSearchParams(queryObject).toString();
  const data = await API.get(`/boards?${queryString}`);

  return data;
};
