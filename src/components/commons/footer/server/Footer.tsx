'use client';

import Button from '../client/Button';
import Category from '@/components/commons/footer/assets/category.svg';
import Heart from '@/components/commons/footer/assets/heart.svg';
import Profile from '@/components/commons/footer/assets/profile.svg';
import Search from '@/components/commons/footer/assets/search.svg';
import Home from '@/components/commons/footer/assets/home.svg';

const Footer = () => {
    // 나중에 따로 뺄거
    const menu = [
        { title: '홈', icon: <Home /> },
        { title: '검색', icon: <Search /> },
        { title: '전체', icon: <Category /> },
        { title: '찜', icon: <Heart /> },
        { title: '마이페이지', icon: <Profile /> }
    ];

    return (
        <div className="sm:w-[600px] sm:left-1/2 sm:translate-x-[-50%] py-[10px] flex justify-between fixed left-0 bottom-0 w-full bg-white border-t border-neutral-100 z-[100]">
            {menu.map((item, index) => (
                <Button key={index} title={item.title} icon={item.icon} />
            ))}
        </div>
    );
};

export default Footer;
