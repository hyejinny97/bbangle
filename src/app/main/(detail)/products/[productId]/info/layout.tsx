import { ReactNode } from 'react';

import FixedPurchaseButtonSection from '@/blocks/product/FixedPurchaseButtonSection';
import getProductDetail from '@/domains/product/queries/getProductDetail';
import Header from '@/shared/components/Header';
import { ShareIcon } from '@/shared/components/icons';

interface DetailInfoLayoutProps {
  params: { productId: string };
  children: ReactNode;
}

const DetailInfoLayout = async ({ params: { productId }, children }: DetailInfoLayoutProps) => {
  const data = await getProductDetail(productId);
  return (
    <>
      <Header
        title={`[${data.store.storeName}] ${data.board.title}`}
        content={
          <button type="button" aria-label="공유 버튼">
            <ShareIcon />
          </button>
        }
        back
      />
      {children}
      <FixedPurchaseButtonSection data={data} />
    </>
  );
};

export default DetailInfoLayout;
