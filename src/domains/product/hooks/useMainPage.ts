import { usePathname } from 'next/navigation';

export const useMainPage = () => {
  const pathname = usePathname();
  const productPath = '/products';
  const storePath = '/stores';

  const isProductListPage = pathname === productPath;
  const isStoreListPage = pathname === storePath;

  const isDetailPage = !isStoreListPage && !isProductListPage;
  const isProductDetailPage = isDetailPage && pathname.startsWith(productPath);
  const isStoreDetailPage = isDetailPage && pathname.startsWith(storePath);

  return { isDetailPage, isProductDetailPage, isStoreDetailPage };
};
