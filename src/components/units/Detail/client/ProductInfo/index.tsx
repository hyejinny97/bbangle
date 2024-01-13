'use client';

import TagContainer from '../TagContainer';
import StoreInfo from '../StoreInfo';

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
            <StoreInfo product={product} />
            <div className="border-b border-[#FAFAFA] border-solid"></div>
            <div className="py-[13.5px] w-[92%] m-auto">
                <TagContainer product={product} />
                <div className="border-2 border-gray-300"></div>
                <div className="text-base font-normal leading-tight text-[#424242] mb-[2px]">
                    {product.productName}
                </div>
                <div className="text-base font-bold leading-tight">
                    <span className="text-xl font-bold leading-normal">{product.price}</span>원
                </div>
            </div>
            <div className="border-b border-[#FAFAFA] border-solid"></div>
            <div className="flex flex-col gap-3 py-[13.5px] w-[92%] m-auto">
                <div className="py-3">
                    <h2 className="text-[#9E9E9E] text-xs font-semibold pb-[6px]">주문 가능일</h2>
                    <div className="flex gap-[4px] ">
                        {['월', '화', '수', '목', '금', '토', '일'].map(item => (
                            <div
                                key={item}
                                className={`rounded-full w-[24px] h-[24px] text-xs font-normal flex items-center justify-center  ${
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
                    <h2 className="text-[#9E9E9E] text-xs font-semibold pb-[6px]">상품 구성</h2>
                    <div className="text-xs">상품입니다</div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
