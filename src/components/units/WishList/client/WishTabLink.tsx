'use client';

import TabLink from '@/components/commons/tabs/TabLink';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const WishTabLink = () => {
  const pathname = usePathname();

  const isProductsPage = pathname === '/wishlist/products';

  return (
    <motion.div layout layoutRoot className="flex">
      <TabLink href="/wishlist/products" active={isProductsPage}>
        상품
      </TabLink>
      <TabLink href="/wishlist/stores" active={!isProductsPage}>
        스토어
      </TabLink>
    </motion.div>
  );
};

export default WishTabLink;
