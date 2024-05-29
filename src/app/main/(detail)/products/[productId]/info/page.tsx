import BreifExplanation from '@/blocks/product/BriefExplanation';
import DetailContentItems from '@/blocks/product/DetailContentItems';
import ProductDetailImgs from '@/blocks/product/DetailProductImgs';
import getProductDetail from '@/domains/product/queries/getProductDetail';
import DetailStoreInfo from '@/domains/store/components/DetailStoreInfo';

interface ProductDetailProps {
  params: { productId: string };
}

const ProductDetail = async ({ params: { productId } }: ProductDetailProps) => {
  const data = await getProductDetail(productId);

  return (
    <>
      <ProductDetailImgs boardImages={data.board.images} isBundled={data.board.isBundled} />
      <DetailStoreInfo store={data.store} />
      <BreifExplanation boardData={data.board} />
      <DetailContentItems data={data} />
    </>
  );
};

export default ProductDetail;
