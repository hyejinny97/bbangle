'use client';

import { IProductDetailType } from '../../types';
import StoreInfo from '../StoreInfo';
import BoardInfo from '../BoardInfo';
import BtnHeart from '@/components/commons/button/client/Btn_heart';
import Button from '@/components/commons/button/client/Button';
import ToastPop from '@/components/commons/ToastPop';
import { MouseEvent, useState } from 'react';
import { ChooseWishListModal } from '@/components/commons/card/ProductCard/client/ChooseWishListModal';
import useToast from '@/commons/hooks/useToast';

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

  return (
    <>
      <div className="container flex-col flex-wrap ">
        <StoreInfo store={data.store} />
        <div className="border-b border-[#FAFAFA] border-solid"></div>
        <BoardInfo data={data} />
      </div>
      <div className="bg-white w-full max-w-[600px] mx-auto p-[16px] fixed flex gap-[10px] left-[0%] right-[0%] bottom-0 z-[5000]">
        <div className="border border-solid border-[#EEEEEE] p-[13px] rounded-[999px]">
          <BtnHeart isLiked={data.board.isWished} onClick={handleClickHeart} />
        </div>
        <div className="flex-1">
          <Button variants="primary-black" onClick={() => {}}>
            구매하러 가기
          </Button>
        </div>
      </div>
      {isModal && (
        <ChooseWishListModal isModal={isModal} setIsModal={setIsModal} productId={productId} />
      )}
    </>
  );
};

export default ProductInfo;
