'use client';

import { useRecoilState } from 'recoil';
import CategoryBtn from '../CategoryBtn';
import Bread from './assets/bread.svg';
import { productNameState } from '@/atoms/atom';

const categoryMenu = [
    {
        id: 1,
        category: '상품별',
        name: '전체',
        icon: <Bread />,
        url: 'all'
    },
    {
        id: 2,
        category: '상품별',
        name: '빵',
        icon: <Bread />,
        url: 'bread'
    },
    {
        id: 3,
        category: '상품별',
        name: '쿠키',
        icon: <Bread />,
        url: 'cookie'
    },
    {
        id: 4,
        category: '상품별',
        name: '케이크',
        icon: <Bread />,
        url: 'cake'
    },
    {
        id: 5,
        category: '상품별',
        name: '타르트',
        icon: <Bread />,
        url: 'tart'
    },
    {
        id: 6,
        category: '상품별',
        name: '잼/청',
        icon: <Bread />,
        url: 'jam'
    },
    {
        id: 7,
        category: '상품별',
        name: '요거트',
        icon: <Bread />,
        url: 'yogurt'
    },
    {
        id: 8,
        category: '상품별',
        name: '기타',
        icon: <Bread />,
        url: 'etc'
    },
    {
        id: 9,
        category: '성분별',
        name: '전체',
        icon: <Bread />,
        url: 'etc'
    },
    {
        id: 10,
        category: '성분별',
        name: '글루텐프리',
        icon: <Bread />,
        url: 'etc'
    },
    {
        id: 11,
        category: '성분별',
        name: '고단백',
        icon: <Bread />,
        url: 'etc'
    },
    {
        id: 12,
        category: '성분별',
        name: '무설탕',
        icon: <Bread />,
        url: 'etc'
    },
    {
        id: 13,
        category: '성분별',
        name: '비건',
        icon: <Bread />,
        url: 'etc'
    },
    {
        id: 14,
        category: '성분별',
        name: '키토제닉',
        icon: <Bread />,
        url: 'etc'
    }
];

const CategoryList = () => {
    const [ProductName] = useRecoilState(productNameState);

    return (
        <div className="flex flex-wrap w-full p-4">
            {categoryMenu
                .filter(category => category.category === ProductName)
                .map(category => (
                    <CategoryBtn
                        key={category.id}
                        name={category.name}
                        icon={category.icon}
                        url={category.url}
                        ProductName={ProductName}
                    />
                ))}
        </div>
    );
};

export default CategoryList;
