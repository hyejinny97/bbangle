'use client';

import ProductCard from '@/components/commons/card/ProductCard';
import FilterSelect from '@/components/commons/selects/FilterSelect';
import { useWishProductListQuery } from '@/components/units/WishListDetail/hooks/useWishProductsListQuery';

const FILTER_DATA = [
    { name: 'aaa', value: '담은순' },
    { name: 'aaa', value: '인기순' },
    { name: 'aaa', value: '저가순' }
];

interface WishDetailProps {
    folderId: number;
}

const WishDetail = ({ folderId }: WishDetailProps) => {
    const { data: wishProductList } = useWishProductListQuery(folderId);
    return (
        <div className="w-[92%]">
            <div className="mb-5">
                <FilterSelect datas={FILTER_DATA} />
            </div>
            <div className="flex flex-wrap w-full  m-auto gap-x-[4%] gap-y-4">
                {wishProductList?.content?.map((product, i) => (
                    <div key={i} className="w-[48%]">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishDetail;
