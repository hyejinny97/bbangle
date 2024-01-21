'use client';
import ProductCard from '@/components/commons/card/ProductCard';

import { UseGetStoreDetialQuery } from '../../hooks/useGetStoreDetailQuery';

function AllProducts() {
    const { data } = UseGetStoreDetialQuery(1);
    console.log(data?.store);
    return (
        <>
            <div className="flex w-full flex-wrap m-auto bg-red-500 gap-x-[4%] gap-y-2">
                {data?.allProducts.map((item, i) => (
                    <div key={i} className="w-[48%]">
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllProducts;
