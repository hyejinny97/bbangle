'use client';

import { isCategoryTabState } from '@/atoms/atom';
import CategoryTab from '@/components/commons/CategoryTab';
import WishButton from '@/components/units/WishList/client/WishButton';
import WishFolder from '@/components/units/WishList/client/WishFolder';
import { useRecoilState } from 'recoil';

const WishProducts = () => {
    const [isCategoryTab] = useRecoilState(isCategoryTabState);

    return (
        <>
            <CategoryTab categories={['상품', '스토어']} />
            {isCategoryTab ? (
                <div className="w-[92%] m-auto">
                    <div className="flex items-center justify-end gap-2 pt-4 pb-2.5">
                        <WishButton title="추가" onClick={() => {}} />
                        <WishButton title="완료" isBlack onClick={() => {}} />
                    </div>
                    <div className="flex flex-wrap gap-x-[5%] gap-y-4">
                        <WishFolder isDefault />
                        <WishFolder />
                        <WishFolder />
                    </div>
                </div>
            ) : (
                <div>스토어 찜</div>
            )}
        </>
    );
};

export default WishProducts;
