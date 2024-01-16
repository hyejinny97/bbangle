'use client';
import { useState } from 'react';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import Filters from './assets/filter.svg';
import Sort from './assets/sort.svg';

const FilterTab = () => {
    const [isChecked, setIsChecked] = useState(false); // 체크 여부 판단
    const checkHandled = () => {
        setIsChecked(!isChecked);
    };

    const navItem = ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'];
    return (
        <>
            <div className="flex gap-[6px] w-full my-[16px] overflow-x-scroll scrollbar-hide  ">
                {navItem.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className="h-[34px] flex-shrink-0 px-3 py-2 bg-white rounded-[50px] border border-gray-200 justify-center items-center gap-1 inline-flex"
                        >
                            <p className="text-neutral-800 text-xs font-medium font-['Pretendard'] leading-[18px]">
                                {item}
                            </p>
                        </button>
                    );
                })}
                <div className="absolute right-[16px] bg-white pl-[6px]">
                    <Filters />
                </div>
            </div>
            <div className="flex border w-full justify-between items-center">
                <CheckBox
                    isChecked={isChecked}
                    onClick={checkHandled}
                    title="주문가능한 상품 보기"
                />

                <div className="text-neutral-700 flex gap-[4px] text-xs font-medium">
                    <Sort />
                    추천순
                </div>
            </div>
        </>
    );
};
export default FilterTab;
