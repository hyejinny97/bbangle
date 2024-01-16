'use client';

import { MouseEvent } from 'react';
import TabButton from '../TabButton.tsx';
import { useRecoilState } from 'recoil';
import { categoryName, productNameState } from '@/atoms/atom';

interface CategoryTabProps {
    categories: string[];
}

const CategoryTab = ({ categories }: CategoryTabProps) => {
    const [ProductName, setIsProductName] = useRecoilState(productNameState);
    const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
        const buttonName = e.currentTarget.name;
        setIsProductName(buttonName);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="sticky top-[60px]">
            <div className="w-full h-[43px] bg-white justify-start items-start inline-flex relative">
                {categories.map((tab, index) => (
                    <TabButton
                        key={index}
                        name={tab}
                        handleClickBtn={handleClickBtn}
                        ProductName={ProductName}
                    />
                ))}

                <div className="w-full h-0.5 bg-color-Gray100 flex absolute left-0 bottom-0">
                    <div
                        className={`w-1/2  h-0.5 bg-color-Gray900 duration-[0.5s] transform ${
                            ProductName === categoryName ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default CategoryTab;
