import API from '@/api';
import ProductImgs from '@/domains/product/components/ProductImgs';
import ProductInfo from '@/domains/product/components/ProductInfo';
import { IProductDetailType } from '@/domains/product/types/productDetailType';

async function getDetail(params: { id: string }) {
  const data: IProductDetailType = await API.get(`/boards/${params.id}`);
  return data;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const data = await getDetail(params);

  return (
    <>
      <ProductImgs boardImages={data.board.images} isBundled={data.board.isBundled} />
      <ProductInfo data={data} />
    </>
  );
};

export default ProductDetail;
