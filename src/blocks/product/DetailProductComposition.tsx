'use client';

import { useState } from 'react';

import PaddingWrapper from '@/components/commons/PaddingWrapper';
import InfoWrapper from '@/domains/product/components/ShowMoreProuductBtn/InfoWrapper';
import MoreBtn from '@/domains/product/components/ShowMoreProuductBtn/MoreBtn';
import TagContainer from '@/domains/product/components/TagContainer';
import { IProductDetailType } from '@/domains/product/types/productDetailType';

interface DetailProductCompositionProps {
  data: IProductDetailType;
}
const DetailProductComposition = ({ data }: DetailProductCompositionProps) => {
  const [clickMore, setClickMore] = useState(false);
  return (
    <PaddingWrapper className="pt-0">
      <InfoWrapper title="상품 구성">
        <div className="transition-all ease-in delay-150">
          {data.board.products.map((item) => (
            <div className="mb-[10px]" key={item.id}>
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
    </PaddingWrapper>
  );
};
export default DetailProductComposition;
