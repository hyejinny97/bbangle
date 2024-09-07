'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import useGetReviewPhotosQuery from '@/domains/review/queries/useGetReviewPhotosQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import PhotoSkeleton from './PhotoSkeleton';

interface Props {
  boardId: number;
}

const PhotoList = ({ boardId }: Props) => {
  const {
    data: photos,
    isError,
    fetchNextPage,
    hasNextPage
  } = useGetReviewPhotosQuery({ boardId });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isError) {
    return (
      <SadBbangleBox className="absoulte-center">
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }
  if (!photos || photos.length === 0) {
    return (
      <SadBbangleBox className="absoulte-center">
        <p>리뷰 사진이 없어요!</p>
      </SadBbangleBox>
    );
  }

  return (
    <PaddingWrapper className="grid grid-cols-3 gap-[10px] pt-0">
      {photos.map(({ id, url }) => (
        <Image
          key={id}
          src={url}
          alt="리뷰 이미지"
          width={100}
          height={100}
          blurDataURL={BLUR_DATA_URL}
          className="w-full aspect-square object-cover border-solid border-[1px] border-gray-300 rounded-[6px]"
        />
      ))}
      {hasNextPage && <PhotoSkeleton ref={ref} count={3} />}
    </PaddingWrapper>
  );
};

export default PhotoList;
