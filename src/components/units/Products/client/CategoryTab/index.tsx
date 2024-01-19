'use client';

import { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { itemName, itemNameState } from '@/atoms/atom';
import TabButton from '../TabButton';

const CATEGORY_TAB = [
    { id: 1, name: '상품' },
    { id: 2, name: '스토어' }
];

const CategoryTab = () => {
    const [ProductName, setProductName] = useRecoilState(itemNameState);
    const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
        setProductName(e.currentTarget.name);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="sticky top-0 z-10">
            <div className="w-full h-[43px] bg-white justify-start items-start inline-flex relative">
                {CATEGORY_TAB.map(tab => (
                    <TabButton
                        key={tab.id}
                        name={tab.name}
                        handleClickBtn={handleClickBtn}
                        ProductName={ProductName}
                    />
                ))}

                <div className="w-full h-0.5 bg-gray-200 flex absolute left-0 bottom-0">
                    <div
                        className={`w-1/2  h-0.5 opacity-30 bg-stone-600 duration-[0.5s] transform ${
                            ProductName === itemName ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};
export default CategoryTab;
