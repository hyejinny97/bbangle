'use client';

import BtnStar from '@/components/commons/button/client/Btn_start';
import { useState } from 'react';
import { UseGetStoreDetialQuery } from '../../hooks/useGetStoreDetailQuery';

function StoreProfile() {
    const { data } = UseGetStoreDetialQuery(1);
    const store = data?.store;
    const [isLiked, setIsLiked] = useState(store?.isWished || false);
    return (
        <div className="flex flex-col justify-center items-center gap-[10px]">
            <div
                className="w-[46px] h-[46px] bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${data?.store.profile})` }}
            ></div>
            <div className=" flex flex-col gap-[4px]">
                <div className="w-full flex items-center justify-center gap-[2px]">
                    <div className="text-neutral-800 text-base font-bold">{store?.storeName} </div>
                    <BtnStar isLiked={isLiked} onClick={() => setIsLiked(!isLiked)} />
                </div>
                <p className="text-center text-neutral-500 text-xs font-normal">
                    {store?.introduce}
                </p>
            </div>
        </div>
    );
}

export default StoreProfile;
