import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import FilterSection from '@/domains/product/components/FilterSection';
import MainProductList from '@/blocks/product/MainProductList';

const Products = () => (
  <>
    <FilterSection filterFamilyId={FILTER_FAMILY_ID.main} />
    <MainProductList />
  </>
);

export default Products;
