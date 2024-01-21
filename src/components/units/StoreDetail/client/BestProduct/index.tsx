'use client';
import ProductCard from '@/components/commons/card/ProductCard';
import { UseGetStoreDetialQuery } from '../../hooks/useGetStoreDetailQuery';

function BestProducts() {
    const { data } = UseGetStoreDetialQuery(1);
    console.log(data?.bestProducts);
    return (
        <>
            <div className="flex mb-[10px] m-auto space-x-[3%] gap-y-2">
                {data?.bestProducts.map((item, i) => (
                    <div key={i} className="w-1/3">
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default BestProducts;
