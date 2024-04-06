import { Suspense } from 'react';
import SearchInputSection from '@/blocks/search/SearchInputSection';

interface SearchLayoutProps {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: SearchLayoutProps) => {
  return (
    <>
      <Suspense>
        <SearchInputSection />
      </Suspense>
      {children}
    </>
  );
};

export default SearchLayout;
