'use client';

import { usePathname } from 'next/navigation';
import PATH from '@/shared/constants/path';
import Badge from '@/shared/components/Badge';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { ReviewType } from '../../types/review';
import StarRating from '../common/StarRating';
import Comment from './Comment';
import ImageSlider from './ImageSlider';
import KebabMenu from './KebabMenu';
import ReviewSkeleton from './ReviewSkeleton';
import LikeButton from './LikeButton';

const Review = ({
  id,
  boardId,
  isBest,
  nickname,
  date,
  images,
  rating,
  comment,
  tags,
  like,
  isLiked,
  isMine
}: ReviewType) => {
  const pathname = usePathname();
  const isReviewListPage = pathname === PATH.reviewList(boardId) || pathname === PATH.myReview;
  const isReviewDetailPage = pathname === PATH.reviewDetail({ productId: boardId, reviewId: id });

  return (
    <PaddingWrapper className="flex flex-col gap-[4px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-[4px]">
          {isBest && <Badge type="best">BEST</Badge>}
          <span className="typo-title-14-medium">{nickname}</span>
        </div>

        {isMine && <KebabMenu reviewId={id} boardId={boardId} />}
      </div>

      <div className="flex flex-col gap-[8px]">
        <div>
          <StarRating value={rating} />
        </div>
        {images && <ImageSlider images={images} />}
        {isReviewListPage && <Comment comment={comment} boardId={boardId} reviewId={id} />}
        {isReviewDetailPage && <p className="typo-title-14-regular">{comment}</p>}
      </div>

      <div className="flex gap-[4px]">
        {tags.map((tag) => (
          <Badge key={tag} type="tag">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="typo-body-12-regular text-gray-500">{date}</span>
        <LikeButton id={id} isLiked={isLiked} like={like} />
      </div>
    </PaddingWrapper>
  );
};

Review.Skeleton = ReviewSkeleton;

export default Review;
