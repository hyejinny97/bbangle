'use client';

import React, { ReactNode } from 'react';

type checkButtonprops = {
    checked: boolean;
    onChange: any;
    children: ReactNode;
};
const CheckBox = ({ checked, onChange, children }: checkButtonprops) => {
    return (
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[0rem]">
            <input
                className="w-5 h-4 p-10 shrink-0 mt-0.5 border-gray-200 rounded text-orange-600 focus:ring-orange-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-orange-600 dark:checked:border-orange-600 dark:focus:ring-offset-gray-800"
                type="checkbox"
                value=""
                id="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <div className="inline-block pl-[0.3rem] text-neutral-700 text-sm font-normal font-['Pretendard'] leading-[21px]">
                {children}
            </div>
        </div>
    );
};
export default CheckBox;
