import React, { MouseEvent, ReactNode } from 'react';
import Off from '../assets/icn_check_off.svg';
import On from '../assets/icn_check_on.svg';

interface CheckBoxProps {
    isChecked: boolean;
    title: ReactNode;
    onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

function CheckBox({ isChecked, title, onClick }: CheckBoxProps) {
    return (
        <div className="flex">
            <button type="button" onClick={onClick}>
                <div>{isChecked ? <On /> : <Off />}</div>
            </button>
            <div className="text-gray-800 text-xs font-normal pl-[0.5rem] ">{title}</div>
        </div>
    );
}

export default CheckBox;
