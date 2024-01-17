'use client';

import { itemNameState } from '@/atoms/atom';
import ProductsCard from '@/components/units/Home/client/ProductCard';
import { IProductsType } from '@/components/units/Products/types';
import { useRecoilState } from 'recoil';
import StoreCard from '../StoreCard';
import FilterTab from '../FilterTab';
import NewModal from '../NewModal';
import { useState } from 'react';

interface TotalListProps {
    bestProducts: IProductsType[];
}

const ItemList = ({ bestProducts }: TotalListProps) => {
    const [ProductName] = useRecoilState(itemNameState);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="flex flex-wrap m-auto">
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
                    bestProducts.map((store, index) => (
                        <>
                            <div className="w-full border-b border-solid border-[#F5F5F5]">
                                <StoreCard key={index} store={store} />
                            </div>
                        </>
                    ))
                )}
            </div>
        </>
    );
};

export default ItemList;
