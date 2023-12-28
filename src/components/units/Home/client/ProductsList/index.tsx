'use client';

import { useRecoilState } from 'recoil';
import ProductsCard from '../ProductCard';
import { productNameState } from '@/atoms/atom';

const bestProductsData = [
    {
        id: 1,
        category: '상품별',
        productImg: '/assets/breadImg.jpeg',
        productName: '고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 2,
        category: '상품별',
        productImg: '/assets/breadImg.jpeg',
        productName: '고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 3,
        category: '상품별',
        productImg: '/assets/breadImg.jpeg',
        productName: '고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 4,
        category: '상품별',
        productImg: '/assets/breadImg.jpeg',
        productName: '고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 5,
        category: '상품별',
        productImg: '/assets/breadImg.jpeg',
        productName: '고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 6,
        category: '상품별',
        productImg: '/assets/breadImg.jpeg',
        productName: '고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 7,
        category: '성분별',
        productImg: '/assets/breadImg.jpeg',
        productName: '[성분]고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 8,
        category: '성분별',
        productImg: '/assets/breadImg.jpeg',
        productName: '[성분]고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 9,
        category: '성분별',
        productImg: '/assets/breadImg.jpeg',
        productName: '[성분]고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 10,
        category: '성분별',
        productImg: '/assets/breadImg.jpeg',
        productName: '[성분]고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 11,
        category: '성분별',
        productImg: '/assets/breadImg.jpeg',
        productName: '[성분]고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    },
    {
        id: 12,
        category: '성분별',
        productImg: '/assets/breadImg.jpeg',
        productName: '[성분]고구마케이크 3종',
        storeName: '안녕, 베이커리',
        tag: ['#비건', '무설탕', '글루텐프리'],
        price: 8500
    }
];

const ProductsList = () => {
    const [ProductName] = useRecoilState(productNameState);

    return (
        <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-2">
            {bestProductsData
                .filter(product => product.category === ProductName)
                .map(product => (
                    <ProductsCard key={product.id} product={product} />
                ))}
        </div>
    );
};

export default ProductsList;
