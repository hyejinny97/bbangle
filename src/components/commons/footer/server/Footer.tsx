'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
    { title: '홈', icon: Home, href: '/' },
    { title: '검색', icon: Search, href: '/search' },
    { title: '전체', icon: Category, href: '/products' },
    { title: '찜', icon: Heart, href: '/wishlist' },
    { title: '마이페이지', icon: Profile, href: '/mypage' }
  ];

  return (
    <div className=" z-footer sm:w-[600px] sm:left-1/2 sm:translate-x-[-50%] py-[10px] flex justify-between fixed left-0 bottom-0 w-full bg-white border-t border-neutral-100">
      {menu.map(item => {
        const isHomePage = pathname === '/';
        const isHomeLink = item.href === '/';

        const isStorePage = pathname === '/stores';
        const isProductLink = item.href === '/products';

        let isActive = pathname.startsWith(item.href);
        if (!isHomePage && isHomeLink) {
          isActive = false;
        }
        if (isStorePage && isProductLink) {
          isActive = true;
        }

        return (
          <Link
            key={item.title}
            href={item.href}
            className="flex flex-col items-center justify-center w-1/5 gap-2 cursor-pointer"
          >
            <item.icon stroke={isActive ? PRIMARY_ORANGE_RED : GRAY_500} />
            <span
              className={`text-neutral-400 text-xs font-normal leading-[18px] ${isActive ? 'text-primaryOrangeRed' : 'text-gray-500'}`}
            >
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
