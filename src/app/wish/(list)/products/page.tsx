import WishFolderEditButtonSection from '@/blocks/wish/(list)/WishFolderEditButtonSection';
import WishFolderGrid from '@/blocks/wish/(list)/WishFolderGrid';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

const WishProductsPage = () => (
  <PaddingWrapper>
    <WishFolderEditButtonSection />
    <WishFolderGrid />
  </PaddingWrapper>
);

export default WishProductsPage;
