'use client';

import Filters from './assets/filter.svg';
import SortingButton from '../SortingButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryItems, filterValueState } from '@/atoms/atom';
import FilterModal from '../FilterModal';
import { useState } from 'react';

const FilterTab = () => {
    const FILTER_LIST = useRecoilValue(categoryItems);
    const [filterValue, setFilterValue] = useRecoilState(filterValueState);
    const [modalVisible, setModalVisible] = useState(false);

    const handleFilterClick = (newCategory: string) => {
        setFilterValue(prev => ({
            ...prev,
            category: newCategory
        }));
    };

    return (
        <div className="w-full relative">
            <div className="flex gap-[6px] m-auto pr-[40px] w-[92%] my-[16px] overflow-x-scroll scrollbar-hide ">
                {FILTER_LIST.map((item, index) => {
                    const isTagActive = filterValue.category === item;
                    const isNewTag = FILTER_LIST[0] !== '전체';

                    return (
                        <button
                            key={index}
                            className={`h-[34px] flex-shrink-0 px-3 py-2 rounded-[50px] bg-white ${
                                isTagActive || isNewTag ? 'border-red-500' : 'border-gray-200'
                            } border justify-center items-center gap-1 inline-flex`}
                            onClick={() => handleFilterClick(item)}
                            disabled={isNewTag}
                        >
                            <p
                                className={`text-xs font-medium font-['Pretendard'] leading-[18px] ${
                                    isTagActive || isNewTag ? 'text-red-500  ' : 'text-neutral-800'
                                }`}
                            >
                                {item}
                            </p>
                        </button>
                    );
                })}
            </div>
            <button
                className="absolute right-[3%] top-[16px] bg-white pl-[6px]"
                onClick={() => setModalVisible(true)}
            >
                <Filters />
            </button>
            <div className="border-b border-solid border-gray-100 w-full "></div>
            <div className="flex w-[92%] py-[12px] m-auto justify-between items-center ">
                <SortingButton />
            </div>
            <FilterModal isVisible={modalVisible} setVisible={setModalVisible} />
        </div>
    );
};

export default FilterTab;
