'use client';

import { useState } from 'react';
import DownBtn from './assets/downBtn.svg';

interface FilterSelectProps {
  datas: DataObject[];
}

interface DataObject {
  [key: string]: string;
}

const FilterSelect = ({ datas }: FilterSelectProps) => {
  const [isView, setIsView] = useState(false);

  const handleClickSelect = () => {
    setIsView(prev => !prev);
  };

  return (
    <div className="w-[95px] relative ">
      <div
        className="w-full flex items-center justify-center gap-2 p-2 border border-solid border-color-Gray200 rounded-[50px] text-xs font-medium cursor-pointer "
        onClick={handleClickSelect}
      >
        <span>{datas[0].value}</span>
        <div className={`${isView ? 'rotate-180 transition-all' : ''}`}>
          <DownBtn />
        </div>
      </div>
      {isView && (
        <div className="absolute flex flex-col w-full top-[34px] z-[101] rounded-[10px] shadow bg-color-White">
          {datas.map((data, index) => (
            <button
              name={data.name}
              key={index}
              className={`w-full border-solid border-color-Gray100 p-[10px] block m-auto ${
                index !== datas.length - 1 ? 'border-b ' : 'not:last-child:border-b'
              }`}
            >
              {data.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSelect;
