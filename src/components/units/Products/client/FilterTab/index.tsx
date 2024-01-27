'use client';

import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import Filters from './assets/filter.svg';
import SortingButton from '../SortingButton';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { filterValueState, modalState } from '@/atoms/atom';
import { UseGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';
import { transformTag } from '@/commons/constants/transfromTag';

interface FilterTabProps {
    navItem: string[];
}

const FilterTab = ({ navItem }: FilterTabProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [openModal, setOpenModal] = useRecoilState(modalState);
    const [filterValue, setFilterValue] = useRecoilState(filterValueState);
    const { data, refetch } = UseGetAllProductsQuery(filterValue);

    const handleItemClick = (newCategory: string) => {
        setSelectedItem(newCategory);
        setFilterValue(prevObject => ({
            ...prevObject,
            category: transformTag(newCategory)
        }));
    };

    const checkHandled = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        console.log(data);
        console.log(11111111 + JSON.stringify(filterValue));
        refetch();
    }, [selectedItem, refetch, filterValue]);

    return (
        <>
            <div className="w-full relative ">
                <div className="flex gap-[6px] m-auto pr-[40px] w-[92%] my-[16px] overflow-x-scroll scrollbar-hide ">
                    {navItem.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={`h-[34px] flex-shrink-0 px-3 py-2 rounded-[50px] bg-white ${
                                    filterValue.category === transformTag(item)
                                        ? 'border-red-500'
                                        : 'border-gray-200'
                                } border  justify-center items-center gap-1 inline-flex`}
                                onClick={() => handleItemClick(item)}
                            >
                                <p
                                    className={`text-xs font-medium font-['Pretendard'] leading-[18px] ${
                                        filterValue.category === transformTag(item)
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
