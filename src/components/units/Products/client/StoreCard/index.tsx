import BtnStar from '@/components/commons/button/client/Btn_start';
import { IProductsType } from '@/components/units/Home/types';
import { useState } from 'react';

interface ProductsCardProps {
    store: IProductsType;
}

const StoreCard = ({ store }: ProductsCardProps) => {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <div className="w-[392px] h-[100px] p-4 bg-neutral-50 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-[328px] p-3.5 bg-white border-b border-neutral-100 justify-start items-center gap-2.5 inline-flex">
                <img className="w-10 h-10 rounded-md" src={String(store.thumbnail)} />
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                        <div className="grow shrink basis-0 text-neutral-800 text-sm font-semibold font-['Pretendard'] leading-[21px]">
                            {store.storeName}
                        </div>
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="w-[258px] text-neutral-500 text-xs font-normal font-['Pretendard'] leading-none">
                        {store.title}
                    </div>
                </div>
                <BtnStar isLiked={isLiked} onClick={() => setIsLiked(!isLiked)} />
            </div>
        </div>
    );
};
export default StoreCard;
