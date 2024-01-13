import React from 'react';

interface ProductsProps {
    product: {
        id: number;
        productImg: string;
        storeImg: string;
        productName: string;
        storeName: string;
        tag: string[];
        orderDay: string[];
        price: number;
    };
}

const ProductImgs: React.FC<ProductsProps> = ({ product }) => {
    return (
        <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-2">
            <div
                className="w-full pb-[90%] bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${product.productImg})` }}
            ></div>
        </div>
    );
};

export default ProductImgs;
