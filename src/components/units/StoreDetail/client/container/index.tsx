'use client';

import { useParams } from 'next/navigation';
import { UseGetStoreDetialQuery } from '../../hooks/useGetStoreDetailQuery';
import StoreProfile from '../StoreProfile';
import AllProducts from '../AllProduct';
import BestProducts from '../BestProduct';
import Loading from '@/components/commons/Loading';

const DetailContainer = () => {
    const params = useParams();
    const { data } = UseGetStoreDetialQuery(Number(params.id));
    if (!data) {
        return (
            <div className="w-[92%] mx-atuo p-[16px]">
                <Loading />
            </div>
        );
    }
    return (
        <div className="w-full">
            <div className="border-b-4 w-full mx-auto pb-[16px] border-solid border-gray-100">
                <StoreProfile data={data} />
            </div>
            <div className="w-full border-b border-solid border-gray-100 py-[16px] ">
                <div className="w-[92%] m-auto">
                    <div className="text-gray-800 text-sm mb-[10px] font-semibold">인기상품</div>
                    <BestProducts data={data} />
                </div>
            </div>
            <div className="w-[92%] m-auto py-[16px]">
                <div className="text-gray-800 text-sm mb-[10px] font-semibold">전체상품</div>
                <AllProducts data={data} />
            </div>
        </div>
    );
};
export default DetailContainer;
