import { Suspense } from 'react';
import ProductAndStoreTabWithCount from '@/components/units/Search/client/ProductAndStoreTabWithCount';

interface SearchResultLayout {
  children: React.ReactNode;
}

const SearchResultLayout = ({ children }: SearchResultLayout) => {
  return (
    <>
      <Suspense>
        <ProductAndStoreTabWithCount />
      </Suspense>
      {children}
    </>
  );
};

export default SearchResultLayout;
