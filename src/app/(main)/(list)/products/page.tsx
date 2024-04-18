import MainProductList from '@/blocks/product/MainProductList';
import FilterSection from '@/domains/product/components/FilterSection';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';

const Products = () => (
  <>
    <FilterSection filterFamilyId={FILTER_FAMILY_ID.main} />
    <MainProductList />
  </>
);

export default Products;
