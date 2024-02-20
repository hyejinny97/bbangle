import ProductCard from '@/components/commons/card/ProductCard';
import { useGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import { filterValueState } from '@/atoms/atom';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import Loading from '@/components/units/Loading/client';

function ProductsTab() {
    const filterValue = useRecoilValue(filterValueState);
    const { data, refetch, isError, isLoading } = useGetAllProductsQuery(filterValue);

    useEffect(() => {
        refetch();
    }, [filterValue, refetch]);

    if (isLoading) {
        return <Loading />;
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
