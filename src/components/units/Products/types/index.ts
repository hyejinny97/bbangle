import { IProductType } from '@/commons/types/productType';
import { IStoreType } from '@/commons/types/storeType';

export interface IProductsType {
    content: IProductType[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pagable: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        pages: boolean;
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean;
        };
        unpages: boolean;
    };
    size: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
}

export interface IAllStoreType {
    content: IStoreType[];
    itemCount: number;
    pageNumber: number;
    pageSize: number;
}

export interface WishStoreData {
    storeId: number | undefined;
}

export interface WishStoreListReturn {
    message: string;
}
