'use client';

import { MouseEvent } from 'react';
import TabButton from '../TabButton.tsx';
import { useRecoilState } from 'recoil';
import { categoryName, productNameState } from '@/atoms/atom.ts';

const CATEGORY_TAB = [
    { id: 1, name: '상품별' },
    { id: 2, name: '성분별' }
];

const CategoryTab = () => {
    const [ProductName, setIsProductName] = useRecoilState(productNameState);
    const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
        const buttonName = e.currentTarget.name;
        setIsProductName(buttonName);
    };

    return (
        <div>
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
                            ProductName === categoryName ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default CategoryTab;
