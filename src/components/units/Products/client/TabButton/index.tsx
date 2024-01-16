import { MouseEvent } from 'react';

interface TabButtonProps {
    handleClickBtn: (_e: MouseEvent<HTMLButtonElement>) => void;
    name: string;
    ProductName: string;
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
                            ? 'text-stone-600 font-medium'
                            : 'text-neutral-400 font-nomal'
                    } text-sm font-['Pretendard'] leading-[21px]`}
                >
                    {name}
                </div>
            </div>
        </button>
    );
};

export default TabButton;
