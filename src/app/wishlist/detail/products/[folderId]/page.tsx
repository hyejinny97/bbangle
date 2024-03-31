import WishFolderEditButtonSection from '@/blocks/wish/WishFolderEditButtonSection';
import WishProductList from '@/blocks/wish/WishProductList';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

const WishProductsDetail = async () => {
  return (
    <PaddingWrapper>
      <WishFolderEditButtonSection />
      <WishProductList />
    </PaddingWrapper>
  );
};

export default WishProductsDetail;
