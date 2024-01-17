'use client';

import { itemName, itemNameState } from '@/atoms/atom';
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

    return (
        <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-2">
            {ProductName === '상품' ? (
                <>
                    <FilterTab />

                    <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
                        {bestProducts.map((product, i) => (
                            <ProductsCard key={i} product={product} />
                        ))}
                    </div>
                </>
            ) : (
                bestProducts.map((store, index) => <StoreCard key={index} store={store} />)
            )}
        </div>
    );
};

export default ItemList;
