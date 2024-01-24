'use client';

import { isCategoryTabState, modalState } from '@/atoms/atom';
import { useRecoilState } from 'recoil';
import FilterTab from '../FilterTab';
import { UseGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/commons/card/ProductCard';
import CategoryTab from '@/components/commons/CategoryTab';
import StoreCard from '../StoreCard';
import { IStoreType } from '@/commons/types/storeType';
import NewModal from '../NewModal';

interface IQuery {
    category: string;
    tags: string[];
    sort: string;
}

interface storeDataProp {
    storeData: IStoreType[];
}
const ItemList = ({ storeData }: storeDataProp) => {
    const [isCategoryTab] = useRecoilState(isCategoryTabState);
    const openModal = useRecoilState(modalState);
    const [query, setQuery] = useState<IQuery>({
        category: '',
        tags: [],
        sort: ''
    });
    const { data, refetch } = UseGetAllProductsQuery(query);
    const itemData = data?.content;

    const handleQuery = (newQuery: IQuery) => {
        setQuery(newQuery);
    };

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
                            {itemData?.map((product, i) => (
                                <div key={i} className="w-[48%]">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full">
                            {storeData.map((data, i) => (
                                <StoreCard data={data} key={i} />
                            ))}
                        </div>
                    </>
                )}
            </div>
            {openModal && <NewModal />}
        </>
    );
};

export default ItemList;
