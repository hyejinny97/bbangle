'use client';

import Link from 'next/link';
import Image from 'next/image';
import PATH from '@/shared/constants/path';
import useFullScreenModal from '@/shared/hooks/useFullScreenModal';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import PhotoModal from '@/domains/review/components/alert-box/PhotoModal';
import { ReviewPhoto } from '@/domains/review/types/review';

interface Props {
  photos: Array<ReviewPhoto>;
  productId: number;
}

const PhotoSection = ({ photos, productId }: Props) => {
  const { openFullScreenModal } = useFullScreenModal();

  return (
    <div className="grid grid-cols-4 gap-[4px]">
      {photos.slice(0, 4).map(({ id, url }, idx) => {
        const fourthImage = idx === 3;
        if (fourthImage) {
          return (
            <Link
              key={id}
              href={PATH.reviewPhotos(productId)}
              className="relative after:content-['+더보기'] after:flex-center after:absolute after:inset-0 after:bg-black/50 after:size-full after:text-white after:rounded-[6px]"
            >
              <Image
                src={url}
                alt="best review image"
                width={80}
                height={80}
                blurDataURL={BLUR_DATA_URL}
                className="w-full aspect-square object-cover border-solid border-[1px] border-gray-300 rounded-[6px]"
              />
            </Link>
          );
        }
        return (
          <Image
            key={id}
            src={url}
            alt="best review image"
            width={80}
            height={80}
            blurDataURL={BLUR_DATA_URL}
            onClick={() => openFullScreenModal(<PhotoModal id={id} url={url} />)}
            className="w-full aspect-square object-cover border-solid border-[1px] border-gray-300 rounded-[6px] cursor-pointer"
          />
        );
      })}
    </div>
  );
};

export default PhotoSection;
