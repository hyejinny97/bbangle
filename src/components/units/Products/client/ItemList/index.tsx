'use client';

import { isCategoryTabState } from '@/atoms/atom';
import { useRecoilState } from 'recoil';
// import StoreCard from '../StoreCard';
import FilterTab from '../FilterTab';
import { UseGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/commons/card/ProductCard';
import CategoryTab from '@/components/commons/CategoryTab';
import StoreCard from '../StoreCard';

interface IQuery {
    category: string;
    tags: string[];
    sort: string;
}

const ItemList = ({ storeData }) => {
    const [isCategoryTab] = useRecoilState(isCategoryTabState);
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
            <CategoryTab categories={['상품', '스토어']} />
            <div className="flex flex-wrap m-auto">
                {isCategoryTab ? (
                    <>
                        <FilterTab query={query} onChange={handleQuery} />
                        <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
                            {data?.content.map((product, i) => (
                                <div key={i} className="w-[48%]">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full">
                            {storeData.content.map((data, i) => (
                                <StoreCard data={data} key={i} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default ItemList;
