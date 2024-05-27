import DeliveryFeeSection from '@/domains/product/components/DeliveryFeeSection';
import DetailInformationImgs from '@/domains/product/components/DetailInformationImgs';
import ProductOptionsSetion from '@/domains/product/components/ProductOptionsSection';
import ReviewBadgeSection from '@/domains/product/components/ReviewBadgeSection';

const DetailContentItems = ({ data }: { data: any }) => (
  <>
    <DeliveryFeeSection />
    <ReviewBadgeSection />
    <ProductOptionsSetion data={data} />
    <DetailInformationImgs data={data} />
  </>
);
export default DetailContentItems;
