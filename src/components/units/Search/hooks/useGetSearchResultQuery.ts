import * as API from '@/api';
import { useQuery } from '@tanstack/react-query';
import { GetProductsQueryProps, IAllProductsType } from '@/commons/types/allProductsType';
import { IAllStoreType } from '@/commons/types/allstoreType';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';

interface GetSearchResultProps {
  keyword: string;
  filterValue: GetProductsQueryProps;
}

interface SearchResultDataType {
  boards: IAllProductsType;
  stores: IAllStoreType;
}

interface GetSearchResultReturnType {
  products: IAllProductsType['content'];
  stores: IAllStoreType['content'];
}

const getSearchResult = async ({
  keyword,
  filterValue
}: GetSearchResultProps): Promise<GetSearchResultReturnType> => {
  try {
    if (!keyword) return { products: [], stores: [] };

    const queryString = transformFilterValueToQueryString(filterValue);
    const { data } = await API.get<SearchResultDataType>(
      `/search?keyword=${keyword}&${queryString}&storePage=0&boardPage=0`
    );

    return { products: data.boards.content, stores: data.stores.content };
  } catch (error) {
    console.error(error);
    return { products: [], stores: [] };
  }
};

export const useGetSearchResultQuery = ({ keyword, filterValue }: GetSearchResultProps) => {
  return useQuery<GetSearchResultReturnType, Error>({
    queryKey: ['searchResults', keyword, filterValue],
    queryFn: () => getSearchResult({ keyword, filterValue }),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });
};
