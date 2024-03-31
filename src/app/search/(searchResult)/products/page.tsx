import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import FilterTab from '@/domains/product/components/FilterTab';
import ProductList from '@/components/units/Search/client/ProductList';

interface SearchProductsProps {
  searchParams: { query?: string };
}

const SearchProducts = ({ searchParams: { query } }: SearchProductsProps) => {
  return (
    <>
      <FilterTab filterFamilyId={FILTER_FAMILY_ID.search} />
      <ProductList keyword={query || ''} />
    </>
  );
};

export default SearchProducts;
