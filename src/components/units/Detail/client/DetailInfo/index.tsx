'use client';

import Image from 'next/image';

import BtnOutlinedHeart from '@/components/commons/button/client/Btn_outlined_heart';
import Button from '@/components/commons/button/client/Button';
import GrayDivider from '@/components/commons/divider/GrayDivider';

import { IProductDetailType } from '../../types';
import BoardInfo from '../BoardInfo';
import StoreInfo from '../StoreInfo';

interface ProductInfoProps {
  data: IProductDetailType;
}

const ProductInfo = ({ data }: ProductInfoProps) => {
  const handleClickHeart = () => {};

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
              width={0}
              height={0}
              sizes="100vw"
              className=" m-auto"
              style={{
                width: '100% ',
                padding: 0,
                margin: 0
              }}
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
    </>
  );
};

export default ProductInfo;
