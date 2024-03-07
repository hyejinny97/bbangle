'use client';

import FilterIcon from './assets/filter.svg';
import ProductSortSelect from '@/components/commons/selects/ProductSortSelect';
import { useRecoilState } from 'recoil';
import FilterModal from './FilterModal';
import { useState } from 'react';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import useModal from '@/commons/hooks/useModal';
import { filterValueState } from '../../atoms';
import { FILTER_VALUES } from '@/commons/constants/filterValues';

const FilterTab = () => {
  const [isChecked, setIsChecked] = useState(false);
  const FILTER_LIST = FILTER_VALUES.categories;

  const [filterValue, setFilterValue] = useRecoilState(filterValueState);
  const { openModal } = useModal();

  const handleFilterClick = (newCategory: string) => {
    setFilterValue(prev => ({
      ...prev,
      category: newCategory
    }));
  };

  const checkHandled = () => {
    setIsChecked(!isChecked);
  };

  const openFilterModal = () => {
    openModal(<FilterModal />);
  };

  return (
    <div className="w-full relative">
      <div className="flex gap-[6px] m-auto pr-[40px] w-[92%] my-[16px] overflow-x-scroll scrollbar-hide ">
        {FILTER_VALUES.categories.map((item, index) => {
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
        onClick={openFilterModal}
      >
        <FilterIcon />
      </button>
      <hr className="border-0 bg-gray-100" />
      <div className="flex w-[92%] py-[12px] m-auto justify-between items-center ">
        <CheckBox isChecked={isChecked} onChange={checkHandled}>
          주문가능한 상품 보기
        </CheckBox>

        <ProductSortSelect />
      </div>
    </div>
  );
};

export default FilterTab;
