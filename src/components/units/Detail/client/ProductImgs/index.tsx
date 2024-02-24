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
                        {boardImages.length > 0 ? (
                            boardImages.map(image => (
                                <>
                                    <SwiperSlide key={image.id}>
                                        <div className="">
                                            <div className="w-full pb-[90%]">
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
                                </>
                            ))
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
                {boardImages.length > 0 && (
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
