import API from '@/api';
import DetailFixedBtnSection from '@/blocks/product/DetailFixedBtnSection';
import DetailInformationImgs from '@/blocks/product/DetailInformationImgs';
import DetailOrderAvailableDays from '@/blocks/product/DetailOrderAvailableDays';
import DetailProductComposition from '@/blocks/product/DetailProductComposition';
import ProductDetailImgs from '@/blocks/product/DetailProductImgs';
import DetailProductSummary from '@/blocks/product/DetailProductSummary';
import GrayDivider from '@/components/commons/divider/GrayDivider';
import { IProductDetailType } from '@/domains/product/types/productDetailType';
import DetailStoreInfo from '@/domains/store/components/DetailStoreInfo';

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
      <DetailInformationImgs data={data} />
    </>
  );
};

export default ProductDetail;
