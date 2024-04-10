import DetailStoreInfo from '@/blocks/product/DetailStoreInfo';
import GrayDivider from '@/components/commons/divider/GrayDivider';

interface DetailStoreSectionProps {
  store: {
    storeName: string;
    storeId: number;
    profile: string;
    isWished: boolean;
  };
}

const DetailStoreSection = ({ store }: DetailStoreSectionProps) => (
  <>
    <DetailStoreInfo store={store} />
    <GrayDivider />
  </>
);
export default DetailStoreSection;
