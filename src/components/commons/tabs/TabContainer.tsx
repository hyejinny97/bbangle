'use client';

import TabButton from '@/components/commons/tabs/TabButton';

interface TabContainerProps {
  names: Array<string>;
  activeTabIdx: number;
  onChange: (_activeTabIdx: number) => void;
}

const FIRST_IDX = 0;

const TabContainer = ({ names, activeTabIdx, onChange }: TabContainerProps) => {
  return (
    <div className="w-full h-[43px] bg-white justify-start items-start inline-flex relative">
      {names.map((name, idx) => (
        <TabButton
          key={name}
          name={name}
          isActive={activeTabIdx === idx}
          onClick={() => onChange(idx)}
        />
      ))}

      <div className="w-full h-0.5 bg-color-Gray100 flex absolute left-0 bottom-0">
        <div
          className={`w-1/2  h-0.5 bg-[#7E7475] duration-[0.5s] transform ${
            activeTabIdx === FIRST_IDX ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
      </div>
    </div>
  );
};

export default TabContainer;
