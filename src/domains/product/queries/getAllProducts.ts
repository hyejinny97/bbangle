import API from '@/api';
import { IAllProductsType } from '@/domains/product/types/allProductsType';
import { IFilterType } from '@/domains/product/types/filterType';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';

interface GetAllProductsProps {
  query: IFilterType;
  cursorId: number;
}

export const getAllProducts = async ({
  query,
  cursorId
}: GetAllProductsProps): Promise<IAllProductsType> => {
  const firstPage = cursorId === -1;
  const cursorIdQueryString = firstPage ? '' : `&cursorId=${cursorId}`;
  const filterValueQueryString = transformFilterValueToQueryString(query);

  const data: IAllProductsType = await API.get(
    `/boards?${filterValueQueryString}${cursorIdQueryString}`
  );
  return data;
};
