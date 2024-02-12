'use client';

import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import Filters from './assets/filter.svg';
import SortingButton from '../SortingButton';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryItems, filterValueState, modalState } from '@/atoms/atom';
import { UseGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import { transformIngredientTag, transformTag } from '@/commons/constants/transfromTag';

const FilterTab = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [openModal, setOpenModal] = useRecoilState(modalState);
    const [filterValue, setFilterValue] = useRecoilState(filterValueState);
    const filterItem = useRecoilValue(categoryItems);
    const [newFilterItem, setNewFilterItem] = useState(filterItem);
    const { data, refetch } = UseGetAllProductsQuery(filterValue);

    const handleItemClick = (newCategory: string) => {
        setFilterValue(prevObject => ({
            ...prevObject,
            category: transformTag(newCategory)
        }));
        console.log(newCategory);
    };

    const checkHandled = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        console.log(data);
        refetch();
        if (filterValue.tags) {
            const newTag = `${transformIngredientTag(filterValue.tags[0])} ${
                filterValue.tags.length > 1 ? `외 ${filterValue.tags.length - 1}` : ''
            }`;
            if (!newFilterItem.includes(newTag)) {
                setNewFilterItem(prevItems => {
                    return [newTag, ...prevItems]; // newTag 추가
                });
            }
            setNewFilterItem(prevItems => {
                const updatedItems = filterItem.filter(item => item !== prevItems[0]);
                return [newTag, ...updatedItems];
            });
        }
    }, [data, filterValue, filterItem, newFilterItem, refetch]);

    return (
        <>
            <div className="w-full relative ">
                <div className="flex gap-[6px] m-auto pr-[40px] w-[92%] my-[16px] overflow-x-scroll scrollbar-hide ">
                    {newFilterItem.map((item, index) => {
                        const isTagActive = filterValue.category === transformTag(item);
                        const isNewTag = newFilterItem[0] !== '전체' && item === newFilterItem[0];

                        return (
                            <button
                                key={index}
                                className={`h-[34px] flex-shrink-0 px-3 py-2 rounded-[50px] bg-white ${
                                    isTagActive || isNewTag ? 'border-red-500' : 'border-gray-200'
                                } border justify-center items-center gap-1 inline-flex`}
                                onClick={() => handleItemClick(item)}
                                disabled={isNewTag}
                            >
                                <p
                                    className={`text-xs font-medium font-['Pretendard'] leading-[18px] ${
                                        isTagActive || isNewTag
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
                    onClick={() => setOpenModal(!openModal)}
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
            </div>
        </>
    );
};

export default FilterTab;
