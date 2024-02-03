'use client';

import React from 'react';
import Back from '@/components/commons/header/assets/back_arrow.svg';

interface HeaderProps {
    title: String;
}

const Header = ({ title }: HeaderProps) => {
    const goBackHandler = () => {
        window.history.back();
    };

    return (
        <div className="h-[60px] flex items-center">
            <button className="flex cursor-pointer mx-[17px] " onClick={goBackHandler}>
                <Back />
            </button>
            <h2 className="text-[16px]">{title}</h2>
        </div>
    );
};

export default Header;
