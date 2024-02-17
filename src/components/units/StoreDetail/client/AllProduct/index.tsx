'use client';
import ProductCard from '@/components/commons/card/ProductCard';
import { IProductType } from '@/commons/types/productType';
import { IStoreType } from '@/commons/types/storeType';

interface AllProductProps {
    data: {
        allProducts: IProductType[];
        store: IStoreType;
    };
}

function AllProducts({ data }: AllProductProps) {
    console.log(data);
    return (
        <>
            <div className="flex w-full flex-wrap m-auto gap-x-[4%] gap-y-4">
                {data.allProducts.map((item, i) => (
                    <div key={i} className="w-[48%]">
                        <ProductCard product={item} storeData={data?.store} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllProducts;
