import Loading from '@/components/commons/Loading';
import { useGetAllStoresQuery } from '../../hooks/useGetAllStoresQuery';
import StoreCard from '../StoreCard';

function StoresTab() {
    const { data, isError, isLoading } = useGetAllStoresQuery();
    if (isLoading) {
        return (
            <div className="p-[16px]">
                <Loading />
            </div>
        );
    }
    if (isError) {
        return <div className="p-[16px]">Error</div>;
    }
    return (
        <div className="w-full">
            {data?.content.map((data, i) => <StoreCard data={data} key={i} />)}
        </div>
    );
}

export default StoresTab;
