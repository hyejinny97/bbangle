import DetailStoreInfo from '@/domains/store/components/DetailStoreInfo';

import BreifExplanation from './BriefExplanation';
import DetailContentItems from './DetailContentItems';
import ProductDetailImgs from './DetailProductImgs';

const DetailContent = ({ data }: { data: any }) => (
  <>
    <ProductDetailImgs boardImages={data.board.images} isBundled={data.board.isBundled} />
    <DetailStoreInfo store={data.store} />
    <BreifExplanation data={data} />
    <DetailContentItems data={data} />
  </>
);
export default DetailContent;
