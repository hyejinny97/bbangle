import ProductCard from '@/components/commons/card/ProductCard';
import { UseGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import { filterValueState } from '@/atoms/atom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

function ProductsTab() {
    const [filterValue] = useRecoilState(filterValueState);
    const { data, refetch, isError, isLoading } = UseGetAllProductsQuery(filterValue);

    useEffect(() => {
        refetch();
    }, [filterValue, refetch]);

    if (isLoading) {
        return <div className="p-[16px]">Loading...</div>;
    }
    if (isError) {
        return <div className="p-[16px]">Error</div>;
    }

    return (
        <div className="flex flex-wrap w-[92%] m-auto gap-x-[4%] gap-y-4">
            {data?.content.map((product, i) => (
                <div key={i} className="w-[48%]">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductsTab;
