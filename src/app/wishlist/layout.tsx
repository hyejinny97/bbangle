'use client';

import Header from '@/components/commons/header/client/Header';
import TabLink from '@/components/commons/tabs/TabLink';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Layout {
  children: ReactNode;
}

const Laoyout = ({ children }: Layout) => {
  const pathname = usePathname();
  const productsPath = '/wishlist/products';
  const storePath = '/wishlist/stores';

  const isProductPage = pathname === productsPath;
  const isStorePage = pathname === storePath;
  const isDetailPage = !isStorePage && !isProductPage;

  return (
    <>
      <Header back={isDetailPage} title="찜" />
      {!isDetailPage && (
        <div className="flex">
          <TabLink href="/wishlist/products" active={isProductPage}>
            상품
          </TabLink>
          <TabLink href="/wishlist/stores" active={isStorePage}>
            스토어
          </TabLink>
        </div>
      )}
      {children}
    </>
  );
};

export default Laoyout;
