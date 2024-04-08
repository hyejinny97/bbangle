'use client';

import { useState } from 'react';

import { transformDayTag } from '@/commons/constants/transfromTag';
import GrayDivider from '@/components/commons/divider/GrayDivider';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

import { IProductDetailType } from '../../types/productDetailType';
import TagContainer from '../TagContainer';
import InfoWrapper from './InfoWrapper';
import MoreBtn from './MoreBtn';

interface BoardInfoProps {
  data: IProductDetailType;
}

const BoardInfo = ({ data }: BoardInfoProps) => {
  const [clickMore, setClickMore] = useState(false);
  const { products } = data.board;
  const uniqueTags = Array.from(new Set(products.map((product) => product.tags).flat()));
  const { orderAvailableDays } = data.board;
  let availableDays = Object.keys(orderAvailableDays).filter((day) => orderAvailableDays[day]);
  availableDays = availableDays.map((item) => transformDayTag(item));

  return (
    <PaddingWrapper>
      <div className="pb-[16px]">
        <div className="mb-[4px] h-[21px] justify-start gap-1 inline-flex">
          {uniqueTags.map((tag) => (
            <TagContainer key={tag} tag={tag} />
          ))}
        </div>
        <div className="text-16 leading-130 font-normal text-gray-800 mb-[2px]">
          {data.board.title}
        </div>
        <div className="text-16 font-bold leading-120">
          <span className="text-20">{data.board.price.toLocaleString()}</span>원
        </div>
      </div>

      <GrayDivider />

      <div
        className={`flex relative flex-col gap-[16px] py-[16px] ${
          clickMore ? 'overflow-y-visible ' : 'overflow-y-hidden h-[271px]'
        }`}
      >
        <InfoWrapper title="주문가능일">
          <div className="flex gap-[4px] ">
            {['월', '화', '수', '목', '금', '토', '일'].map((item) => (
              <div
                key={item}
                className={`rounded-full leading-150 w-[24px] h-[24px] text-12 font-normal flex items-center justify-center  ${
                  availableDays.includes(item)
                    ? 'text-primaryOrangeRed bg-subColorPink font-medium'
                    : 'text-gray-600 bg-gray-50 '
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </InfoWrapper>

        <InfoWrapper title="상품 구성">
          <div className="transition-all ease-in delay-150">
            {data.board.products.map((item) => (
              <div className="mb-[10px]" key={item.title}>
                <div className="font-normal leading-120 text-12 text-gray-800 mb-[4px]">
                  {item.title}
                </div>
                <div className="mb-[4px] h-[21px] justify-start gap-1 inline-flex ">
                  {item.tags.map((tag) => (
                    <TagContainer key={tag} tag={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </InfoWrapper>

        {data.board.products.length > 2 && (
          <PaddingWrapper className="w-full pt-[30px] absolute bottom-0  bg-gradient-to-t from-white via-[80.75%] via-white to-white/0 to-[116.09%]">
            <MoreBtn
              isMore={clickMore}
              onClick={() => {
                setClickMore(!clickMore);
              }}
            />
          </PaddingWrapper>
        )}
      </div>
    </PaddingWrapper>
  );
};

export default BoardInfo;
