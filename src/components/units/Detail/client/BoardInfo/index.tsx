'use client';

import { transformDayTag } from '@/commons/constants/transfromTag';
import { IProductDetailType } from '../../types';
import TagContainer from '../TagContainer';
import { useState } from 'react';

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
    <>
      <div className="py-[16px] w-[92%] m-auto">
        <div className="pb-[16px]">
          <div className="mb-[4px] h-[21px] justify-start gap-1 inline-flex ">
            {uniqueTags.map((tag, i) => (
              <TagContainer key={i} tag={tag} />
            ))}
          </div>
          <div className="text-base font-normal leading-tight text-[#424242] mb-[2px] line">
            {data.board.title}
          </div>
          <div className="text-base font-semibold">
            <span className="text-xl">{data.board.price.toLocaleString()}</span>원
          </div>
        </div>

        <div className="border-b border-[#FAFAFA] border-solid"></div>

        <div className="flex flex-col gap-[16px] py-[16px] ">
          <div>
            <h2 className="text-[#9E9E9E] text-xs font-semibold pb-[10px]">주문 가능일</h2>
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
          </div>

          <div>
            <h2 className="text-[#9E9E9E] text-xs font-semibold pb-[10px]">상품 구성</h2>
            <div
              className={`text-xs  ${
                clickMore ? 'overflow-y-visible' : 'overflow-y-hidden h-[85px]'
              }`}
            >
              {data.board.products.map((item, i) => (
                <div className="mb-[10px]" key={i}>
                  <div className="font-regular text-[12px] text-gray-800 mb-[4px]">
                    {item.title}
                  </div>
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
                {!clickMore ? (
                  <button
                    type="button"
                    className="text-center  text-gray-600  text-[12px] py-[13px] mt-[30px] font-400 w-full border border-solid border-gray-200 rounded-[8px]"
                    onClick={() => setClickMore(true)}
                  >
                    더보기
                  </button>
                ) : (
                  <button
                    type="button"
                    className="text-center  text-gray-600 py-[13px] mt-[30px] text-[12px] font-400 w-full border border-solid border-gray-200 rounded-[8px]"
                    onClick={() => setClickMore(false)}
                  >
                    숨기기
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardInfo;
