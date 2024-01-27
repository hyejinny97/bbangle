'use client';

import { isCategoryTabState } from '@/atoms/atom';
import CategoryTab from '@/components/commons/CategoryTab';
import UpModal from '@/components/commons/modal/UpModal';
import StoreCard from '@/components/units/Products/client/StoreCard';
import WishButton from '@/components/units/WishList/client/WishButton';
import WishFolder from '@/components/units/WishList/client/WishFolder';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const STORE_DATA = [
    {
        storeId: 1,
        storeName: '빵그리의 오븐 노예1',
        introduce: '시켜만 주세요'
    },
    {
        storeId: 2,
        storeName: '빵그리의 오븐 노예2',
        introduce: '시켜만 주세요'
    },
    {
        storeId: 3,
        storeName: '빵그리의 오븐 노예3',
        introduce: '시켜만 주세요'
    }
];

const WishProducts = () => {
    const [isCategoryTab] = useRecoilState(isCategoryTabState);

    const [isVisible, setIsVisible] = useState(false);
    const [isAdd] = useState(false);

    const handleModalToggle = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <>
            <CategoryTab categories={['상품', '스토어']} />
            {isCategoryTab ? (
                <>
                    <div className="w-[92%] m-auto">
                        <div className="flex items-center justify-end gap-2 pt-4 pb-2.5">
                            <WishButton title="추가" onClick={handleModalToggle} />
                            <WishButton title="완료" isBlack onClick={() => {}} />
                        </div>
                        <div className="flex flex-wrap gap-x-[5%] gap-y-4">
                            <WishFolder isDefault />
                            <WishFolder />
                            <WishFolder />
                        </div>
                    </div>
                    <UpModal title="찜 폴더" isVisible={isVisible} toggleModal={handleModalToggle}>
                        <div className="w-full">
                            {isAdd ? (
                                <div className="w-[92%] m-auto flex flex-col items-end gap-2">
                                    <input
                                        type="text"
                                        style={{ outline: 'none' }}
                                        className="w-full p-3 border border-solid border-color-Gray100 rounded-[10px] text-base font-normal"
                                        placeholder="폴더명을 입력해주세요."
                                    />
                                    <div className="w-[324px] text-right">
                                        <span className="text-xs font-medium text-color-Gray900 ">
                                            9
                                        </span>
                                        <span className="text-xs font-medium text-color-G400">
                                            /12
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div></div>
                            )}

                            <button className="w-[92%] m-auto flex justify-center items-center  py-3.5 bg-color-Gray900 text-base font-medium text-color-White rounded-[50px] mt-4">
                                확인
                            </button>
                        </div>
                    </UpModal>
                </>
            ) : (
                <>
                    <div className="w-full">
                        {STORE_DATA.map((data, i) => (
                            <StoreCard data={data} key={i} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default WishProducts;
