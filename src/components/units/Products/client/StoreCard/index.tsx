import BtnStar from '@/components/commons/button/client/Btn_start';
import Link from 'next/link';
import { useState } from 'react';

const StoreCard = ({ data }: any) => {
    const [isLiked, setIsLiked] = useState(data.isLiked);
    console.log(1111 + data);
    return (
        <Link href="/stores/1">
            <div className="py-5 m-auto flex w-full border-b border-solid border-gray-100 flex-col justify-between ">
                <div className="flex  justify-between w-[92%] m-auto items-center gap-[10px] ">
                    <div
                        className="w-[40px] h-[40px] rounded-md bg-cover bg-center flex flex-shrink-0"
                        style={{ backgroundImage: `url(${data.profile})` }}
                    ></div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                            <div className="grow shrink basis-0 text-neutral-800 text-sm font-semibold ">
                                {data.storeName}
                            </div>
                            <BtnStar isLiked={isLiked} onClick={() => setIsLiked(!isLiked)} />
                        </div>
                        <div className=" text-neutral-500 text-xs font-normal">
                            {data.introduce}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default StoreCard;
