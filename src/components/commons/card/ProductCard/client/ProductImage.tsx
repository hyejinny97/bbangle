import { Dispatch, SetStateAction } from 'react';

import Image from 'next/image';

import usePopup from '@/commons/hooks/usePopup';
import { IProductType } from '@/commons/types/productType';
import { BundleBadge } from '@/components/commons/badge/BundleBadge';
import BtnHeart from '@/components/commons/button/client/Btn_heart';
import ToastPop from '@/components/commons/ToastPop';

import { RankingBadge } from '../../../badge/RankingBadge';

interface ProductImageProps {
  product: IProductType;
  popular?: boolean;
  ranking?: number;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setProductId: Dispatch<SetStateAction<number | undefined>>;
}
export const ProductImage = ({
  product,
  popular,
  ranking,
  setIsModal,
  setProductId
}: ProductImageProps) => {
  const blurDataUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';
  const { openPopup } = usePopup();
  const handleClickHeart = (id: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (product.isWished) {
      openPopup(
        <ToastPop>
          <span>이미 찜한 상품 입니다.</span>
        </ToastPop>
      );
    } else {
      setIsModal(true);
      setProductId(id);
    }
  };

  return (
    <div>
      <Image
        src={product.thumbnail}
        alt="상품사진"
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={blurDataUrl}
        className="rounded-[6px] aspect-square"
      />
      <div className="absolute bottom-[9px] right-[9px] h-[20px]">
        <BtnHeart isLiked={product.isWished} onClick={handleClickHeart(product.boardId)} />
      </div>
      <div className="absolute z-10 top-[6px] left-[6px] w-full flex gap-[6px]">
        {popular && <RankingBadge ranking={ranking} />}
        {product.isBundled && <BundleBadge />}
      </div>
    </div>
  );
};
