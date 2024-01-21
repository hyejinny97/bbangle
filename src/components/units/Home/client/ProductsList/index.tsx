'use client';

import { IAllProductsType } from '@/commons/types/allProductsType';
import ProductCard from '@/components/commons/card/ProductCard';

interface ProductsListProps {
    bestProducts: IAllProductsType;
}

const ProductsList = ({ bestProducts }: ProductsListProps) => {
    return (
        <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-2">
            {bestProducts?.content.map(product => (
                <ProductCard key={String(product.boardId)} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
