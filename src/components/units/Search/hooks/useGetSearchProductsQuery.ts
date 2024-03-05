import * as API from '@/api';
import { useQuery } from '@tanstack/react-query';
import { GetProductsQueryProps, IAllProductsType } from '@/commons/types/allProductsType';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';

interface GetSearchProductsProps {
  keyword: string;
  filterValue: GetProductsQueryProps;
}

const getSearchProducts = async ({
  keyword,
  filterValue
}: GetSearchProductsProps): Promise<IAllProductsType> => {
  try {
    if (!keyword) return { content: [], itemCount: 0, pageNumber: 0, pageSize: 0 };

    const queryString = transformFilterValueToQueryString(filterValue);
    const { data } = await API.get<IAllProductsType>(
      `/search/boards?keyword=${keyword}&${queryString}&page=0`
    );

    return data;
  } catch (error) {
    console.error(error);
    return { content: [], itemCount: 0, pageNumber: 0, pageSize: 0 };
  }
};

export const useGetSearchProductsQuery = ({ keyword, filterValue }: GetSearchProductsProps) => {
  return useQuery<IAllProductsType, Error>({
    queryKey: ['searchProducts', keyword, filterValue],
    queryFn: () => getSearchProducts({ keyword, filterValue }),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });
};
