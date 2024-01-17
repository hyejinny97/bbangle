'use client';

import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import Filters from './assets/filter.svg';
import SortingButton from '../SortingButton';
import { useState } from 'react';
import NewModal from '../NewModal';
import { UseGetAllProductsQuery } from '../../hooks/useGetAllProductsQuery';

const FilterTab = () => {
    const [isChecked, setIsChecked] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);

    const navItem = ['전체', '빵', '쿠키', '케이크', '타르트', '잼/청', '요거트', '기타'];

    const handleItemClick = (index: any) => {
        setSelectedItem(index);
    };
    const checkHandled = () => {
        setIsChecked(!isChecked);
    };

    // const { data, error, isLoading } = UseGetAllProductsQuery({
    //     category: 'BREAD'
    // });
    // // 데이터 로딩 중 처리
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // // 에러 발생 시 처리
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }
    // console.log('0000' + data);

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
                <button
                    className="absolute right-[0px] bg-white pl-[6px]"
                    onClick={() => setOpenModal(true)}
                >
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

                <SortingButton />
            </div>
            <NewModal />
        </>
    );
};

export default FilterTab;
