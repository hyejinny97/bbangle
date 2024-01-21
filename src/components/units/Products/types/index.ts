export interface IProductsType {
    content: [
        {
            boardId: number;
            storeId: number;
            storeName: string;
            thumbnail: string;
            title: string;
            price: number;
            isWished: boolean;
            tags: string[];
        }
    ];
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
