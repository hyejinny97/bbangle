import BtnStar from '@/components/commons/button/client/Btn_start';
import Image from 'next/image';
import { useState } from 'react';

const StoreCard = ({ store }: any) => {
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
                <div className="inline-flex flex-col items-start justify-start grow shrink basis-0">
                    <div className="inline-flex items-center self-stretch justify-start gap-1">
                        <div className="text-sm font-semibold text-gray-900 grow shrink basis-0">
                            {store.storeName}
                        </div>
                        <div className="relative w-6 h-6"></div>
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
