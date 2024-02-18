import * as API from '@/api';
import { transformTagToEng, transformCategoryToEng } from '@/commons/constants/transfromTag';
import { GetProductsQueryProps, IAllProductsType } from '../types/allProductsType';
import { WishStoreData, WishStoreListReturn } from '../types/wishStoreType';
import { IAllStoreType } from '../types/allstoreType';

export const getAllProducts = async (query: GetProductsQueryProps): Promise<IAllProductsType> => {
    const { category, tags, sort } = query;
    const tagsQuery = tags?.map(tag => `${transformTagToEng(tag)}=true`).join('&');
    const categoryQuery = category && transformCategoryToEng(category);
    const queryObject = {
        category: categoryQuery || '',
        tagsQuery: tagsQuery || '',
        sort: sort || ''
    };
    const queryString = new URLSearchParams(queryObject).toString();

    const { data } = await API.get<{ data: IAllProductsType }>(`/boards${queryString}`);

    return data;
};

export const getAllStores = async (): Promise<IAllStoreType> => {
    const result = await API.get<{ data: IAllStoreType }>('/stores');
    console.log('what', result.data);
    return result.data;
};

export const addWishStore = async (data: WishStoreData): Promise<WishStoreListReturn> => {
    return API.post<WishStoreListReturn, null>(`/likes/store/${data.storeId}`, null);
};
