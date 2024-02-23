'use client';

import { useState } from 'react';
import Sort from './assets/sort.svg';

function SortingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('추천순');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
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
            <p className="text-xs font-medium text-neutral-800 "> 담은순</p>
          </button>
          <button
            className="m-auto w-full py-2.5 border-b border-neutral-100 "
            onClick={() => handleOptionClick('인기순')}
          >
            <div className="text-xs font-medium text-neutral-800"> 인기순</div>
          </button>
          <button
            className="m-auto w-full py-2.5 border-b border-neutral-100 "
            onClick={() => handleOptionClick('저가순')}
          >
            <div className="text-xs font-medium text-neutral-800 "> 저가순</div>
          </button>
        </div>
      )}
    </div>
  );
}
export default SortingButton;
