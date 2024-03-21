import PaddingWrapper from '@/components/commons/PaddingWrapper';
import WishFolderGrid from '@/domians/wish/components/WishFolderGrid';
import WishFolderModifyButtonSection from '@/domians/wish/components/WishFolderModifyButtonSection';

const WishProductsPage = () => {
  return (
    <PaddingWrapper>
      <WishFolderModifyButtonSection />
      <WishFolderGrid />
    </PaddingWrapper>
  );
};

export default WishProductsPage;
