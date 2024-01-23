'use client';

import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import Filters from './assets/filter.svg';
import SortingButton from '../SortingButton';
import { useState } from 'react';
import NewModal from '../NewModal';
import { useRecoilState } from 'recoil';
import { modalState } from '@/atoms/atom';

interface FilterTabProps {
    onChange: (_: IQuery) => void;
    query: IQuery;
}

interface IQuery {
    category: string;
    tags: string[];
    sort: string;
}

function transformTag(tag: string): string {
    if (tag === '전체') {
        return '';
    }
    if (tag === '빵') {
        return 'BREAD';
    }
    if (tag === '쿠키') {
        return 'COOKIE';
    }
    if (tag === '케이크') {
        return 'CAKE';
    }
    if (tag === '타르트') {
        return 'TART';
    }
    if (tag === '잼/청') {
        return 'JAM';
    }
    if (tag === '요거트') {
        return 'YOGURT';
    }
    if (tag === '기타') {
        return 'ETC';
    }
    return tag;
}

const FilterTab = ({ query, onChange }: FilterTabProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [openModal, setOpenModal] = useRecoilState(modalState);
    const navItem = ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'];

    const handleItemClick = (newCategory: string) => {
        const newQuery: IQuery = { ...query, category: transformTag(newCategory) };
        setSelectedItem(newCategory);
        onChange(newQuery);
    };

    const checkHandled = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className="w-full relative ">
                <div className="flex gap-[6px] m-auto w-[92%] my-[16px] overflow-x-scroll scrollbar-hide ">
                    {navItem.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={`h-[34px] flex-shrink-0 px-3 py-2 rounded-[50px] bg-white ${
                                    selectedItem === item ? 'border-red-500' : 'border-gray-200'
                                } border  justify-center items-center gap-1 inline-flex`}
                                onClick={() => handleItemClick(item)}
                            >
                                <p
                                    className={`text-xs font-medium font-['Pretendard'] leading-[18px] ${
                                        selectedItem === item
                                            ? 'text-red-500  '
                                            : 'text-neutral-800'
                                    }`}
                                >
                                    {item}
                                </p>
                            </button>
                        );
                    })}
                </div>
                <button
                    className="absolute right-[4%] top-[16px] bg-white pl-[6px]"
                    onClick={() => setOpenModal(true)}
                >
                    <Filters />
                </button>
                <div className="border-b border-solid border-gray-100 w-full "></div>
                <div className="flex w-[92%] py-[12px] m-auto justify-between items-center ">
                    <CheckBox
                        isChecked={isChecked}
                        onClick={checkHandled}
                        title="주문가능한 상품 보기"
                    />

                    <SortingButton />
                </div>
                {openModal && (
                    <NewModal openModal={openModal} onClick={() => setOpenModal(false)} />
                )}
            </div>
        </>
    );
};

export default FilterTab;
