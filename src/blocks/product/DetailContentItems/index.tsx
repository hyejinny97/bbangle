import DeliveryFeeSection from './DeliveryFeeSection';
import DetailInformationImgs from './DetailInformationImgs';
import ProductOptionsSetion from './ProductOptionsSection';
import ReviewBadgeSection from './ReviewBadgeSection';

const DetailContentItems = ({ data }: { data: any }) => (
  <>
    <DeliveryFeeSection />
    <ReviewBadgeSection />
    <ProductOptionsSetion data={data} />
    <DetailInformationImgs data={data} />
  </>
);
export default DetailContentItems;
