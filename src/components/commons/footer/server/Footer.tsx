'use client';

import { usePathname } from 'next/navigation';
import Button from '../client/Button';
import Category from '@/components/commons/footer/assets/category.svg';
import Heart from '@/components/commons/footer/assets/heart.svg';
import Profile from '@/components/commons/footer/assets/profile.svg';
import Search from '@/components/commons/footer/assets/search.svg';
import Home from '@/components/commons/footer/assets/home.svg';

const GRAY_500 = '#9E9E9E';
const PRIMARY_ORANGE_RED = '#ED5F5F';

const Footer = () => {
  const pathname = usePathname();

  // 나중에 따로 뺄거
  const menu = [
    { title: '홈', icon: Home, page: '/' },
    { title: '검색', icon: Search, page: '/search' },
    { title: '전체', icon: Category, page: '/products' },
    { title: '찜', icon: Heart, page: '/wishlist' },
    { title: '마이페이지', icon: Profile, page: '/mypage' }
  ];

  return (
    <div className="sm:w-[600px] sm:left-1/2 sm:translate-x-[-50%] py-[10px] flex justify-between fixed left-0 bottom-0 w-full bg-white border-t border-neutral-100 z-[100]">
      {menu.map((item, index) => {
        const isHomePage = pathname === '/';
        const isHomeLink = item.page === '/';

        const isStorePage = pathname === '/stores';
        const isProductLink = item.page === '/products';

        let isActive = pathname.startsWith(item.page);
        if (!isHomePage && isHomeLink) {
          isActive = false;
        }
        if (isStorePage && isProductLink) {
          isActive = true;
        }

        return (
          <Button
            key={index}
            title={item.title}
            icon={<item.icon stroke={isActive ? PRIMARY_ORANGE_RED : GRAY_500} />}
            page={item.page}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default Footer;
