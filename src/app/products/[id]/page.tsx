'use client';

import Header from '@/components/commons/header/server/Header';
import ProductImgs from '@/components/units/Detail/client/ProductImgs';
import ProductInfo from '@/components/units/Detail/client/ProductInfo';

const product = {
    id: 1,
    productImg: '/assets/breadImg.jpeg',
    productName: '고구마케이크 3종',
    storeImg: '/assets/store_example.png',
    storeName: '안녕, 베이커리',
    tag: ['비건', '무설탕', '글루텐프리'],
    orderDay: ['화', '수'],
    price: 8500
};

const ProductDetail = () => {
    return (
        <>
            <Header title="상품보기" />
            <ProductImgs product={product} />
            <ProductInfo product={product} />
        </>
    );
};

export default ProductDetail;
