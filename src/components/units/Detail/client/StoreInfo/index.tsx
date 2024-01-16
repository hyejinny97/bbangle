'use client';
import BtnStar from '@/components/commons/button/client/Btn_start';
import Image from 'next/image';
import { useState } from 'react';
import { IProductDetailType } from '../../types';

interface ProductsProps {
    store: IProductDetailType['store'];
}

function StoreInfo({ store }: ProductsProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <>
            <div className="py-[13.5px] w-[92%] m-auto flex items-center justify-between ">
                <div className="gap-[6px] items-center flex">
                    <div className="rounded-full overflow-hidden">
                        <Image src={store.profile} width={24} height={24} alt="설명" />
                    </div>
                    <div className="text-[#757575] text-[14px]">{store.name}</div>
                </div>
                <BtnStar isLiked={isLiked} onClick={() => setIsLiked(!isLiked)} />
            </div>
        </>
    );
}
export default StoreInfo;
