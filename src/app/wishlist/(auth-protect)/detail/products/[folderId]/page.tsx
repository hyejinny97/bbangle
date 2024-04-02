import WishProductList from '@/blocks/wish/WishProductList';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import WishProductSortSelect from '@/domains/wish/components/WishProductSortSelect';

const WishProductsDetail = async () => {
  return (
    <>
      <PaddingWrapper className="pb-[12px]">
        <WishProductSortSelect />
      </PaddingWrapper>
      <PaddingWrapper>
        <WishProductList />
      </PaddingWrapper>
    </>
  );
};

export default WishProductsDetail;
