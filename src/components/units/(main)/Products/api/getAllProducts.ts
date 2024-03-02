import * as API from '@/api';
import { GetProductsQueryProps, IAllProductsType } from '@/commons/types/allProductsType';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';

export const getAllProducts = async (query: GetProductsQueryProps): Promise<IAllProductsType> => {
  const queryString = transformFilterValueToQueryString(query);
  const { data } = await API.get<IAllProductsType>(`/boards?${queryString}`);

  return data;
};
