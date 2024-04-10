'use client';

import { useState } from 'react';

import PaddingWrapper from '@/components/commons/PaddingWrapper';

import { IProductDetailType } from '../../types/productDetailType';
import MoreBtn from './MoreBtn';

interface DetailBoardInfoProps {
  data: IProductDetailType;
}

const ShowMoreProductBtn = ({ data }: DetailBoardInfoProps) => {
  const [clickMore, setClickMore] = useState(false);

  return (
    <PaddingWrapper>
      <div
        className={`flex relative flex-col gap-[16px] py-[16px] ${
          clickMore ? 'overflow-y-visible ' : 'overflow-y-hidden h-[271px]'
        }`}
      >
        {data.board.products.length > 2 && (
          <MoreBtn
            isMore={clickMore}
            onClick={() => {
              setClickMore(!clickMore);
            }}
          />
        )}
      </div>
    </PaddingWrapper>
  );
};

export default ShowMoreProductBtn;
