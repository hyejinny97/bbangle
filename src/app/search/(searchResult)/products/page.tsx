import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import FilterSection from '@/domains/product/components/FilterSection';
import SearchProductList from '@/blocks/search/SearchProductList';

interface SearchProductsProps {
  searchParams: { query?: string };
}

const SearchProducts = ({ searchParams: { query } }: SearchProductsProps) => {
  return (
    <>
      <FilterSection filterFamilyId={FILTER_FAMILY_ID.search} />
      <SearchProductList keyword={query} />
    </>
  );
};

export default SearchProducts;
