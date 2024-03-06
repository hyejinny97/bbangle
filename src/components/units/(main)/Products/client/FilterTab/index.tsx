'use client';

import Filters from './assets/filter.svg';
import SortingButton from '../SortingButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryItems, filterValueState } from '@/atoms/atom';
import FilterModal from './FilterModal';
import { useState } from 'react';

import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import useModal from '@/commons/hooks/useModal';

const FilterTab = () => {
  const [isChecked, setIsChecked] = useState(false);
  const FILTER_LIST = useRecoilValue(categoryItems);
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

  // useEffect(() => {
  //     if (filterValue.tags) {
  //         const newTag = `${transformIngredientTag(filterValue.tags[0])} ${
  //             filterValue.tags.length > 1 ? `외 ${filterValue.tags.length - 1}` : ''
  //         }`;
  //         if (!newFilterItem.includes(newTag)) {
  //             setNewFilterItem(prevItems => {
  //                 return [newTag, ...prevItems];
  //             });
  //         }
  //         setNewFilterItem(prevItems => {
  //             const updatedItems = filterItem.filter(item => item !== prevItems[0]);
  //             return [newTag, ...updatedItems];
  //         });
  //     }
  // }, [filterValue, filterItem, newFilterItem]);

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
        onClick={openFilterModal}
      >
        <Filters />
      </button>
      <hr className="border-0 bg-gray-100" />
      <div className="flex w-[92%] py-[12px] m-auto justify-between items-center ">
        <CheckBox isChecked={isChecked} onChange={checkHandled}>
          주문가능한 상품 보기
        </CheckBox>

        <SortingButton />
      </div>
    </div>
  );
};

export default FilterTab;
