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
        id: number;
        title: string;
        profile: string;
        isWished: boolean;
        introduce: string;
    };
    best_products: [
        {
            id: number;
            profile: string;
            title: string;
            price: number;
            isBundled: boolean;
        }
    ];
    all_products: [
        {
            id: number;
            profile: string;
            title: string;
            price: number;
            isWished: boolean;
            isBundled: boolean;
            tags: string[];
        }
    ];
}
