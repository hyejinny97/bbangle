import { MouseEvent } from 'react';

interface TabButtonProps {
  handleClickBtn: (_e: MouseEvent<HTMLButtonElement>) => void;
  name: string;
  ProductName: string;
  isCategoryTab: boolean;
}

const TabButton = ({ name, ProductName, handleClickBtn }: TabButtonProps) => {
  return (
    <button
      className="inline-flex flex-col items-start self-stretch justify-start grow shrink basis-0"
      onClick={handleClickBtn}
      name={name}
    >
      <div className="self-stretch grow shrink basis-0 py-2.5 justify-center items-center inline-flex">
        <div
          className={`${
            ProductName === name
              ? 'text-color-Gray900 font-medium'
              : 'text-color-Gray500 font-nomal'
          } text-sm leading-[21px]`}
        >
          {name}
        </div>
      </div>
    </button>
  );
};

export default TabButton;
