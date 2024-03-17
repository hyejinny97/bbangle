import usePopup from '@/commons/hooks/usePopup';
import { IProductType } from '@/commons/types/productType';
import BtnHeart from '@/components/commons/button/client/Btn_heart';
import ToastPop from '@/components/commons/ToastPop';
import { Dispatch, SetStateAction } from 'react';
import { BundleBadge } from '@/components/commons/badge/BundleBadge';
import { RankingBadge } from './RankingBadge';

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
  const { openPopup } = usePopup();
  const handleClickHeart = (id: number) => (e: any) => {
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
    <div
      className="w-full pb-[100%] bg-cover bg-center rounded-[6px] relative "
      style={{ backgroundImage: `url(${product.thumbnail})` }}
    >
      <div className="absolute bottom-[9px] right-[9px] ">
        <BtnHeart isLiked={product.isWished} onClick={handleClickHeart(product.boardId)} />
      </div>
      <div className="absolute z-10 top-[6px] left-[6px] w-full flex gap-2">
        <RankingBadge popular={popular} ranking={ranking} />
        {product.isBundled && <BundleBadge />}
      </div>
    </div>
  );
};
