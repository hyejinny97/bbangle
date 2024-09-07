'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import ImageWithFallback from '@/shared/components/ImageWithFallback';
import Skeleton from '@/shared/components/Skeleton';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import useFullScreenModal from '@/shared/hooks/useFullScreenModal';
import { ReviewType } from '@/domains/review/types/review';
import PhotoModal from '@/domains/review/components/alert-box/PhotoModal';

interface Props {
  images: ReviewType['images'];
}

const ImageSlider = ({ images }: Props) => {
  const constraintRef = useRef(null);
  const { openFullScreenModal } = useFullScreenModal();

  return (
    <motion.div className="w-fit max-w-full" ref={constraintRef}>
      <motion.div drag="x" dragConstraints={constraintRef} className="flex w-max gap-[4px]">
        {images?.map(({ url, id }) => (
          <div
            key={id}
            className="relative size-[64px] aspect-square rounded-[6px] overflow-hidden"
          >
            <ImageWithFallback
              fallback={<Skeleton className="size-full rounded-none" />}
              src={url}
              alt="review image"
              blurDataURL={BLUR_DATA_URL}
              fill
              onClick={() => openFullScreenModal(<PhotoModal id={id} url={url} />)}
              className="object-cover cursor-pointer"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;
