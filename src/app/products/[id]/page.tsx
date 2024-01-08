'use client';

import Header from '@/components/commons/header/server/Header';
import StarSvg from '../../../commons/assets/star.svg';
import Image from 'next/image';

const product = {
    id: 1,
    category: '상품별',
    productImg: '/assets/breadImg.jpeg',
    productName: '고구마케이크 3종',
    storeName: '안녕, 베이커리',
    tag: ['비건', '무설탕', '글루텐프리'],
    price: 8500
};
const ProductInfo = () => {
    return (
        <div className="flex-col flex-wrap container">
            <div className="py-[13.5px] w-[92%] m-auto flex items-center justify-between ">
                <div className="flex gap-[6px] items-center">
                    <Image src={product.productImg} width={24} height={24} alt="설명" />
                    <div className="text-[#757575]">{product.storeName}</div>
                </div>
                <StarSvg />
            </div>
            <div className="border-b border-[#FAFAFA] border-solid"></div>
            <div className="py-[13.5px] w-[92%] m-auto">
                <TagContainer />
                <div className="border-2 border-gray-300"></div>
                <div className="text-[16px] text-[#424242] mb-[2px]">{product.productName}</div>
                <div className="text-[16px] font-bold">
                    <span className="text-[20px] font-bold">{product.price}</span>원
                </div>
            </div>
            <div className="border-b border-[#FAFAFA] border-solid"></div>
            <div className="flex flex-col gap-3 py-[13.5px] w-[92%] m-auto">
                <div className="py-3">
                    <h2 className="text-[#9E9E9E] pb-[6px]">주문 가능일</h2>
                    <div className="flex gap-[4px]">
                        {['월', '화', '수', '목', '금', '토', '일'].map(item => (
                            <div
                                key={item}
                                className="rounded-full p-3 font-regular  text-[#757575] bg-[#FAFAFA] flex items-center justify-center font-['Pretendard'] "
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

const TagContainer = () => (
    <div className="flex gap-1 mb-4">
        {product.tag.map((tag, index) => (
            <div
                key={index}
                className="w-auto  h-[21px] px-[6px]  bg-white rounded border border-solid border-gray-200 justify-center items-center gap-1 inline-flex"
            >
                <span className="text-neutral-500 text-[11px] font-normal font-['Pretendard'] ">
                    {tag}
                </span>
            </div>
        ))}
    </div>
);

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
