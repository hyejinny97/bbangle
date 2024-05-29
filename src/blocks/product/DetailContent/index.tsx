import { IProductDetailType } from '@/domains/product/types/productDetailType';
import DetailStoreInfo from '@/domains/store/components/DetailStoreInfo';

import BreifExplanation from './BriefExplanation';
import DetailContentItems from './DetailContentItems';
import ProductDetailImgs from './DetailProductImgs';

interface DetailContentProps {
  data: IProductDetailType;
}

const DetailContent = ({ data }: DetailContentProps) => (
  <>
    <ProductDetailImgs boardImages={data.board.images} isBundled={data.board.isBundled} />
    <DetailStoreInfo store={data.store} />
    <BreifExplanation boardData={data.board} />
    <DetailContentItems data={data} />
  </>
);
export default DetailContent;
