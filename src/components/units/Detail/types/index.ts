export interface IProductDetailType {
    store: {
        name: string;
        id: number;
        profile: string;
        isWished: boolean;
    };
    board: {
        id: number;
        profile: string;
        images: [
            {
                id: number;
                url: string;
            },
            {
                id: number;
                url: string;
            }
        ];
        title: string;
        price: number;
        orderAvailableDays: {
            mon: boolean;
            tue: boolean;
            wed: boolean;
            thu: boolean;
            fri: boolean;
            sat: boolean;
            sun: boolean;
        };
        purchaseUrl: string;
        isWished: boolean;
        isBundled: boolean;
        detail: string;
        products: IProductType[];
    };
}

export interface IProductType {
    name: string;
    tags: string[];
}
