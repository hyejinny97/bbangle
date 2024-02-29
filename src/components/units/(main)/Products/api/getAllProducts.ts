import * as API from '@/api';
import { GetProductsQueryProps, IAllProductsType } from '@/commons/types/allProductsType';
import { transformCategoryToEng, transformTagToEng } from '@/commons/constants/transfromTag';

export const getAllProducts = async (query: GetProductsQueryProps): Promise<IAllProductsType> => {
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
  const { data } = await API.get<{ data: IAllProductsType }>(`/boards?${queryString}`);

  return data;
};
