'use client';

import { isCategoryTabState } from '@/atoms/atom';
import { useRecoilState } from 'recoil';
// import StoreCard from '../StoreCard';
import FilterTab from '../FilterTab';
import { UseGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/commons/card/ProductCard';
import CategoryTab from '@/components/commons/CategoryTab';

interface IQuery {
    category: string;
    tags: string[];
    sort: string;
}

const DetailProducts = () => {
    const [isCategoryTab] = useRecoilState(isCategoryTabState);
    const [query, setQuery] = useState<IQuery>({
        category: '',
        tags: [],
        sort: ''
    });

    useEffect(() => {
        // 쿠키 가져오기
        const cookies = document.cookie;

        // 콘솔에 쿠키 출력
        console.log('쿠키:', cookies);
    }, []);

    const handleQuery = (newQuery: IQuery) => {
        setQuery(newQuery);
    };
    const { data, refetch } = UseGetAllProductsQuery(query);

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
                                <ProductCard key={i} product={product} />
                            ))}
                        </div>
                    </>
                ) : (
                    <>스토어</>
                )}
            </div>
        </>
    );
};

export default DetailProducts;
