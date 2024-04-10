import API from '@/api';
import DetailFixedBtnSection from '@/blocks/product/DetailFixedBtnSection';
import DetailOrderAvailableDays from '@/blocks/product/DetailOrderAvailableDays';
import DetailProductComposition from '@/blocks/product/DetailProductComposition';
import DetailProuductImgs from '@/blocks/product/DetailProductImgs';
import DetailProductSummary from '@/blocks/product/DetailProductSummary';
import DetailStoreInfo from '@/blocks/product/DetailStoreInfo';
import GrayDivider from '@/components/commons/divider/GrayDivider';
import ProductDetailImgs from '@/domains/product/components/ProductDetailImgs';
import { IProductDetailType } from '@/domains/product/types/productDetailType';

async function getDetail(params: { id: string }) {
  const data: IProductDetailType = await API.get(`/boards/${params.id}`);
  return data;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const data = await getDetail(params);

  return (
    <>
      <ProductDetailImgs boardImages={data.board.images} isBundled={data.board.isBundled} />
      <DetailStoreInfo store={data.store} />

      <GrayDivider />

      <DetailProductSummary data={data} />

      <GrayDivider />

      <DetailOrderAvailableDays data={data} />
      <DetailProductComposition data={data} />
      <DetailFixedBtnSection data={data} />
      <DetailProuductImgs data={data} />
    </>
  );
};

export default ProductDetail;
