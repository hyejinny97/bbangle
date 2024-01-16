import React, { MouseEvent } from 'react';
import Off from '../assets/icn_check_off.svg';
import On from '../assets/icn_check_on.svg';

interface CheckBoxProps {
    isChecked: boolean;
    title: string;
    onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

function CheckBox({ isChecked, title, onClick }: CheckBoxProps) {
    return (
        <div className="flex">
            <button onClick={onClick}>
                <div>{isChecked ? <On /> : <Off />}</div>
            </button>
            <div className="text-gray-800 text-sm font-normal pl-[0.3rem] ">{title}</div>
        </div>
    );
}

export default CheckBox;
