import DetailContent from '@/blocks/product/DetailContent';
import getProductDetail from '@/domains/product/queries/getProductDetail';

interface ProductDetailProps {
  params: { productId: string };
}

const ProductDetail = async ({ params: { productId } }: ProductDetailProps) => {
  const data = await getProductDetail(productId);

  return <DetailContent data={data} />;
};

export default ProductDetail;
