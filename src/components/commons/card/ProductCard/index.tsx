'use client';

import { IProductType } from '@/commons/types/productType';
import Link from 'next/link';
import { useState } from 'react';
import { IStoreType } from '@/commons/types/storeType';
import { RankingBadge } from './client/RankingBadge';
import { ProductImage } from './client/ProductImage';
import { ProductSummary } from './client/ProductSummary';
import { ChooseWishListModal } from './client/ChooseWishListModal';

interface ProductCardProps {
    product: IProductType;
    storeData?: IStoreType;
    popular?: boolean;
    ranking?: number;
}

const ProductCard = ({ product, popular, ranking }: ProductCardProps) => {
    const [isModal, setIsModal] = useState(false);
    const [productId, setProductId] = useState<number>();

    return (
        <>
            <Link href={`/products/${product.boardId}`} className="w-full relative">
                <div className="absolute z-10 top-[6px] left-[6px]  h-5 bg-[#ED5F5F] rounded-md px-[4px] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[11px] font-regular leading-[11px]">
                        묶음 상품
                    </div>
                </div>

                <RankingBadge popular={popular} ranking={ranking} />
                <ProductImage
                    product={product}
                    setIsModal={setIsModal}
                    setProductId={setProductId}
                />
                <ProductSummary product={product} />
            </Link>
            <ChooseWishListModal isModal={isModal} setIsModal={setIsModal} productId={productId} />
        </>
    );
};

export default ProductCard;
