import BreifExplanation from '@/blocks/product/(detail)/BriefExplanation';
import ProductDetailImgs from '@/blocks/product/(detail)/DetailProductImgs';
import DetailProductInfo from '@/blocks/product/(detail)/DetailProductInfo';
import FixedPurchaseButtonSection from '@/blocks/product/(detail)/FixedPurchaseButtonSection';
import getProductDetail from '@/domains/product/queries/getProductDetail';
import DetailStoreInfo from '@/domains/store/components/DetailStoreInfo';
import Header from '@/shared/components/Header';
import { ShareIcon } from '@/shared/components/icons';

interface ProductDetailProps {
  params: { productId: string };
}

const ProductDetail = async ({ params: { productId } }: ProductDetailProps) => {
  const data = await getProductDetail(productId);

  return (
    <>
      <Header
        title={`[${data.store.storeName}] ${data.board.title}`}
        content={
          <button type="button" aria-label="공유 버튼">
            <ShareIcon />
          </button>
        }
        back
      />
      <ProductDetailImgs boardImages={data.board.images} isBundled={data.board.isBundled} />
      <DetailStoreInfo store={data.store} />
      <BreifExplanation data={data} />
      <DetailProductInfo data={data} />
      <FixedPurchaseButtonSection data={data} />
    </>
  );
};

export default ProductDetail;
