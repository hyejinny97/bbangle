import * as API from '@/api';
import { IProductType } from '@/commons/types/productType';
import { ProductsQueryType } from '@/commons/types/allProductsType';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';

interface GetAllProductsProps {
  query: ProductsQueryType;
  pageParam: number;
}

interface AllProductsType {
  content: Array<IProductType>;
  last: boolean;
}

export const getAllProducts = async ({
  query,
  pageParam
}: GetAllProductsProps): Promise<AllProductsType> => {
  const queryString = transformFilterValueToQueryString(query);
  const { data } = await API.get<AllProductsType>(`/boards?${queryString}&page=${pageParam}`);

  return data;
};
