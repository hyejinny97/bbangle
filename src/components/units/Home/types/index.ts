export interface IProductsType {
    boardId: Number;
    storeId: Number;
    storeName: String;
    thumbnail: String;
    title: String;
    price: Number;
    isWished: Boolean;
    tags: [
        {
            glutenFree: Boolean;
        },
        {
            highProtein: Boolean;
        },
        {
            sugarFree: Boolean;
        },
        {
            vegan: Boolean;
        },
        {
            ketogenic: Boolean;
        }
    ];
}
