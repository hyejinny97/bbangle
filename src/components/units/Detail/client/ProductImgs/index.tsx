'use client';

import React from 'react';
import Image from 'next/image';

interface ProductsProps {
    product: {
        productImg: string;
    };
}

const ProductImgs: React.FC<ProductsProps> = ({ product }) => {
    return (
        <div className="w-[92%] m-auto">
            <div className="relative w-full pb-[90%]">
                <Image
                    src={product.productImg}
                    alt="img"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
        </div>
    );
};

export default ProductImgs;
