import ProductAndStoreTabWithCount from '@/components/units/Search/client/ProductAndStoreTabWithCount';

interface SearchResultLayout {
  children: React.ReactNode;
}

const SearchResultLayout = ({ children }: SearchResultLayout) => {
  return (
    <>
      <ProductAndStoreTabWithCount />
      {children}
    </>
  );
};

export default SearchResultLayout;
