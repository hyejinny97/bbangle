'use client';

import React from 'react';
import BackButton from '../client/Backbutton';
import Back from '@/components/commons/header/assets/back_arrow.svg';

interface HeaderProps {
    title: String;
}

const Header = ({ title }: HeaderProps) => {
    const menu = { icon: <Back /> };

    return (
        <div className="h-[60px] flex items-center">
            <BackButton icon={menu.icon} />
            <h2 className="text-[16px]">{title}</h2>
        </div>
    );
};

export default Header;
