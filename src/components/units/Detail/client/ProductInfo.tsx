'use client';

import StarSvg from '../../../../commons/assets/star.svg';
import Image from 'next/image';
import TagContainer from './TagContainer';

interface ProductsProps {
    product: {
        id: number;
        productImg: string;
        storeImg: string;
        productName: string;
        storeName: string;
        tag: string[];
        orderDay: string[];
        price: number;
    };
}

const ProductInfo: React.FC<ProductsProps> = ({ product }) => {
    return (
        <div className="flex-col flex-wrap container">
            <div className="py-[13.5px] w-[92%] m-auto flex items-center justify-between ">
                <div className="flex gap-[6px] items-center">
                    <div className="rounded-full overflow-hidden">
                        <Image src={product.storeImg} width={24} height={24} alt="설명" />
                    </div>
                    <div className="text-[#757575] text-[14px]">{product.storeName}</div>
                </div>
                <StarSvg />
            </div>
            <div className="border-b border-[#FAFAFA] border-solid"></div>
            <div className="py-[13.5px] w-[92%] m-auto">
                <TagContainer product={product} />
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
                                className={`rounded-full p-3 font-regular flex items-center justify-center font-['Pretendard'] ${
                                    product.orderDay.includes(item)
                                        ? 'text-[#F04C28] bg-[#FEEDEA] font-medium'
                                        : 'text-[#757575] bg-[#FAFAFA] '
                                }`}
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

export default ProductInfo;
