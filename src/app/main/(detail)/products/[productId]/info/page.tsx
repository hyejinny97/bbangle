import DetailContent from '@/blocks/product/DetailContent';
import FixedPurchaseButtonSection from '@/blocks/product/FixedPurchaseButtonSection';
import getProductDetail from '@/domains/product/queries/getProductDetail';
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
      <DetailContent data={data} />
      <FixedPurchaseButtonSection data={data} />
    </>
  );
};

export default ProductDetail;
