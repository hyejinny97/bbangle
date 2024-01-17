'use client';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import { useState } from 'react';
import Filter from '@/components/commons/filter/assets/filter.svg';
import FilterModal from '@/components/commons/modal/FilterModal';
import { IFilterType, navItem } from '@/components/commons/modal/type';

const FilterTab = () => {
    const [checked, setChecked] = useState<boolean>(false); // 체크 여부 판단
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedTags, setSelectedTags] = useState<IFilterType[]>(navItem);
    const checkHandled = (e: any) => {
        console.log(e.target.checked);
        setChecked(e.target.checked);
    };
    const setModalIs = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className="flex overflow-x-scroll pl-3 pt-3 scrollbar-hide">
                {selectedTags.map((item: IFilterType, index) => {
                    return item.subTab.map(sub => {
                        return (
                            <button
                                onClick={setModalIs}
                                key={index}
                                className="flex w-[50px] h-[30px] items-center justify-center overflow-hidden whitespace-nowrap border-2 px-6 py-3 rounded-full text-xs font-medium m-2"
                            >
                                <h2>{sub.name}</h2>
                            </button>
                        );
                    });
                })}
            </div>
            <div className="w-[92%] h-15 m-auto py-3 justify-between items-end flex">
                <CheckBox
                    checked={checked}
                    onChange={checkHandled}
                    children="주문가능한 상품 보기"
                />
                <div className="w-[54px] h-[25px] justify-start items-center gap-1 inline-flex">
                    <Filter />
                    <div className="text-neutral-700 text-xs font-medium font-['Pretendard'] leading-[21px]">
                        추천순
                    </div>
                </div>
            </div>
            {isModalOpen === true ? (
                <FilterModal
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            ) : null}
        </>
    );
};
export default FilterTab;
