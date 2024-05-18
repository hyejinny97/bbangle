'use client';

import useMyReviewQuery from '@/domains/review/queries/useMyReviewQuery';

const ReviewList = () => {
  const { data: reviews } = useMyReviewQuery();

  return <section>{reviews?.map((review) => <div>{review.comment}</div>)}</section>;
};

export default ReviewList;
