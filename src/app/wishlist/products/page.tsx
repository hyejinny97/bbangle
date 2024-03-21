import PaddingWrapper from '@/components/commons/PaddingWrapper';
import WishFolderEditButtonSection from '@/domians/wish/components/WishFolderEditButtonSection';
import WishFolderGrid from '@/domians/wish/components/WishFolderGrid';

const WishProductsPage = () => {
  return (
    <PaddingWrapper>
      <WishFolderEditButtonSection />
      <WishFolderGrid />
    </PaddingWrapper>
  );
};

export default WishProductsPage;
