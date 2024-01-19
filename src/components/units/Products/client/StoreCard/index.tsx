import BtnStar from '@/components/commons/button/client/Btn_start';
import { IProductsType } from '@/components/units/Home/types';
import Image from 'next/image';
import { useState } from 'react';

interface ProductsCardProps {
    store: IProductsType;
}

const StoreCard = ({ store }: ProductsCardProps) => {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <div className="py-5 flex w-[92%] m-auto flex-col justify-between ">
            <div className="justify-between items-center gap-[10px] inline-flex">
                <Image
                    className="w-[40px] h-[40px] rounded-md"
                    src={String(store.thumbnail)}
                    alt="img"
                    width={300}
                    height={200}
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                        <div className="grow shrink basis-0 text-gray-900 text-sm font-semibold">
                            {store.storeName}
                        </div>
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="w-[258px] text-neutral-500 text-xs font-normal ">
                        {store.title}
                    </div>
                </div>
                <BtnStar isLiked={isLiked} onClick={() => setIsLiked(!isLiked)} />
            </div>
        </div>
    );
};
export default StoreCard;
