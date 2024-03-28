import { PAGE_SEARCH } from '@/domains/product/constants/pageParam';
import FilterTab from '@/domains/product/components/FilterTab';
import ProductList from '@/components/units/Search/client/ProductList';

interface SearchProductsProps {
  searchParams: { query?: string };
}

const SearchProducts = ({ searchParams: { query } }: SearchProductsProps) => {
  return (
    <>
      <FilterTab page={PAGE_SEARCH} />
      <ProductList keyword={query || ''} />
    </>
  );
};

export default SearchProducts;
