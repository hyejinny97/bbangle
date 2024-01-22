export interface IProductsType {
    boardId: number;
    storeId: number;
    storeName: string;
    thumbnail: string;
    title: string;
    price: number;
    isWished: boolean;
    tags: string[];
}

export interface IStoreDetailType {
    store: {
        storeId: number;
        storeName: string;
        profile: string;
        isWished: boolean;
        introduce: string;
    };
    bestProducts: [
        {
            boardId: number;
            thumbnail: string;
            title: string;
            price: number;
            isBundled: boolean;
        }
    ];
    allProducts: [
        {
            boardId: number;
            thumbnail: string;
            title: string;
            price: number;
            isWished: boolean;
            isBundled: boolean;
            tags: string[];
        }
    ];
}
