import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IAllProductsType } from '@/commons/types/allProductsType';

// /search?keyword={}

interface getSearchResultQueryProps {
    boards?: IAllProductsType;
    stores?: IAllProductsType;
}

const getSearchResultQuery = async (keyword: string): Promise<getSearchResultQueryProps> => {
    console.log(333 + keyword);
    try {
        if (keyword) {
            const result = await API.get<{ data: getSearchResultQueryProps }>(
                `/search?keyword=${keyword}&storePage=0&boardPage=0`
            );
            console.log('11', result.data);
            return result.data;
        }
        return {};
    } catch (err) {
        console.log(err);
    }
    return {};
};

export const useGetSearchResultQuery = (keyword: string) => {
    return useQuery<getSearchResultQueryProps, Error>({
        queryKey: ['["searchProducts"]'],
        queryFn: () => getSearchResultQuery(keyword)
    });
};
