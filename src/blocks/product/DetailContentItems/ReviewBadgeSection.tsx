import DetailSectionWrapper from '@/domains/product/components/DetailSectionWrapper';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import RepresentativeBadge from '@/shared/components/RepresentativeBadge';

const ReviewBadgeSection = () => (
  <DetailSectionWrapper title="리뷰 대표 뱃지">
    <PaddingWrapper className="flex gap-3 pt-0">
      <RepresentativeBadge shape="good" className="flex-1 aspect-square" />
      <RepresentativeBadge shape="sweet" className="flex-1 aspect-square" />
      <RepresentativeBadge shape="soft" className=" flex-1 aspect-square" />
    </PaddingWrapper>
  </DetailSectionWrapper>
);

export default ReviewBadgeSection;
