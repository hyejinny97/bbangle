'use client';

import React from 'react';

interface ButtonProps {
    title: String;
    icon: React.ReactElement;
}

const Button = ({ title, icon }: ButtonProps) => {
    return (
        <button className="flex flex-col items-center justify-center w-1/5 gap-2 cursor-pointer">
            {icon}
            <span className="text-neutral-400 text-xs font-normal leading-[18px]">{title}</span>
        </button>
    );
};
export default Button;
