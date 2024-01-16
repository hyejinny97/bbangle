'use client';

import { itemNameState } from '@/atoms/atom';
import ProductsCard from '@/components/units/Home/client/ProductCard';
import { IProductsType } from '@/components/units/Products/types';
import { useRecoilState } from 'recoil';
import StoreCard from '../StoreCard';
import FilterTab from '../FilterTab';

interface TotalListProps {
    bestProducts: IProductsType[];
}

const ItemList = ({ bestProducts }: TotalListProps) => {
    const [ProductName] = useRecoilState(itemNameState);
    console.log(ProductName);

    return (
        <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-2">
            {ProductName === '상품' ? (
                <>
                    <FilterTab />
                    {bestProducts.map((product, index) => (
                        <ProductsCard key={index} product={product} />
                    ))}
                </>
            ) : (
                bestProducts.map((store, index) => <StoreCard key={index} store={store} />)
            )}
        </div>
    );
};

export default ItemList;
