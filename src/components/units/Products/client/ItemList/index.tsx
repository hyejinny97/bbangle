'use client';

import { itemNameState } from '@/atoms/atom';
import ProductsCard from '@/components/units/Home/client/ProductCard';
import { IProductsType } from '@/components/units/Products/types';
import { useRecoilState } from 'recoil';
import StoreCard from '../StoreCard';
import FilterTab from '../FilterTab';
import { UseGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import { useEffect, useState } from 'react';

interface TotalListProps {
    bestProducts: IProductsType[];
}
interface IQuery {
    category: string;
    tags: string[];
    sort: string;
}

const ItemList = ({ bestProducts }: TotalListProps) => {
    const [ProductName] = useRecoilState(itemNameState);
    const [query, setQuery] = useState<IQuery>({
        category: '',
        tags: [],
        sort: ''
    });

    const handleQuery = (newQuery: IQuery) => {
        setQuery(newQuery);
    };
    const { data, refetch } = UseGetAllProductsQuery(query);
    console.log(data.content);

    useEffect(() => {
        refetch();
    }, [query, refetch]);

    return (
        <>
            <div className="flex flex-wrap m-auto">
                {ProductName === '상품' ? (
                    <>
                        <FilterTab query={query} onChange={handleQuery} />
                        <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
                            {data?.content?.map((product, i) => (
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
