'use client';

import ProductsCard from '../ProductCard';
import { IAllProductsType } from '@/commons/types/allProductsType';

interface ProductsListProps {
    bestProducts: IAllProductsType;
}

const ProductsList = ({ bestProducts }: ProductsListProps) => {
    return (
        <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-2">
            {bestProducts?.content.map(product => (
                <ProductsCard key={String(product.boardId)} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
