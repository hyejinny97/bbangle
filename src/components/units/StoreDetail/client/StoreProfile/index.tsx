'use client';

import BtnStar from '@/components/commons/button/client/Btn_start';
import { useState } from 'react';
import { IStoreDetailType } from '../../types';

interface StoreProfileProps {
    data: IStoreDetailType;
}

function StoreProfile({ data }: StoreProfileProps) {
    const [isLiked, setIsLiked] = useState(data?.store?.isWished || false);
    return (
        <div className="flex flex-col justify-center items-center gap-[10px]">
            <div
                className="w-[46px] h-[46px] bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${data?.store.profile})` }}
            ></div>
            <div className=" flex flex-col gap-[4px]">
                <div className="w-full flex items-center justify-center gap-[2px]">
                    <div className="text-neutral-800 text-base font-semibold">
                        {data?.store.storeName}
                    </div>
                    <BtnStar isLiked={isLiked} onClick={() => setIsLiked(!isLiked)} />
                </div>
                <p className="text-center text-neutral-500 text-xs font-normal">
                    {data?.store.introduce}
                </p>
            </div>
        </div>
    );
}

export default StoreProfile;
