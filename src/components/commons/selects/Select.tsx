'use client';

import { useState, useEffect } from 'react';
import DownBtn from '@/components/commons/selects/assets/downBtn.svg';

interface SelectProps {
  options: Array<string>;
  selectedOption: string;
  onChange: (_selectedOption: string) => void;
}

const Select = ({ options, selectedOption, onChange }: SelectProps) => {
  const [isExpended, setIsExpended] = useState(false);

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      const clickedTarget = e.target;
      if (clickedTarget instanceof Element && clickedTarget.closest('.selectEl')) return;

      setIsExpended(false);
    };
    window.addEventListener('click', handleWindowClick);

    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  const handleSelectClick = () => {
    setIsExpended(!isExpended);
  };

  return (
    <div
      className="selectEl relative inline-block text-gray-900 text-xs font-medium"
      onClick={handleSelectClick}
    >
      <div className="flex items-center p-[8px] pl-[12px] border-solid border-[1px] border-gray-200 rounded-[50px] cursor-pointer">
        <span className="mr-[4px]">{selectedOption}</span>
        <span className={`${isExpended ? 'rotate-180 transition-all' : ''}`}>
          <DownBtn />
        </span>
      </div>
      {isExpended && (
        <ul className="absolute mt-1 top-full z-[101] rounded-[10px] shadow bg-color-White">
          {options.map((option, index) => {
            const firstOption = index === 0;
            const lastOption = index === options.length - 1;

            const borderStyle = lastOption ? 'border-b-0' : 'border-b-[1px]';
            const hoverRoundedStyle = firstOption
              ? 'hover:rounded-t-[10px]'
              : lastOption
                ? 'hover:rounded-b-[10px]'
                : '';

            return (
              <li
                key={option}
                onClick={() => onChange(option)}
                className={`px-[16px] py-[10px] border-gray-100 cursor-pointer hover:bg-gray-50 ${borderStyle} ${hoverRoundedStyle}`}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
