'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import None from '../../assets/image_none.svg';
import { BundleBadge } from '@/components/commons/badge/BundleBadge';

interface Image {
  id: number;
  url: string;
}

interface ProductImgProps {
  boardImages: Image[];
  isBundled: boolean;
}

const ProductImgs = ({ boardImages, isBundled }: ProductImgProps) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <div className="w-[92%] relative m-auto">
      <div>
        <div className="relative">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
            onActiveIndexChange={swiperCore => {
              setSwiperIndex(swiperCore.activeIndex);
            }}
          >
            {boardImages ? (
              boardImages.map(image =>
                image.url ? (
                  <SwiperSlide key={image.id}>
                    <div className="">
                      <div className="w-full pb-[100%]">
                        <Image
                          src={image.url}
                          alt="img"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ) : (
                  <div
                    key={image.id}
                    className="w-full relative m-auto flex items-center justify-center border border-solid border-gray-100 rounded-[10px]"
                    style={{ paddingTop: '100%' }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <None />
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="w-full py-[43%] m-auto flex items-center justify-center border border-solid border-gray-100 rounded-[10px] ">
                <None />
              </div>
            )}
          </Swiper>
        </div>
        {isBundled && (
          <div className="absolute top-[10px] left-[10px] z-10">
            <BundleBadge />
          </div>
        )}
        {boardImages[0].url && (
          <div className="absolute bottom-[10px] right-[10px] w-[37px] h-[21px] px-2.5 py-0.5 bg-black bg-opacity-60 rounded-[50px] justify-center items-center gap-2.5 inline-flex z-10">
            <div className="text-white text-[11px] font-medium">
              {swiperIndex + 1}/{boardImages.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImgs;
