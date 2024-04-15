import WishProductList from '@/blocks/wish/WishProductList';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import WishProductSortSelect from '@/domains/wish/components/WishProductSortSelect';

const WishProductsDetail = async () => (
  <>
    <PaddingWrapper className="pb-[12px]">
      <WishProductSortSelect />
    </PaddingWrapper>
    <PaddingWrapper>
      <WishProductList />
    </PaddingWrapper>
  </>
);

export default WishProductsDetail;
