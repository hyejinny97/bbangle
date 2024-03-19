'use client';

import { transformDayTag } from '@/commons/constants/transfromTag';
import { IProductDetailType } from '../../types';
import TagContainer from '../TagContainer';
import { useState } from 'react';
import InfoWrapper from './InfoWrapper';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import GrayDivider from '@/components/commons/divider/GrayDivider';
import MoreBtn from './MoreBtn';

interface BoardInfoProps {
  data: IProductDetailType;
}

function BoardInfo({ data }: BoardInfoProps) {
  const [clickMore, setClickMore] = useState(false);
  const products = data.board.products;
  const uniqueTags = Array.from(new Set(products.map(product => product.tags).flat()));
  const orderAvailableDays = data.board.orderAvailableDays;
  let availableDays = Object.keys(orderAvailableDays).filter(day => orderAvailableDays[day]);
  availableDays = availableDays.map(item => transformDayTag(item));

  return (
    <PaddingWrapper className="py-[16px]">
      <div className="pb-[16px]">
        <div className="mb-[4px] h-[21px] justify-start gap-1 inline-flex">
          {uniqueTags.map((tag, i) => (
            <TagContainer key={i} tag={tag} />
          ))}
        </div>
        <div className="text-base font-normal text-gray-800 mb-[2px]">{data.board.title}</div>
        <div className="text-base font-semibold">
          <span className="text-xl">{data.board.price.toLocaleString()}</span>원
        </div>
      </div>

      <GrayDivider />

      <div className="flex flex-col gap-[16px] py-[16px] ">
        <InfoWrapper title="주문가능일">
          <div className="flex gap-[4px] ">
            {['월', '화', '수', '목', '금', '토', '일'].map(item => (
              <div
                key={item}
                className={`rounded-full w-[24px] h-[24px] text-xs font-normal flex items-center justify-center  ${
                  availableDays.includes(item)
                    ? 'text-[#F04C28] bg-[#FEEDEA] font-medium'
                    : 'text-[#757575] bg-[#FAFAFA] '
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </InfoWrapper>

        <InfoWrapper title="상품 구성">
          <div
            className={`text-xs transition-all ease-in delay-150 ${
              clickMore ? 'overflow-y-visible ' : 'overflow-y-hidden h-[85px]'
            }`}
          >
            {data.board.products.map((item, i) => (
              <div className="mb-[10px]" key={i}>
                <div className="font-regular text-[12px] text-gray-800 mb-[4px]">{item.title}</div>
                <div className="mb-[4px] h-[21px] justify-start gap-1 inline-flex ">
                  {item.tags.map((tag, i) => (
                    <TagContainer key={i} tag={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {data.board.products.length > 2 && (
            <div className="bg-gradient-to-t from-white to-transparent ">
              <MoreBtn
                isMore={clickMore}
                onClick={() => {
                  setClickMore(!clickMore);
                }}
              />
            </div>
          )}
        </InfoWrapper>
      </div>
    </PaddingWrapper>
  );
}

export default BoardInfo;
