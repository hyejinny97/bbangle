import WishFolderEditButtonSection from '@/blocks/wish/WishFolderEditButtonSection';
import WishFolderGrid from '@/blocks/wish/WishFolderGrid';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

const WishProductsPage = async () => (
  <PaddingWrapper>
    <WishFolderEditButtonSection />
    <WishFolderGrid />
  </PaddingWrapper>
);

export default WishProductsPage;
