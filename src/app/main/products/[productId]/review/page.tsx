import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { reivewQueryOption } from '@/domains/review/queries/useReviewQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ReviewList from './_blocks/ReviewList';
import RatingSection from './_blocks/RatingSection';
import BadgeSection from './_blocks/BadgeSection';
import GaugeSection from './_blocks/GaugeSection';
import PhotoSection from './_blocks/PhotoSection';
import ReviewCreateButton from './_blocks/ReviewCreateButton';

interface Props {
  params: { productId: string };
}

const ReviewListPage = async ({ params }: Props) => {
  const productId = Number(params.productId);
  const queryClient = new QueryClient();
  const { queryKey, queryFn, initialPageParam } = reivewQueryOption(productId);
  const reviews = await queryClient.fetchInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam
  });

  const bestReview = reviews.pages[0].content[0];

  return (
    <>
      <PaddingWrapper className="flex flex-col gap-[16px] border-b-[6px] border-gray-100">
        <RatingSection params={params} />
        <BadgeSection params={params} />
        <GaugeSection params={params} />
      </PaddingWrapper>
      <PaddingWrapper className="typo-title-14-semibold">리뷰</PaddingWrapper>
      <PaddingWrapper className="flex flex-col gap-[16px] border-b-[6px] border-gray-100">
        <ReviewCreateButton productId={productId} />
        {bestReview.images && bestReview.images.length > 0 && (
          <PhotoSection photos={bestReview.images} productId={productId} />
        )}
      </PaddingWrapper>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ReviewList />
      </HydrationBoundary>
    </>
  );
};

export default ReviewListPage;
