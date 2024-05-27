import DetailSectionWrapper from '@/domains/product/components/DetailSectionWrapper';
import RepresentativeBadge from '@/shared/components/RepresentativeBadge';

const ReviewBadgeSection = () => (
  <DetailSectionWrapper title="리뷰 대표 뱃지">
    <div className="flex gap-3">
      <RepresentativeBadge shape="good" className="flex-1 aspect-square" />
      <RepresentativeBadge shape="sweet" className="flex-1 aspect-square" />
      <RepresentativeBadge shape="soft" className=" flex-1 aspect-square" />
    </div>
  </DetailSectionWrapper>
);

export default ReviewBadgeSection;
