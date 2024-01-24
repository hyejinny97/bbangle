'use client';

import { IProductType } from '@/commons/types/productType';
import TagSwiper from '@/components/units/Home/client/TagSwiper';
import Link from 'next/link';

interface ProductCardProps {
    product: IProductType;
    popular?: boolean;
    ranking?: number;
}

const ProductCard = ({ product, popular, ranking }: ProductCardProps) => {
    return (
        <Link href={`/products/${product.boardId}`} className="relative w-full -z-10">
            {popular && (
                <div className="absolute z-10 top-[6px] left-[6px] w-5 h-5 bg-white rounded-md border border-solid border-neutral-100 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-800 text-[11px] font-bold font-['Pretendard'] leading-[11px]">
                        {ranking}
                    </div>
                </div>
            )}
            <div
                className="w-full pb-[90%] bg-cover bg-center rounded-[6px] "
                style={{ backgroundImage: `url(${product.thumbnail})` }}
            ></div>
            <p className="text-xs font-normal text-color-Gray400 mt-[6px] mb-[3px]">
                {product.storeName}
            </p>
            <h3 className="w-full mb-1 overflow-hidden text-xs font-normal overflow-ellipsis whitespace-nowrap">
                {product.title}
            </h3>
            <p className="mb-1 text-sm font-medium text-color-Gray900 ">
                {product.price.toLocaleString()}원
            </p>
            {product.tags && <TagSwiper tag={product.tags} />}
        </Link>
    );
};

export default ProductCard;
