import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import FilterSection from '@/domains/product/components/FilterSection';
import ProductList from '@/components/units/Search/client/ProductList';

interface SearchProductsProps {
  searchParams: { query?: string };
}

const SearchProducts = ({ searchParams: { query } }: SearchProductsProps) => {
  return (
    <>
      <FilterSection filterFamilyId={FILTER_FAMILY_ID.search} />
      <ProductList keyword={query || ''} />
    </>
  );
};

export default SearchProducts;
