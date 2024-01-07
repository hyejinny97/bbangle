'use client';

import Header from '@/components/commons/header/server/Header';

const product = {
    id: 1,
    category: '상품별',
    productImg: '/assets/breadImg.jpeg',
    productName: '고구마케이크 3종',
    storeName: '안녕, 베이커리',
    tag: ['#비건', '무설탕', '글루텐프리'],
    price: 8500
};
const ProductInfo = () => {
    return (
        <div className="flex-col flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-2">
            <div className="py-[13.5px]">{product.storeName}</div>
            <div>
                <div>{product.tag}</div>
                <div>{product.productName}</div>
                <div>{product.price}</div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="py-3">
                    <h2 className="text-[#9E9E9E] pb-[6px]">주문 가능일</h2>
                    <div className="flex">
                        {['월', '화', '수', '목', '금', '토', '일'].map(item => (
                            <div
                                key={item}
                                className="rounded-full w-[24px] h-[24px] text-[#757575] bg-[#FAFAFA] flex items-center justify-center"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-[#9E9E9E] pb-[6px]">상품 구성</h2>
                    <div>상품입니다</div>
                </div>
            </div>
        </div>
    );
};
const ProductImgs = () => {
    return (
        <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-2">
            <div
                className="w-full pb-[90%] bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${product.productImg})` }}
            ></div>
        </div>
    );
};

const ProductDetail = () => {
    return (
        <>
            <Header title="상품보기" />
            <ProductImgs />
            <ProductInfo />
        </>
    );
};

export default ProductDetail;
