'use client';

import { MouseEvent, useState } from 'react';

import Image from 'next/image';

import useToast from '@/commons/hooks/useToast';
import BtnOutlinedHeart from '@/components/commons/button/client/Btn_outlined_heart';
import Button from '@/components/commons/button/client/Button';
import { ChooseWishListModal } from '@/components/commons/card/ProductCard/client/ChooseWishListModal';
import GrayDivider from '@/components/commons/divider/GrayDivider';
import ToastPop from '@/components/commons/ToastPop';

import { IProductDetailType } from '../../types';
import BoardInfo from '../BoardInfo';
import StoreInfo from '../StoreInfo';

interface ProductInfoProps {
  data: IProductDetailType;
}

const ProductInfo = ({ data }: ProductInfoProps) => {
  const [isModal, setIsModal] = useState(false);
  const [productId, setProductId] = useState<number>();
  const { openToast } = useToast();

  const handleClickHeart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (data.board.isWished) {
      openToast(
        <ToastPop>
          <div>이미 찜한 상품 입니다.</div>
        </ToastPop>
      );
    } else {
      setIsModal(true);
      setProductId(data.board.boardId);
    }
  };

  const gotoPurchaseUrl = () => {
    window.open(data.board.purchaseUrl, '_blank');
  };

  return (
    <>
      <div className="container flex-col flex-wrap w-full">
        <StoreInfo store={data.store} />
        <GrayDivider />
        <BoardInfo data={data} />
        <div className="w-full p-0 ">
          {data.board?.detail.map(item => (
            <Image
              key={item.imgIndex}
              src={item.url}
              alt="상세"
              width={600}
              height={100}
              className=" m-auto"
            />
          ))}
        </div>
      </div>

      <div className="bg-white z-[5000] w-full max-w-[600px] mx-auto p-[16px] fixed flex items-center gap-[10px] left-[0%] right-[0%] bottom-0 ">
        <div>
          <BtnOutlinedHeart isLiked={data.board.isWished} onClick={handleClickHeart} />
        </div>
        <div className="flex-1">
          <Button onClick={gotoPurchaseUrl}>구매하러 가기</Button>
        </div>
      </div>
      {isModal && (
        <ChooseWishListModal isModal={isModal} setIsModal={setIsModal} productId={productId} />
      )}
    </>
  );
};

export default ProductInfo;
