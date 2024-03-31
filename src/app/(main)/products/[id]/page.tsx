import API from '@/api';
import { IProductDetailType } from '@/components/units/Detail/types';
import ProductImgs from '@/components/units/Detail/client/ProductImgs';
import DetailInfo from '@/components/units/Detail/client/DetailInfo';

async function getDetail(params: { id: string }) {
  const data: IProductDetailType = await API.get(`/boards/${params.id}`);
  return data;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const data = await getDetail(params);

  return (
    <>
      <ProductImgs boardImages={data.board.images} isBundled={data.board.isBundled} />
      <DetailInfo data={data} />
    </>
  );
};

export default ProductDetail;
