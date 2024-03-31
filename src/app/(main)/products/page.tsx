import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import FilterTab from '@/domains/product/components/FilterTab';
import ProductsTab from '@/components/units/(main)/Products/client/ProductsTab';

const Products = () => {
  return (
    <>
      <FilterTab filterFamilyId={FILTER_FAMILY_ID.main} />
      <ProductsTab />
    </>
  );
};

export default Products;
