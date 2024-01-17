'use client';
import { useState } from 'react';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import Filters from './assets/filter.svg';
import Sort from './assets/sort.svg';

const FilterTab = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index: any) => {
        setSelectedItem(index);
    };
    const checkHandled = () => {
        setIsChecked(!isChecked);
    };

    const navItem = ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'];
    return (
        <>
            <div className="flex relative gap-[6px] m-auto w-[92%] my-[16px] overflow-x-scroll scrollbar-hide ">
                {navItem.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={`h-[34px] flex-shrink-0 px-3 py-2 rounded-[50px] bg-white ${
                                selectedItem === index ? 'border-red-500' : 'border-gray-200'
                            } border  justify-center items-center gap-1 inline-flex`}
                            onClick={() => handleItemClick(index)}
                        >
                            <p
                                className={`text-xs font-medium font-['Pretendard'] leading-[18px] ${
                                    selectedItem === index ? 'text-red-500  ' : 'text-neutral-800'
                                }`}
                            >
                                {item}
                            </p>
                        </button>
                    );
                })}
                <button className="absolute right-[0px] bg-white pl-[6px]">
                    <Filters />
                </button>
            </div>
            <div className="border-b border-solid border-gray-100 w-full "></div>
            <div className="flex w-[92%] py-[12px] m-auto justify-between items-center ">
                <CheckBox
                    isChecked={isChecked}
                    onClick={checkHandled}
                    title="주문가능한 상품 보기"
                />

                {/* <button className="text-neutral-700 flex gap-[4px] text-xs font-medium">
                    <Sort />
                    추천순
                </button> */}
                <SortingButton />
            </div>
        </>
    );
};

const SortingButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('추천순');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = option => {
        setSelectedOption(option);
        setIsOpen(false);
        // 여기에 정렬을 처리하는 로직 추가
    };

    return (
        <div className="relative">
            <button
                className="text-neutral-700 relative flex gap-[4px] text-xs font-medium"
                onClick={toggleDropdown}
            >
                <Sort />
                <span className='className="text-neutral-700 flex gap-[4px] text-xs font-medium"'>
                    {selectedOption}
                </span>
            </button>
            {isOpen && (
                <div className="absolute w-[63px] top-[24px] right-0 border bg-white rounded-[10px] shadow ">
                    <button
                        className="w-full m-auto py-2.5 border-b border-neutral-100 justify-center items-center gap-2.5 inline-flex  "
                        onClick={() => handleOptionClick('담은순')}
                    >
                        <p className="text-neutral-800 text-xs font-medium "> 담은순</p>
                    </button>
                    <button
                        className="m-auto w-full py-2.5 border-b border-neutral-100 "
                        onClick={() => handleOptionClick('인기순')}
                    >
                        <div className="text-neutral-800 text-xs font-medium"> 인기순</div>
                    </button>
                    <button
                        className="m-auto w-full py-2.5 border-b border-neutral-100 "
                        onClick={() => handleOptionClick('저가순')}
                    >
                        <div className="text-neutral-800 text-xs font-medium "> 저가순</div>
                    </button>
                </div>
            )}
        </div>
    );
};

export default FilterTab;
