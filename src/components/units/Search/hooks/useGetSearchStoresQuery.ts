import * as API from '@/api';
import { useQuery } from '@tanstack/react-query';
import { IAllStoreType } from '@/commons/types/allstoreType';

interface GetSearchStoresProps {
  keyword: string;
}

const getSearchStores = async ({ keyword }: GetSearchStoresProps): Promise<IAllStoreType> => {
  try {
    if (!keyword) return { content: [], itemCount: 0, pageNumber: 0, pageSize: 0 };

    const { data } = await API.get<IAllStoreType>(`/search/stores?keyword=${keyword}&page=0`);

    return data;
  } catch (error) {
    console.error(error);
    return { content: [], itemCount: 0, pageNumber: 0, pageSize: 0 };
  }
};

export const useGetSearchStoresQuery = ({ keyword }: GetSearchStoresProps) => {
  return useQuery<IAllStoreType, Error>({
    queryKey: ['searchStores', keyword],
    queryFn: () => getSearchStores({ keyword }),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });
};
