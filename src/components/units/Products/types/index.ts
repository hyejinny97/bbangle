import { IProductType } from '@/commons/types/productType';

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
