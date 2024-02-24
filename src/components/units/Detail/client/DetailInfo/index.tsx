'use client';

import { IProductDetailType } from '../../types';
import StoreInfo from '../StoreInfo';
import BoardInfo from '../BoardInfo';
import BtnHeart from '@/components/commons/button/client/Btn_heart';
import Btn from '@/components/commons/button/client/Btn';

interface ProductInfoProps {
  data: IProductDetailType;
}

const ProductInfo = ({ data }: ProductInfoProps) => {
  return (
    <>
      <div className="flex-col flex-wrap container ">
        <StoreInfo store={data.store} />
        <div className="border-b border-[#FAFAFA] border-solid"></div>
        <BoardInfo data={data} />
      </div>
      <div className="bg-white w-full max-w-[600px] mx-auto p-[16px] fixed flex gap-[10px] left-[0%] right-[0%] bottom-0 z-[5000]">
        <div className="border border-solid border-[#EEEEEE] p-[13px] rounded-[999px]">
          <BtnHeart isLiked={data.board.isWished} onClick={() => {}} />
        </div>
        <div className="flex-1">
          <Btn title="구매하러 가기" active={true} onClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
